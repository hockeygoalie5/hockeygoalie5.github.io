import re
from glob import glob as getFiles
import datetime
import json

jsonDump = {"generatedOn": datetime.datetime.today().strftime("%Y-%m-%d %H:%M:%S"), "numDays": 0, "dates": list(), "players": list()}
skippedDays = {}
hoursPlayed = {}
for filename in getFiles("logs/*/*/*.log"):
    print("---- %s ----" % filename)
    logs = ""
    jsonDump["numDays"] += 1
    pathSplit = filename.split("\\")
    jsonDump["dates"].append(pathSplit[1] + "/" + pathSplit[2] + "/" + pathSplit[3][:-4])
    with open(filename) as f:
        logs = f.read()
    findKeys = re.compile("(?<=Login: ).*(?=\/)")
    keys = set(key.lower() for key in re.findall(findKeys, logs))
    for key in keys:
        loginTimes = list()
        logoutTimes = list()
        mobNames = set()
        hoursPlayed[key] = 0 
        findLoginTimes = re.compile(r"\[(\d\d:\d\d:\d\d)\].*Login: %s\/\((.*)\)" % key, re.IGNORECASE)
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
        findLogoutTimes = re.compile(r"\[(\d\d:\d\d:\d\d)\].*Logout: (%s|\*no key\*\/\((%s|%s)\))" % (key, key, mobNameList), re.IGNORECASE)
        for match in re.findall(findLogoutTimes, logs):
            logoutTimes.append(datetime.datetime.strptime(match[0], "%H:%M:%S"))
        timeDelta = datetime.timedelta()
        if len(loginTimes) < len(logoutTimes):
            print("-- SKIPPING %s DUE TO NON-UNIQUE MOB NAME --" % key)
            if key in skippedDays:
                skippedDays[key] += 1
            else:
                skippedDays[key] = 1
            continue
        if len(loginTimes) > len(logoutTimes):
            print("-- SKIPPING %s DUE TO MISSING LOGOUT LOG --" % key)
            if key in skippedDays:
                skippedDays[key] += 1
            else:
                skippedDays[key] = 1
            continue
        for i in range(0, len(loginTimes)):
            dt = logoutTimes[i] - loginTimes[i]
            if dt.seconds < 0:
                print("-- SKIPPING %s DUE TO ERROR IN LOG TIMESTAP --" % key)
                if key in skippedDays:
                    skippedDays[key] += 1
                else:
                    skippedDays[key] = 1
                continue
            timeDelta += dt
        if key in hoursPlayed:
            hoursPlayed[key] += timeDelta.seconds / 60 / 60
        else:
            hoursPlayed[key] = timeDelta.seconds / 60 / 60
for key in hoursPlayed:
    daysSkipped = 0
    if key in skippedDays:
        daysSkipped = skippedDays[key]
    player = {"key": key, "hoursPlayed": hoursPlayed[key], "skippedDays": daysSkipped}
    jsonDump["players"].append(player)
with open("playeractivity.json", "w") as f:
    f.write(json.dumps(jsonDump))
