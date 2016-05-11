var speciesList = {
	"human":"Human",
	"unathi":"Unathi",
	"tajara":"Tajara",
	"vox":"Vox Pariah",
	"resomi":"Resomi",
	"skrell":"Skrell",
	"diona":"Diona",
	"machine":"IPC"
};
var jobs = {
	"assistant":"Assistant",
	"captain":"Captain",
	"hop":"Head of Personnel",
	"bartender":"Bartender",
	"chef":"Chef",
	"gardener":"Gardener",
	"quartermaster":"Quartermaster",
	"cargotech":"Cargo Technician",
	"miner":"Shaft Miner",
	"janitor":"Janitor",
	"librarian":"Librarian",
	"iaa":"Internal Affairs Agent",
	"chaplain":"Chaplain",
	"ce":"Chief Engineer",
	"engineer":"Station Engineer",
	"atmos":"Atmospheric Technician",
	"cmo":"Chief Medical Officer",
	"doctor":"Medical Doctor",
	"chemist":"Chemist",
	"psychiatrist":"Psychiatrist",
	"paramedic":"Paramedic",
	"rd":"Research Director",
	"scientist":"Scientist",
	"xenobiologist":"Xenobiologist",
	"roboticist":"Roboticist",
	"hos":"Head of Security",
	"warden":"Warden",
	"detective":"Detective",
	"sec":"Security Officer",
	"ai":"AI",
	"cyborg":"Cyborg"
};
var cyborgModules = [
	"Standard",
	"Service",
	"Clerical",
	"Research",
	"Miner",
	"Crisis",
	"Surgeon",
	"Security",
	"Engineering",
	"Janitor"
];
// stolen from http://www.springhole.net/writing_roleplaying_randomators/character-flaws.htm
var flaws = [
	"has a drug addiction",
	"is afraid of a common animal",
	"is afraid of a common situation",
	"is allergic to a common thing",
	"is arrogant",
	"is bigoted",
	"is chronically ill",
	"is controlling",
	"is obsessive",
	"is egocentric",
	"is abusive",
	"is very sensitive",
	"is forgetful",
	"is greedy",
	"is impatient",
	"is lazy",
	"is judgmental",
	"is a chronic liar",
	"is moody",
	"is a drama queen",
	"is paranoid",
	"is petty",
	"is overly protective",
	"is power hungry",
	"is prejudiced",
	"is reckless",
	"is sadistic",
	"is selfish",
	"is short-sighted",
	"is hot headed",
	"is socially inept",
	"is spiteful",
	"is whiny"
];
// kinda stolen from http://www.springhole.net/writing_roleplaying_randomators/character-motivation.htm
var motives = [
	"marry someone who is out of $possesive league",
	"kill someone who hurt $dative in the past",
	"find a long lost friend",
	"learn the true fate of someone who suddenly left $possesive life",
	"protect the people $pronoun loves",
	"change $possesive ways",
	"escape from someone who intends to hurt $dative",
	"fit in",
	"exact revenge",
	"move up in the world",
	"seek adventure",
	"exact justice",
	"be in charge of everything",
	"educate others",
	"solve a mystery about $possesive past",
	"help those who need it",
	"fall in love",
	"get rich",
	"become famous",
	"earn the respect of $possesive peers",
	"have children",
	"be attractive",
	"live in peace",
	"break an addiction or bad habit"
];
var pronoun = {
	"male":"he",
	"female":"she",
	"plural":"they",
	"neuter":"it"
};
var dative = {
	"male":"him",
	"female":"her",
	"plural":"them",
	"neuter":"it"
};
var possesive = {
	"male":"his",
	"female":"her",
	"plural":"their",
	"neuter":"its"
};
var reflexive = {
	"male":"himself",
	"female":"herself",
	"plural":"themselves",
	"neuter":"itself"
};
var hair = {
	"human": [
		"short hair",
		"cut hair",
		"flaired hair",
		"shoulder-length hair",
		"long hair",
		"very long hair",
		"a long fringe",
		"a longer fringe",
		"half-banged hair",
		"a ponytail",
		"a side ponytail",
		"parted hair",
		"a pompadour",
		"a quiff",
		"bedhead",
		"a beehive",
		"a bobcurl",
		"a bob",
		"a bowl cut",
		"a buzzcut",
		"a crewcut",
		"a combover",
		"a fatherly hairstyle",
		"a reverse mohawk",
		"devil locks",
		"dreadlocks",
		"curls",
		"an afro",
		"a big afro",
		"a flat top",
		"an emo hairstyle",
		"a long emo hairstyle",
		"a short overeye hairstyle",
		"a long overeye hairstyle",
		"a flow",
		"a feather top",
		"a hitop",
		"a mowhawk",
		"Adam Jensen hair",
		"gelled back hair",
		"a gentle hairstyle",
		"spiky hair",
		"kusanagi hair",
		"pigtails",
		"a hime cut",
		"a floor-length braid",
		"a medium braid",
		"a long braid",
		"an odango",
		"ombre hair",
		"an updo",
		"a skinhead hairstyle",
		"balding hair",
		"a family man hairstyle",
		"Drillruru hair",
		"a dandy pompadour",
		"poofy hair",
		"chrono hair",
		"Vegeta hair",
		"CIA hair",
		"Mulder hair",
		"Scully hair",
		"a nitori",
		"Joestar hair",
		"volaju hair",
		"short bangs",
		"half-shaved emo hair",
		"a bun",
		"a double bun"
	],
	"unathi": [
		"a bobcurl",
		"a bob",
		"a buzzcut",
		"a mohawk",
		"spiky hair",
		"long spines",
		"short spines",
		"long frills",
		"short frills",
		"horns"
	],
	"tajara": [
		"a clean hairstyle",
		"bangs",
		"a braid",
		"shaggy hair",
		"a mohawk",
		"plait hair",
		"straight hair",
		"long hair",
		"a rat tail",
		"spiky hair",
		"messy hair"
	],
	"vox": [
		"short quills", 
		"kingly quills", 
		"a quill mohawk"
	],
	"resomi": [
		"plumage",
		"spiky hair"
	],
	"machine": [
		"a pink screen",
		"a red screen",
		"a green screen",
		"a blue screen",
		"a screen displaying breakout",
		"a screen displaying an eight",
		"a screen displaying goggles",
		"a screen displaying a heart",
		"a screen displaying an eye",
		"a screen displaying nature",
		"an orange screen",
		"a purple screen",
		"a screen displaying a shower",
		"a screen displaying static",
		"a yellow screen"
	]
};
var facialHair = {
	"human": [
		"a Watson mustache",
		"a Hulk Hogan mustache",
		"a Van Dyke mustache",
		"a square mustache",
		"a Selleck mustache",
		"a neckbeard",
		"a full beard",
		"a long beard",
		"a very long beard",
		"elvis sideburns",
		"an Abraham Lincoln beard",
		"a chinstrap",
		"a hipster beard",
		"a goatee",
		"an Adam Jensen beard",
		"a Volaju beard",
		"a dward beard"
	],
	"unathi": [
		"Elvis sideburns"
	],
	"tajara": [
		"sideburns",
		"a muttonchop",
		"a pencilstache",
		"a mustache",
		"a goatee",
		"a small mustache"
	]
};
var hairColors = {
	"human": [
		"natural black",
		"jet black",
		"medium brown",
		"chestnut brown",
		"light brown",
		"platinum blonde",
		"ash blonde",
		"strawberry blonde",
		"dark auburn",
		"light auburn",
		"golden blonde",
		"dark brown"
	],
	"unathi": [
		"tan",
		"green",
		"turquoise"
	],
	"tajara": [
		"tan",
		"brown",
		"dark brown",
		"light gray",
		"gray",
		"dark gray"
	],
	"vox": [
		"green"
	],
	"resomi": [
		"green",
		"orange",
		"yellow",
		"red",
		"blue",
		"indigo",
		"violet"
	]
};
var skinTones = {
	"human": [
		"pale skin",
		"white skin",
		"tan skin",
		"brown skin",
		"dark brown skin",
		"black skin"
	],
	"unathi": [
		"tan scales",
		"green scales",
		"turquoise scales"
	],
	"tajara": [
		"tan fur",
		"brown fur",
		"dark brown fur",
		"light gray fur",
		"gray fur",
		"dark gray fur"
	],
	"resomi": [
		"green feathers",
		"orange feathers",
		"yellow feathers",
		"red feathers",
		"blue feathers",
		"indigo feathers",
		"violet feathers"
	],
	"skrell": [
		"light green skin",
		"green skin",
		"turquoise skin",
		"light blue skin",
		"dark blue skin"
	]
};
var speciesDOM = document.getElementById("species");
var jobsDOM = document.getElementById("jobs");
for(var species in speciesList) {
	var div = document.createElement("div");
	speciesDOM.appendChild(div);
	var input = document.createElement("input");
	input.type = "checkbox";
	input.id = species;
	input.value = species;
	if(species == "human") {
		input.checked = "checked";
	}
	div.appendChild(input);
	var label = document.createElement("label");
	label.textContent = speciesList[species];
	label.setAttribute("for", species);
	div.appendChild(label);
}
for(var job in jobs) {
	var div = document.createElement("div");
	jobsDOM.appendChild(div);
	var input = document.createElement("input");
	input.type = "checkbox";
	input.id = job;
	input.value = job;
	if(job == "assistant") {
		input.checked = "checked";
	}
	div.appendChild(input);
	var label = document.createElement("label");
	label.textContent = jobs[job];
	label.setAttribute("for", job);
	div.appendChild(label);
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}
function replaceGender(string, sex) {
	return string.replace("$Pronoun", pronoun[sex].capitalize()).replace("$Dative", dative[sex].capitalize()).replace("$Possesive", possesive[sex].capitalize()).replace("$Reflexive", reflexive[sex].capitalize()).replace("$pronoun", pronoun[sex]).replace("$dative", dative[sex]).replace("$possesive", possesive[sex]).replace("$reflexive", reflexive[sex]);
}
function chargen() {
	var output = "";
	var selectedSpecies = speciesDOM.querySelectorAll("input:checked");
	var selectedJobs = jobsDOM.querySelectorAll("input:checked");
	var minFlaws = parseInt(document.getElementById("minFlaws").value);
	var maxFlaws = parseInt(document.getElementById("maxFlaws").value);
	var minMotives = parseInt(document.getElementById("minMotives").value);
	var maxMotives = parseInt(document.getElementById("maxMotives").value);
	var sexes = document.querySelectorAll("input[name='sex']:checked");
	if(!selectedSpecies.length || !selectedJobs.length || !sexes.length) {
		output = "You must select at least one species, one job, and one sex."
	} else {
		var species = selectedSpecies[getRandomInt(0, selectedSpecies.length)].id;
		var job = selectedJobs[getRandomInt(0, selectedJobs.length)].id;
		var sex = sexes[getRandomInt(0, sexes.length)].id;
		if(job == "ai") {
			output = "An AI";
			sex = "neuter";
		} else if(job == "cyborg") {
			var module = cyborgModules[getRandomInt(0, cyborgModules.length)];
			output = "A Cyborg with the " + module + " module";
			sex = "neuter";
		} else {
			if(species == "diona") {
				sex = "plural";
				output = "A diona " + jobs[job];
			} else if(species == "machine") {
				sex = "neuter";
				output = "An IPC " + jobs[job];
			} else {
				output = "A(n) " + sex + " " + speciesList[species] + " " + jobs[job];
			}
		}
		var skinTone;
		var hairStyle;
		var hairColor;
		var facialHairStyle;
		var facialHairColor;
		if(skinTones[species]) {
			skinTone = skinTones[species][getRandomInt(0, skinTones[species].length)];
			if(job == "ai" || job == "cyborg") {
				skinTone = null;
			}
		}
		if(hair[species]) {
			hairStyle = hair[species][getRandomInt(0, hair[species].length)];
			if(Math.random() <= (1 / (hair[species].length + 1)) || job == "ai" || job == "cyborg" && species != "machine") {
				hairStyle = null;
			}
		}
		if(facialHair[species]) {
			facialHairStyle = facialHair[species][getRandomInt(0, facialHair[species].length)];
			if(Math.random() <= 0.6 || job == "ai" || job == "cyborg") {
				facialHairStyle = null;
			}
		}
		if(hairColors[species]) {
			hairColor = hairColors[species][getRandomInt(0, hairColors[species].length)];
			facialHairColor = hairColor;
			if(Math.random() <= 0.3) {
				facialHairColor = hairColors[species][getRandomInt(0, hairColors[species].length)];
			}
		}
		if(hairStyle || facialHairStyle || skinTone) {
			output += " with ";
		}
		if(skinTone) {
			output += skinTone;
			if(hairStyle && facialHairStyle) {
				output += ", ";
			} else if(hairStyle || facialHairStyle) {
				output += " and ";
			}
		}
		if(hairStyle) {
			output += hairStyle;
			if(hairColor) {
				output += " that is " + hairColor;
			}
			if(facialHairStyle) {
				output += ", and ";
			}
		}
		if(facialHairStyle) {
			output += facialHairStyle;
			if(facialHairColor) {
				output += " that is " + facialHairColor;
			}
		}
		var flawAmt = getRandomInt(minFlaws, maxFlaws + 1);
		var motiveAmt = getRandomInt(minMotives, maxMotives + 1);
		var availableFlaws = flaws.slice(0);
		var availableMotives = motives.slice(0);
		var firstItem = true;
		if(flawAmt > 0 && availableFlaws.length) {
			output += ". " + pronoun[sex].capitalize() + " ";
			while(flawAmt > 0 && availableFlaws.length) {
				if((flawAmt == 1 || availableFlaws.length == 1) && !firstItem) {
					output += ", and ";
				} else if(!firstItem) {
					output += ", ";
				} else {
					firstItem = false;
				}
				var chosenFlaw = availableFlaws[getRandomInt(0, availableFlaws.length)];
				output += replaceGender(chosenFlaw, sex);
				availableFlaws.splice(availableFlaws.indexOf(chosenFlaw), 1);
				flawAmt--;
			}
		}
		firstItem = true;
		if(motiveAmt > 0 && availableMotives.length) {
			output += ". " + pronoun[sex].capitalize() + " wants to ";
			while(motiveAmt > 0) {
				if((motiveAmt == 1 || availableMotives.length == 1) && !firstItem) {
					output += ", and ";
				} else if(!firstItem) {
					output += ", ";
				} else {
					firstItem = false;
				}
				var chosenMotive = availableMotives[getRandomInt(0, availableMotives.length)];
				output += replaceGender(chosenMotive, sex);
				availableMotives.splice(availableMotives.indexOf(chosenMotive), 1);
				motiveAmt--;
			}
		}
		output += "."
	}
	var outputDOM = document.getElementById("output");
	var p;
	if(outputDOM.firstChild)
		p = outputDOM.firstChild;
	else {
		p = document.createElement("p");
		outputDOM.appendChild(p);
	}
	p.textContent = output;
}
function select(section, what) {
	var checkboxes;
	switch(section) {
		case "species":
			checkboxes = speciesDOM.querySelectorAll("input[type='checkbox']");
			break;
		case "jobs":
			checkboxes = jobsDOM.querySelectorAll("input[type='checkbox']");
			break;
		default:
			checkboxes = speciesDOM.querySelectorAll("input[type='checkbox']");
			break;
	}
	switch(what) {
		case "all":
			for(var i = 0, ii = checkboxes.length; i < ii; i++) {
				checkboxes[i].checked = "checked";
			}
			break;
		case "none":
			for(var i = 0, ii = checkboxes.length; i < ii; i++) {
				checkboxes[i].checked = "";
			}
			break;
		default:
			for(var i = 0, ii = checkboxes.length; i < ii; i++) {
				checkboxes[i].checked = "checked";
			}
			break;
	}
}