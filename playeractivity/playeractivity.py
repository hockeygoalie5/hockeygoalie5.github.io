import re
from glob import glob as getFiles
import datetime
import json
import os.path

skippedDays = {}
hoursPlayed = {}

if os.path.isfile("playeractivity.json"):
    with open("playeractivity.json", "r") as f:
        jsonDump = json.loads(f.read())
    jsonDump["generatedOn"] = datetime.datetime.today().strftime("%Y-%m-%d %H:%M:%S")
    for player in jsonDump["players"]:
        skippedDays[player["key"]] = player["skippedDays"]
        hoursPlayed[player["key"]] = player["hoursPlayed"]
    jsonDump["players"] = list()
else:
    jsonDump = {"generatedOn": datetime.datetime.today().strftime("%Y-%m-%d %H:%M:%S"), "numDays": 0, "dates": list(), "players": list()}

for filename in getFiles("logs/*/*/*.log"):
    pathSplit = filename.split("\\")
    date = pathSplit[1] + "/" + pathSplit[2] + "/" + pathSplit[3][:-4]
    if date in jsonDump["dates"]:
        continue
    print("---- %s ----" % date)
    logs = ""
    jsonDump["numDays"] += 1
    jsonDump["dates"].append(date)
    with open(filename) as f:
        logs = f.read()
    findKeys = re.compile("(?<=Login: )\w*?(?=\/)")
    keys = set(key.lower() for key in re.findall(findKeys, logs))
    for key in keys:
        loginTimes = list()
        logoutTimes = list()
        mobNames = set()
        if key not in hoursPlayed:
            hoursPlayed[key] = 0
        if key not in skippedDays:
            skippedDays[key] = 0
        findLoginTimes = re.compile(r"\[(\d\d:\d\d:\d\d)\].*Login: %s\/\((.*)\)" % re.escape(key), re.IGNORECASE)
        for match in re.findall(findLoginTimes, logs):
            loginTimes.append(datetime.datetime.strptime(match[0], "%H:%M:%S"))
            mobNames.add(match[1])
        mobNameList = ""
        i = 0
        for mobName in mobNames:
            mobNameList += re.escape(mobName)
            if(i < len(mobNames)):
                mobNameList += "|"
            i += 1
        findLogoutTimes = re.compile(r"\[(\d\d:\d\d:\d\d)\].*Logout: (%s|\*no key\*\/\((%s|%s)\))" % (re.escape(key), re.escape(key), mobNameList), re.IGNORECASE)
        for match in re.findall(findLogoutTimes, logs):
            logoutTimes.append(datetime.datetime.strptime(match[0], "%H:%M:%S"))
        timeDelta = datetime.timedelta()
        if len(loginTimes) < len(logoutTimes):
            print("-- SKIPPING %s DUE TO NON-UNIQUE MOB NAME --" % key)
            skippedDays[key] += 1
            continue
        if len(loginTimes) > len(logoutTimes):
            print("-- SKIPPING %s DUE TO MISSING LOGOUT LOG --" % key)
            skippedDays[key] += 1
            continue
        for i in range(0, len(loginTimes)):
            dt = logoutTimes[i] - loginTimes[i]
            if dt.seconds < 0:
                print("-- SKIPPING %s DUE TO ERROR IN LOG TIMESTAP --" % key)
                skippedDays[key] += 1
            timeDelta += dt
        hoursPlayed[key] += timeDelta.seconds / 60 / 60
for key in hoursPlayed:
    daysSkipped = skippedDays[key]
    player = {"key": key, "hoursPlayed": hoursPlayed[key], "skippedDays": daysSkipped}
    jsonDump["players"].append(player)
with open("playeractivity.json", "w") as f:
    f.write(json.dumps(jsonDump))
