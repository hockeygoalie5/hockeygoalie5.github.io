const staff = [
  "headswe",
  "snapshot",
  "sir.thatoneguy",
  "siegdermaus",
  "virgili555",
  "thewelp",
  "mkalash",
  "xales",
  "noblecaos",
  "spookerton",
  "loneguyfly",
  "chronograph",
  "paradoxon",
  "masterrbc",
  "crushtoe",
  "ace mclazer",
  "pobiega",
  "zerobits",
  "roaper",
  "serveris6",
  "ftangsteve",
  "psiomegadelta",
  "techhead0",
  "mordeth221",
  "shadow_of_man",
  "cirra",
  "eckles_fire",
  "commissar_drew",
  "crockers",
  "graciegrace0",
  "huntime",
  "sierrakomodo",
  "skipcam94",
  "paradoxspace",
  "katastrofa",
  "devildabeast",
  "dragor"
];

function buildData() {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "playeractivity.json", true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      var playerActivity = JSON.parse(xobj.responseText);

      var shouldAverage = document.getElementById("radioAveraged").checked;
      var filterStaff = document.getElementById("checkStaffOnly").checked;

      document.getElementById("generatedDate").innerText = "Generated on " + playerActivity["generatedOn"] + " EST";

      var totalDays = playerActivity["numDays"];
      document.getElementById("daysAnalyzed").innerText = "Data gathered over " + totalDays + " days.";

      if(shouldAverage) {
        document.getElementById("totalNotice").hidden = true;
      } else {
        document.getElementById("totalNotice").hidden = false;
      }

      var dataTableBody = document.getElementById("dataTableBody");
      while(dataTableBody.firstChild) {
        dataTableBody.removeChild(dataTableBody.firstChild);
      }

      playerActivity["players"].sort(function(a, b) {
        var aAverageHoursPlayed = a["hoursPlayed"] / (totalDays - a["skippedDays"]);
        var bAverageHoursPlayed = b["hoursPlayed"] / (totalDays - b["skippedDays"]);
        if(shouldAverage) {
          return aAverageHoursPlayed < bAverageHoursPlayed;
        }
        var aSortNumber = a["hoursPlayed"];
        var bSortNumber = b["hoursPlayed"];

        if(a["skippedDays"]) {
          aSortNumber = aSortNumber + (aAverageHoursPlayed * a["skippedDays"]);
        }
        if(b["skippedDays"]) {
          bSortNumber = bSortNumber + (bAverageHoursPlayed * b["skippedDays"]);
        }

        return aSortNumber < bSortNumber;
      });

      var displayedPlayers = 0;
      var activeStaff = [];
      for(player of playerActivity["players"]) {
        if(filterStaff) {
          if(staff.indexOf(player["key"]) == -1) {
            continue;
          }
          activeStaff.push(player["key"]);
        }

        displayedPlayers++;

        var newRow = document.createElement("tr");
        var rankCell = document.createElement("td");
        var keyCell = document.createElement("td");
        var hoursPlayedCell = document.createElement("td");
        var skippedDaysCell = document.createElement("td");

        rankCell.innerText = displayedPlayers;
        keyCell.innerText = player["key"];
        var hoursPlayed = player["hoursPlayed"];
        var averageHoursPlayed = hoursPlayed / (totalDays - player["skippedDays"]);
        if(shouldAverage) {
          hoursPlayed = averageHoursPlayed;
        } 
        if(!shouldAverage && player["skippedDays"]) {
          var estimatedTotalHours = hoursPlayed + (averageHoursPlayed * player["skippedDays"]);
          hoursPlayedCell.innerText = Math.floor(estimatedTotalHours) + ":" + Math.floor((estimatedTotalHours * 60) % 60).toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + ((((estimatedTotalHours * 60) % 60) * 60) % 60).toLocaleString(undefined, {minimumIntegerDigits: 2, maximumFractionDigits: 0, useGrouping:false});
          hoursPlayedCell.innerText += " (" + Math.floor(hoursPlayed) + ":" + Math.floor((hoursPlayed * 60) % 60).toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + ((((hoursPlayed * 60) % 60) * 60) % 60).toLocaleString(undefined, {minimumIntegerDigits: 2, maximumFractionDigits: 0, useGrouping:false}) + ")";
        } else {
          hoursPlayedCell.innerText = Math.floor(hoursPlayed) + ":" + Math.floor((hoursPlayed * 60) % 60).toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + ((((hoursPlayed * 60) % 60) * 60) % 60).toLocaleString(undefined, {minimumIntegerDigits: 2, maximumFractionDigits: 0, useGrouping:false});
        }
        skippedDaysCell.innerText = player["skippedDays"];

        newRow.appendChild(rankCell);
        newRow.appendChild(keyCell);
        newRow.appendChild(hoursPlayedCell);
        newRow.appendChild(skippedDaysCell);

        dataTableBody.appendChild(newRow);
      }

      if(filterStaff) {
        var inactiveStaff = staff.filter(function(staffMember) {
          return activeStaff.indexOf(staffMember) < 0;
        });

        for(staffMember of inactiveStaff) {
          displayedPlayers++;

          var newRow = document.createElement("tr");
          var rankCell = document.createElement("td");
          var keyCell = document.createElement("td");
          var hoursPlayedCell = document.createElement("td");
          var skippedDaysCell = document.createElement("td");

          rankCell.innerText = displayedPlayers;
          keyCell.innerText = staffMember;
          hoursPlayedCell.innerText = "-------";
          skippedDaysCell.innerText = "-------";

          newRow.appendChild(rankCell);
          newRow.appendChild(keyCell);
          newRow.appendChild(hoursPlayedCell);
          newRow.appendChild(skippedDaysCell);

          dataTableBody.appendChild(newRow);
        }
      }

      document.getElementById("rankHeader").innerText = "Rank\n/ " + displayedPlayers;
    }
  };
  xobj.send(null);
}

window.onload = function() {
    buildData();
    document.getElementById("radioAveraged").addEventListener("click", buildData)
    document.getElementById("radioTotal").addEventListener("click", buildData)
    document.getElementById("checkStaffOnly").addEventListener("click", buildData)
};
