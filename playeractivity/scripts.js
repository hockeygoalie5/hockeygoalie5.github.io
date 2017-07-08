const staff = [
  "headswe",
  "snapshot",
  "sir.thatoneguy",
  "daaneesh",
  "siegdermaus",
  "ravensdale",
  "meyar",
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
  "ace mcLazer",
  "pobiega",
  "zerobits",
  "roaper",
  "chike101",
  "serveris6",
  "f-tangsteve",
  "psiomegadelta",
  "techhead"
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

      var dataTableBody = document.getElementById("dataTableBody");
      while(dataTableBody.firstChild) {
        dataTableBody.removeChild(dataTableBody.firstChild);
      }

      playerActivity["players"].sort(function(a, b) {
        if(shouldAverage) {
          return (a["hoursPlayed"] / (totalDays - a["skippedDays"])) < (b["hoursPlayed"] / (totalDays - b["skippedDays"]));
        }

        return a["hoursPlayed"] < b["hoursPlayed"];
      });

      var displayedPlayers = 0;
      for(player of playerActivity["players"]) {
        if(filterStaff && staff.indexOf(player["key"]) == -1) {
          continue;
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
        if(shouldAverage) {
          hoursPlayed /= (totalDays - player["skippedDays"]);
        }
        hoursPlayedCell.innerText = hoursPlayed.toFixed(1);
        skippedDaysCell.innerText = player["skippedDays"];

        newRow.appendChild(rankCell);
        newRow.appendChild(keyCell);
        newRow.appendChild(hoursPlayedCell);
        newRow.appendChild(skippedDaysCell);

        dataTableBody.appendChild(newRow);
      }

      document.getElementById("rankHeader").innerText = "Rank (out of " + displayedPlayers + ")";
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
