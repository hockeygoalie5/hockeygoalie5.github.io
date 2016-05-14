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
	"is judgemental",
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
	"is whiny",
	"is smelly",
	"is sleazy",
	"creeps people out",
	"is easily stressed out",
	"shuts down near people $pronoun has a crush on",
	"is almost a sociopath"
];
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
	"break an addiction or bad habit",
	"start $possesive own company",
	"move somewhere new",
	"prove $reflexive to others"
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
var ageLimits = {
	"human": [17, 100],
	"unathi": [18, 60],
	"tajara": [17, 80],
	"vox": [17, 70],
	"resomi": [12, 45],
	"skrell": [19, 90],
	"diona": [1, 300],
	"machine": [1, 90]
};
var month = [
	"January", 
	"February", 
	"March", 
	"April", 
	"May", 
	"June",
	"July", 
	"August", 
	"September", 
	"October", 
	"November", 
	"December"
];
var ntRelations = {
	"loyal":"loyal",
	"supportive":"supportive",
	"neutral":"neutral",
	"sceptical":"sceptical",
	"opposed":"opposed"
};
var homeSystems = {
	"nyx":"Nyx",
	"sol":"Sol",
	"tauceti":"Tau Ceti",
	"eum":"Epsilon Ursae Minoris",
	"srandarr":"S'randarr",
	"othersys":"a system which is not well known"
};
var citizenships = {
	"earth":"Earth",
	"mars":"Mars",
	"moghes":"Moghes",
	"ahdomai":"Ahdomai",
	"qerrbalak":"Qerrbalak",
	"nocitizen":"no government",
	"othercitizen":"a not well known government"
};
var factions = {
	"solgov":"the Sol Central Government",
	"veymed":"Vey Med",
	"ee":"Einstein Engines",
	"ftu":"the Free Trade Union",
	"nt":"NanoTrasen",
	"wt":"Ward-Takashi GMB",
	"ge":"Gilthari Exports",
	"gm":"Grayson Manufactories Ltd.",
	"aa":"Aether Atmospherics",
	"zhp":"Zeng-Hu Pharmaceuticals",
	"hi":"Hesphaistos Industries",
	"nofaction":"no faction",
	"otherfaction":"a not well known faction"
};
var religions = {
	"unit":"Unitarianism",
	"hindu":"Hinduism",
	"buddhism":"Buddhism",
	"islam":"Islam",
	"christian":"Christianity",
	"agnostic":"Agnosticism",
	"deism":"Deism",
	"noreligion":"no religion",
	"otherreligion":"a not well known religion"
};
var backstories = [
	"had a healthy childhood",
	"lost one or both parents",
	"was bullied by $possesive peers",
	"was abused by $possesive family",
	"didn't fit in",
	"ran away from home",
	"lost a friend",
	"served in the military",
	"performed poorly at work and was fired",
	"excelled in school",
	"was very poor",
	"had a wealthy family",
	"failed many classes",
	"committed several crimes",
	"did something very wrong $pronoun regrets",
	"did something very wrong and doesn't regret"
];
function populateChoices(fieldset, choices, defaultChoice) {
	for(var choice in choices) {
		var div = document.createElement("div");
		fieldset.appendChild(div);
		var input = document.createElement("input");
		input.type = "checkbox";
		input.id = choice;
		input.value = choice;
		if(choice == defaultChoice) {
			input.checked = "checked";
		}
		div.appendChild(input);
		var label = document.createElement("label");
		label.textContent = choices[choice];
		label.setAttribute("for", choice);
		div.appendChild(label);
	}
}
var speciesDOM = document.getElementById("species");
var jobsDOM = document.getElementById("jobs");
var religionDOM = document.getElementById("religions");
var factionDOM = document.getElementById("factions");
var citizenshipDOM = document.getElementById("citizenship");
var homeSystemDOM = document.getElementById("homesystems");
var relationDOM = document.getElementById("relation");
populateChoices(speciesDOM, speciesList, "human");
populateChoices(jobsDOM, jobs, "assistant");
populateChoices(religionDOM, religions, "noreligion");
populateChoices(factionDOM, factions, "nofaction");
populateChoices(citizenshipDOM, citizenships, "nocitizen");
populateChoices(homeSystemDOM, homeSystems, "othersys");
populateChoices(relationDOM, ntRelations, "neutral");
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}
function replaceGender(string, sex) {
	return string.replace("$Pronoun", pronoun[sex].capitalize()).replace("$Dative", dative[sex].capitalize()).replace("$Possesive", possesive[sex].capitalize()).replace("$Reflexive", reflexive[sex].capitalize()).replace("$pronoun", pronoun[sex]).replace("$dative", dative[sex]).replace("$possesive", possesive[sex]).replace("$reflexive", reflexive[sex]);
}
function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function chargen() {
	var outputDOM = document.getElementById("output");
	while(outputDOM.firstChild) {
		outputDOM.removeChild(outputDOM.firstChild);
	}
	var formDOM = document.getElementById("chargen");
	var selectedSpecies = speciesDOM.querySelectorAll("input:checked");
	var selectedJobs = jobsDOM.querySelectorAll("input:checked");
	var minFlaws = parseInt(document.getElementById("minFlaws").value);
	var maxFlaws = parseInt(document.getElementById("maxFlaws").value);
	var minMotives = parseInt(document.getElementById("minMotives").value);
	var maxMotives = parseInt(document.getElementById("maxMotives").value);
	var sexes = document.querySelectorAll("input[name='sex']:checked");
	var minAge = parseInt(document.getElementById("minAge").value);
	var maxAge = parseInt(document.getElementById("maxAge").value);
	var charAmount = Math.max(parseInt(document.getElementById("charAmount").value), 1);
	var selectedReligions = religionDOM.querySelectorAll("input:checked");
	var selectedFactions = factionDOM.querySelectorAll("input:checked");
	var selectedHomeSystems = homeSystemDOM.querySelectorAll("input:checked");
	var selectedCitizenships = citizenshipDOM.querySelectorAll("input:checked");
	var selectedRelations = relationDOM.querySelectorAll("input:checked");
	var minBackStory = parseInt(document.getElementById("minBackStory").value);
	var maxBackStory = parseInt(document.getElementById("maxBackStory").value);
	if(!formDOM.checkValidity() || !selectedSpecies.length || !selectedJobs.length || !sexes.length || !selectedReligions.length || !selectedFactions.length || !selectedHomeSystems.length || !selectedCitizenships.length || !selectedRelations.length)  {
		output = "All choices must have at least one valid selection."
	} else {
		while(charAmount) {
			var output = "";
			var species = selectedSpecies[getRandomInt(0, selectedSpecies.length)].id;
			var job = selectedJobs[getRandomInt(0, selectedJobs.length)].id;
			var sex = sexes[getRandomInt(0, sexes.length)].id;
			if(job == "ai") {
				output = "An AI";
				sex = "neuter";
				species = "machine";
			} else if(job == "cyborg") {
				var module = cyborgModules[getRandomInt(0, cyborgModules.length)];
				output = "A Cyborg with the " + module + " module";
				sex = "neuter";
				species = "machine";
			} else {
				if(species == "diona") {
					sex = "plural";
					output += "A diona " + jobs[job];
				} else if(species == "machine") {
					sex = "neuter";
					output += "An IPC " + jobs[job];
				} else {
					output += "A " + sex + " " + speciesList[species] + " " + jobs[job];
				}
			}
			var age = Math.min(Math.max(getRandomInt(minAge, maxAge + 1), ageLimits[species][0]), ageLimits[species][1]);
			var birthYear = (new Date()).getFullYear() + 544 - age;
			var birthDate = getRandomDate(new Date(birthYear, 0, 1), new Date(birthYear, 11, 31));
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
			output += ". " + pronoun[sex].capitalize() + " was born on " + birthDate.getDate() + ". " + month[birthDate.getMonth()] + ", " + birthDate.getFullYear();
			output += " and is " + age + " Solar years old";
			var homeSystem = homeSystems[selectedHomeSystems[getRandomInt(0, selectedHomeSystems.length)].id];
			var citizenship = citizenships[selectedCitizenships[getRandomInt(0, selectedCitizenships.length)].id];
			output += ". " + homeSystem.capitalize() + " is " + possesive[sex] + " home system";
			output += " and " + pronoun[sex] + " is currently a citizen of " + citizenship;
			var religion = religions[selectedReligions[getRandomInt(0, selectedReligions.length)].id];
			output += ". " + pronoun[sex].capitalize() + " is a follower of " + religion;
			var flawAmt = getRandomInt(minFlaws, maxFlaws + 1);
			var motiveAmt = getRandomInt(minMotives, maxMotives + 1);
			var backStoryAmt = getRandomInt(minBackStory, maxBackStory + 1);
			var availableFlaws = flaws.slice(0);
			var availableMotives = motives.slice(0);
			var availableBackStory = backstories.slice(0);
			var firstItem = true;
			if(backStoryAmt > 0 && availableBackStory.length) {
				output += ". Growing up, " + pronoun[sex] + " ";
				while(backStoryAmt > 0) {
					if((backStoryAmt == 1 || availableBackStory.length == 1) && !firstItem) {
						output += ", and ";
					} else if(!firstItem) {
						output += ", ";
					} else {
						firstItem = false;
					}
					var chosenBackStory = availableBackStory[getRandomInt(0, availableBackStory.length)];
					output += replaceGender(chosenBackStory, sex);
					availableBackStory.splice(availableBackStory.indexOf(chosenBackStory), 1);
					backStoryAmt--;
				}
			}
			firstItem = true;
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
			var relation = ntRelations[selectedRelations[getRandomInt(0, selectedRelations.length)].id];
			output += ". NanoTrasen views " + dative[sex] + " as " + relation + " to the company";
			var faction = factions[selectedFactions[getRandomInt(0, selectedFactions.length)].id];
			output += ". " + pronoun[sex].capitalize() + " is a member of " + faction;
			output += "."
			charAmount--;
			var p = document.createElement("p");
			outputDOM.appendChild(p);
			p.textContent = output;
		}
	}
}
function select(section, what) {
	var checkboxes = document.getElementById(section).querySelectorAll("input[type='checkbox']");
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