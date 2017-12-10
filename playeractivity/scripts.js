const staff = [
  "headswe",
  "snapshot",
  "sir.thatoneguy",
  "siegdermaus",
  "virgili555",
  "thewelp",
  "mkalash",
  "xales",
  "spookerton",
  "chronograph",
  "paradoxon",
  "masterrbc",
  "crushtoe",
  "ace mclazer",
  "pobiega",
  "ftangsteve",
  "psiomegadelta",
  "techhead0",
  "mordeth221",
  "shadow_of_man",
  "eckles_fire",
  "graciegrace0",
  "huntime",
  "sierrakomodo",
  "skipcam94",
  "paradoxspace",
  "crockers",
  "katastrofa",
  "commissar_drew",
  "levyafan",
  "noblecaos",
  "aetsuki",
  "earthcrusher",
  "chinsky"
];

function buildData(setDates) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "playeractivity.json", true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      var playerActivity = JSON.parse(xobj.responseText);

      var dates = Object.keys(playerActivity["days"]).sort(function(a,b) {
          return Date.parse(a) > Date.parse(b);
      });

      var minDate = dates[0];
      var maxDate = dates[dates.length - 1]
      
      var fromDateInput = document.getElementById("fromDate");
      var toDateInput = document.getElementById("toDate");

      fromDateInput.min = minDate;
      fromDateInput.max = maxDate;
      toDateInput.min = minDate;
      toDateInput.max = maxDate;

      if(setDates) {
        fromDateInput.value = minDate;
        toDateInput.value = maxDate;
      }

      var fromDate = new Date(fromDateInput.value);
      var toDate = new Date(toDateInput.value);

      var shouldAverage = document.getElementById("radioAveraged").checked;
      var filterStaff = document.getElementById("checkStaffOnly").checked;

      var searchString = document.getElementById("search").value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

      document.getElementById("generatedDate").innerText = "Generated on " + playerActivity["generatedOn"] + " EST";

      var totalDays = ((toDate.getTime() - fromDate.getTime()) / 86400000) + 1;

      document.getElementById("daysAnalyzed").innerText = "Range includes " + totalDays + " days.";

      if(shouldAverage) {
        document.getElementById("totalNotice").hidden = true;
      } else {
        document.getElementById("totalNotice").hidden = false;
      }

      var dataTableBody = document.getElementById("dataTableBody");
      while(dataTableBody.firstChild) {
        dataTableBody.removeChild(dataTableBody.firstChild);
      }

      dates = dates.filter(date => (fromDate.getTime() <= Date.parse(date) && toDate.getTime() >= Date.parse(date)));

      var players = [];
      for(date of dates) {
        for(player in playerActivity["days"][date]) {
          var playerIndex = players.findIndex(function(p) {
            return p["key"] === player;
          });
          if(playerIndex > -1) {
            players[playerIndex]["activeDays"] += playerActivity["days"][date][player]["active"];
            players[playerIndex]["daysLogged"] += 1;

            if(playerActivity["days"][date][player]["skipped"]) {
              players[playerIndex]["skippedDays"] += 1;
            } else {
              players[playerIndex]["secondsPlayed"] += playerActivity["days"][date][player]["secondsPlayed"];
            }
          } else {
            players.push({"key": player, "secondsPlayed": playerActivity["days"][date][player]["secondsPlayed"], "activeDays": playerActivity["days"][date][player]["active"], "skippedDays": playerActivity["days"][date][player]["skipped"], "daysLogged": 1});
          }
        }
      }

      players.sort(function(a, b) {
        var aAverageSecondsPlayed;
        if(a["skippedDays"] == a["daysLogged"]) {
          aAverageSecondsPlayed = 0;
        } else {
          aAverageSecondsPlayed = a["secondsPlayed"] / (a["daysLogged"] - a["skippedDays"]);
        }

        var bAverageSecondsPlayed;
        if(b["skippedDays"] == b["daysLogged"]) {
          bAverageSecondsPlayed = 0;
        } else {
          bAverageSecondsPlayed = b["secondsPlayed"] / (b["daysLogged"] - b["skippedDays"]);
        }

        if(shouldAverage) {
          return bAverageSecondsPlayed - aAverageSecondsPlayed;
        }

        var aSortNumber = a["secondsPlayed"];
        var bSortNumber = b["secondsPlayed"];

        if(a["skippedDays"]) {
          aSortNumber = aSortNumber + (aAverageSecondsPlayed * a["skippedDays"]);
        }
        if(b["skippedDays"]) {
          bSortNumber = bSortNumber + (bAverageSecondsPlayed * b["skippedDays"]);
        }

        return bSortNumber - aSortNumber;
      });

      var displayedPlayers = 0;
      var activeStaff = [];
      for(player of players) {
        if(filterStaff) {
          if(staff.indexOf(player["key"]) == -1) {
            continue;
          }
          activeStaff.push(player["key"]);
        }

        displayedPlayers++;

        if(player["key"].search(searchString) < 0) {
          continue;
        }

        var newRow = document.createElement("tr");
        var rankCell = document.createElement("td");
        var keyCell = document.createElement("td");
        var hoursPlayedCell = document.createElement("td");
        var daysLoggedInCell = document.createElement("td");
        var activeDaysCell = document.createElement("td");
        var skippedDaysCell = document.createElement("td");

        rankCell.innerText = displayedPlayers;
        keyCell.innerText = player["key"];
        daysLoggedInCell.innerText = player["daysLogged"];

        var secondsPlayed = player["secondsPlayed"];
        var averageSecondsPlayed;
        if(player["skippedDays"] == player["daysLogged"]) {
          averageSecondsPlayed = 0;
        } else {
          averageSecondsPlayed = secondsPlayed / (player["daysLogged"] - player["skippedDays"]);
        }

        if(shouldAverage) {
          var hours = Math.floor(averageSecondsPlayed / 3600);
          averageSecondsPlayed %= 3600;
          var minutes = Math.floor(averageSecondsPlayed / 60);
          averageSecondsPlayed = Math.floor(averageSecondsPlayed % 60);
          hoursPlayedCell.innerText = hours.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + minutes.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + averageSecondsPlayed.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false});
        } else {
          var estimatedTotalSeconds = secondsPlayed + (averageSecondsPlayed * player["skippedDays"]);

          var hours = Math.floor(estimatedTotalSeconds / 3600);
          estimatedTotalSeconds %= 3600;
          var minutes = Math.floor(estimatedTotalSeconds / 60);
          estimatedTotalSeconds = Math.floor(estimatedTotalSeconds % 60);
          hoursPlayedCell.innerText = hours.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + minutes.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + estimatedTotalSeconds.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false});
          
          if(player["skippedDays"]) {
            hours = Math.floor(secondsPlayed / 3600);
            secondsPlayed %= 3600;
            minutes = Math.floor(secondsPlayed / 60);
            secondsPlayed = Math.floor(secondsPlayed % 60);
            hoursPlayedCell.innerText += " (" + hours.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + minutes.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + secondsPlayed.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ")";
          }
        }
        skippedDaysCell.innerText = player["skippedDays"];
        activeDaysCell.innerHTML = player["activeDays"];

        newRow.appendChild(rankCell);
        newRow.appendChild(keyCell);
        newRow.appendChild(hoursPlayedCell);
        newRow.appendChild(daysLoggedInCell);
        newRow.appendChild(activeDaysCell);
        newRow.appendChild(skippedDaysCell);

        dataTableBody.appendChild(newRow);
      }

      if(filterStaff) {
        var inactiveStaff = staff.filter(function(staffMember) {
          return activeStaff.indexOf(staffMember) < 0;
        });

        for(staffMember of inactiveStaff) {
          displayedPlayers++;

          if(staffMember.search(searchString) < 0) {
            continue;
          }

          var newRow = document.createElement("tr");
          var rankCell = document.createElement("td");
          var keyCell = document.createElement("td");
          var hoursPlayedCell = document.createElement("td");
          var daysLoggedInCell = document.createElement("td");
          var activeDaysCell = document.createElement("td");
          var skippedDaysCell = document.createElement("td");

          rankCell.innerText = displayedPlayers;
          keyCell.innerText = staffMember;
          hoursPlayedCell.innerText = "-------";
          daysLoggedInCell.innerText  = "-------"; 
          activeDaysCell.innerText  = "-------"; 
          skippedDaysCell.innerText = "-------";

          newRow.appendChild(rankCell);
          newRow.appendChild(keyCell);
          newRow.appendChild(hoursPlayedCell);
          newRow.appendChild(daysLoggedInCell);
          newRow.appendChild(activeDaysCell);
          newRow.appendChild(skippedDaysCell);

          dataTableBody.appendChild(newRow);
        }
      }

      document.getElementById("rankHeader").innerText = "Rank\n/ " + displayedPlayers;
      document.getElementById("daysLoggedInHeader").innerText = "Days logged in\n/ " + totalDays;
      document.getElementById("activeDaysHeader").innerText = "Active days\n/ " + totalDays;
      document.getElementById("skippedDaysHeader").innerText = "Skipped days\n/ " + totalDays;
    }
  };
  xobj.send(null);
}

window.onload = function() {
    buildData(true);
    document.getElementById("radioAveraged").addEventListener("change", function() {
      buildData(false);
    })
    document.getElementById("radioTotal").addEventListener("change", function() {
      buildData(false);
    })
    document.getElementById("checkStaffOnly").addEventListener("change", function() {
      buildData(false);
    })
    document.getElementById("fromDate").addEventListener("change", function() {
      buildData(false);
    });
    document.getElementById("toDate").addEventListener("change", function() {
      buildData(false);
    });
    document.getElementById("search").addEventListener("input", function() {
      buildData(false);
    });
};
