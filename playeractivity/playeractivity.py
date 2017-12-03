import re
from glob import glob as getFiles
import datetime
import json
import os.path
import codecs

if os.path.isfile("playeractivity.json"):
    with open("playeractivity.json", "r") as f:
        jsonDump = json.loads(f.read())
    jsonDump["generatedOn"] = datetime.datetime.today().strftime("%Y-%m-%d %H:%M:%S")
else:
    jsonDump = {"generatedOn": datetime.datetime.today().strftime("%Y-%m-%d %H:%M:%S"), "days": dict()}

for filename in getFiles("logs/*/*/*.log"):
    pathSplit = filename.split("/")
    date = pathSplit[1] + "-" + pathSplit[2].split("-")[0] + "-" + pathSplit[3].split("-")[0]

    if date in jsonDump["days"]:
        continue

    jsonDump["days"][date] = dict()

    print("---- %s ----" % date)

    logs = ""
    with codecs.open(filename, "r", "latin1") as f:
        logs = f.read()

    findKeys = re.compile(r"(?<=Login: ).*?(?=\/)", re.IGNORECASE)
    keys = set(key.lower() for key in re.findall(findKeys, logs))
    totalSkips = 0
    for i, key in enumerate(keys):
        loginTimes = list()
        logoutTimes = list()
        mobNames = set()

        jsonDump["days"][date][key] = {"secondsPlayed": 0, "active": 0, "skipped": 0}

        findActive = re.compile(r"(EMOTE|SAY): (?!\(DSAY\)).*?/\(?(%s) :" % re.escape(key), re.IGNORECASE)
        if re.search(findActive, logs) != None:
            jsonDump["days"][date][key]["active"] = 1

        findLoginTimes = re.compile(r"\[(\d\d:\d\d:\d\d)\].*Login: %s\/\((.*)\)" % re.escape(key), re.IGNORECASE)
        for match in re.findall(findLoginTimes, logs):
            loginTimes.append(datetime.datetime.strptime(match[0], "%H:%M:%S"))
            mobNames.add(match[1])

        mobNameList = ""
        for j, mobName in enumerate(mobNames):
            if mobName.lower() == "new player":
                continue
            mobNameList += re.escape(mobName)
            if(j < len(mobNames) - 1):
                mobNameList += "|"

        findLogoutTimes = re.compile(r"\[(\d\d:\d\d:\d\d)\].*Logout: (%s|\*no key\*\/\((%s|%s)\))" % (re.escape(key), re.escape(key), mobNameList), re.IGNORECASE)
        for match in re.findall(findLogoutTimes, logs):
            logoutTimes.append(datetime.datetime.strptime(match[0], "%H:%M:%S"))

        timeDelta = datetime.timedelta()
        doSkip = len(loginTimes) < len(logoutTimes) or len(loginTimes) > len(logoutTimes)
        if not doSkip:
            for j in range(0, len(loginTimes)):
                dt = logoutTimes[j] - loginTimes[j]
                if dt.seconds < 0:
                    doSkip = True
                timeDelta += dt
        if doSkip:
            jsonDump["days"][date][key]["skipped"] = 1
            totalSkips += 1
        else:
            jsonDump["days"][date][key]["secondsPlayed"] = timeDelta.seconds

        print("\rScanned %i of %i players with %i errors." % (i + 1, len(keys), totalSkips), end = "")
    print("\n")

    with open("playeractivity.json", "w") as f:
        f.write(json.dumps(jsonDump))

print("Done.")
