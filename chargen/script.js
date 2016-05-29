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
var cyborgTypes = [
	"A Robot",
	"An Android",
	"A Cyborg"
];
var cyborgModules = {
	"standard": [
		"a basic",
		"a tripodal android",
		"a default tripod",
		"a hover drone",
		"an eyebot"
	],
	"service": [
		"a Kent",
		"a brobot",
		"a rich",
		"a default butler",
		"a waitress",
		"a service hover drone",
		"a hydroponics hover drone",
		"an eyebot"
	],
	"clerical": [
		"a Kent",
		"a brobot",
		"a rich",
		"a default butler",
		"a waitress",
		"a service hover drone",
		"an eyebot"
	],
	"research": [
		"a tripod android",
		"a hover drone",
		"an eyebot"
	],
	"miner": [
		"a basic",
		"a bipedal android",
		"a treadhead",
		"a hover drone",
		"an eyebot"
	],
	"crisis": [
		"a basic",
		"a standard hover bot",
		"a bipedal android",
		"a needly",
		"a medical hover drone",
		"a chemistry hover drone",
		"an eyebot"
	],
	"surgeon": [
		"a basic",
		"a standard hover bot",
		"a bipedal android",
		"a needly",
		"a hover drone",
		"an eyebot"
	],
	"security": [
		"a basic",
		"a red knight",
		"a black knight",
		"a bloodhound",
		"a treaded bloodhound",
		"a hover drone",
		"an eyebot"
	],
	"engineering": [
		"a basic",
		"an antique",
		"a landmate",
		"a treaded landmate",
		"a hover drone",
		"an eyebot"
	],
	"janitor": [
		"a basic",
		"a mopbot",
		"a Mop Gear Rex",
		"a hover drone",
		"an eyebot"
	]
};
var flaws = [
	"$has a drug addiction",
	"$is afraid of a common animal",
	"$is afraid of a common situation",
	"$is allergic to a common thing",
	"$is arrogant",
	"$is bigoted",
	"$is chronically ill",
	"$is controlling",
	"$is obsessive",
	"$is egocentric",
	"$is abusive",
	"$is very sensitive",
	"$is forgetful",
	"$is greedy",
	"$is impatient",
	"$is lazy",
	"$is judgmental",
	"$is a chronic liar",
	"$is moody",
	"$is a drama queen",
	"$is paranoid",
	"$is petty",
	"$is overly protective",
	"$is power hungry",
	"$is prejudiced",
	"$is reckless",
	"$is sadistic",
	"$is selfish",
	"$is short-sighted",
	"$is hot headed",
	"$is socially inept",
	"$is spiteful",
	"$is whiny",
	"$is smelly",
	"$is sleazy",
	"$is creepy",
	"$is easily stressed out",
	"$is almost a sociopath",
	"$is really shy",
	"dislike$s something that is popular",
	"like$s something that is unpopular"
];
var motives = [
	"woo someone who is out of $possessive league",
	"learn the true fate of someone who suddenly left $possessive life",
	"protect the people $pronoun love$s",
	"change $possessive ways",
	"escape from someone who intends to hurt $dative",
	"fit in",
	"exact revenge",
	"move up in the world",
	"seek adventure",
	"be in charge of everything",
	"educate others",
	"solve a mystery about $possessive past",
	"help those who need it",
	"fall in love",
	"get rich",
	"become famous",
	"earn the respect of $possessive peers",
	"have children",
	"be attractive",
	"live in peace",
	"break an addiction or bad habit",
	"start $possessive own company",
	"move somewhere new",
	"prove $reflexive to others",
	"go out with a bang",
	"leave a legacy",
	"achieve something major in $possessive field"
];
var genderReplacements = {
	"male": {
		"$pronoun":"he",
		"$dative":"him",
		"$possessive":"his",
		"$reflexive":"himself",
		"$is":"is",
		"$was":"was",
		"$has":"has",
		"$s":"s"
	},
	"female": {
		"$pronoun":"she",
		"$dative":"her",
		"$possessive":"her",
		"$reflexive":"herself",
		"$is":"is",
		"$was":"was",
		"$has":"has",
		"$s":"s"
	},
	"plural": {
		"$pronoun":"they",
		"$dative":"them",
		"$possessive":"their",
		"$reflexive":"themselves",
		"$is":"are",
		"$was":"were",
		"$has":"have",
		"$s":""
	},
	"neuter": {
		"$pronoun":"it",
		"$dative":"it",
		"$possessive":"its",
		"$reflexive":"itself",
		"$is":"is",
		"$was":"was",
		"$has":"has",
		"$s":"s"
	}
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
		"a mohawk",
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
		"messy hair",
		"ears"
	],
	"vox": [
		"short quills", 
		"kingly quills", 
		"a quill mohawk"
	],
	"resomi": [
		"plumage",
		"big ears",
		"spiky feathers"
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
		"a dwarf beard"
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
	"human": {
		"natural black":"rgb(44, 34, 43)",
		"jet black":"rgb(9, 8, 6)",
		"medium brown":"rgb(78, 67, 63)",
		"chestnut brown":"rgb(80, 68, 68)",
		"light brown":"rgb(167, 133, 106)",
		"platinum blonde":"rgb(202, 191, 177)",
		"ash blonde":"rgb(222, 188, 153)",
		"strawberry blonde":"rgb(165, 107, 70)",
		"dark auburn":"rgb(83, 61, 50)",
		"light auburn":"rgb(145, 85, 61)",
		"golden blonde":"rgb(229, 200, 168)",
		"dark brown":"rgb(59, 48, 36)",
		"light gray":"rgb(214, 196, 194)",
		"gray":"rgb(183, 166, 158)",
		"dark gray":"rgb(113, 99, 90)",
		"light red":"rgb(181, 82, 57)",
		"dark red":"rgb(141, 74, 67)"
	},
	"unathi": {
		"tan":"tan",
		"green":"green",
		"turquoise":"turquoise"
	},
	"tajara": {
		"tan":"tan",
		"brown":"rgb(78, 67, 63)",
		"dark brown":"rgb(78, 67, 63)",
		"light gray":"rgb(214, 196, 194)",
		"gray":"rgb(183, 166, 158)",
		"dark gray":"rgb(113, 99, 90)"
	},
	"resomi": {
		"green":"#8FD8A0",
		"orange":"#DACC8F",
		"yellow":"#CBD890",
		"red":"#D9A790",
		"blue":"#9ACCCD",
		"purple":"#D18FD9",
	}
};
var skinTones = {
	"human": {
		"pale skin":"rgb(237, 232, 226)",
		"white skin":"rgb(255, 224, 189)",
		"tan skin":"rgb(234, 192, 134)",
		"brown skin":"rgb(224, 172, 105)",
		"dark brown skin":"rgb(198, 134, 66)",
		"black skin":"rgb(141, 85, 36)"
	},
	"unathi": {
		"tan scales":"tan",
		"green scales":"green",
		"turquoise scales":"turquoise"
	},
	"tajara": {
		"tan fur":"tan",
		"brown fur":"rgb(78, 67, 63)",
		"dark brown fur":"rgb(78, 67, 63)",
		"light gray fur":"rgb(214, 196, 194)",
		"gray fur":"rgb(183, 166, 158)",
		"dark gray fur":"rgb(113, 99, 90)"
	},
	"resomi": {
		"green feathers":"#8FD8A0",
		"orange feathers":"#DACC8F",
		"yellow feathers":"#CBD890",
		"red feathers":"#D9A790",
		"blue feathers":"#9ACCCD",
		"purple feathers":"#D18FD9",
	},
	"skrell": {
		"light green skin":"greenyellow",
		"green skin":"lightgreen",
		"turquoise skin":"turquoise",
		"light blue skin":"aquamarine",
		"dark blue skin":"lightblue"
	}
};
var ageLimits = {
	"human": [17, 100],
	"unathi": [18, 60],
	"tajara": [17, 80],
	"vox": [17, 70],
	"resomi": [12, 45],
	"skrell": [19, 90],
	"diona": [1, 300],
	"machine": [1, 90],
	"synthetic": [1, 90]
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
	"was bullied by $possessive peers",
	"was abused by $possessive family",
	"didn't fit in",
	"ran away from home",
	"lost a friend",
	"served in the military",
	"performed poorly at work and faced consequences",
	"excelled in school",
	"$was very poor",
	"had a wealthy family",
	"failed many classes",
	"committed several crimes",
	"did something very wrong $pronoun regret$s",
	"did something very wrong, but without regrets",
	"made a mistake $pronoun regret$s",
	"accidentally hurt someone $pronoun care$s about"
];
var eyeColors = [
	"green",
	"blue",
	"hazel",
	"brown",
	"violet",
	"gray"
];
var cores = [
	"a blue face",
	"a red face",
	"a rainbow",
	"magma",
	"a monochrome face",
	"an inverted face",
	"a green face",
	"static",
	"text",
	"a smiley face",
	"an angry face",
	"the matrix",
	"a dorf",
	"bliss",
	"a soviet insignia",
	"$possessive trapped emotions",
	"a heart line",
	"talkative sound waves",
	"helios",
	"digging too deep",
	"a goon",
	"a database",
	"a glitched man",
	"a lonestar",
	"a Nanotrasen logo"
];
function populateChoices(fieldset, choices, defaultChoice) {
	for(var choice in choices) {
		var div = document.createElement("div");
        div.setAttribute("class", "item");
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
		label.setAttribute("for", choice);
		div.appendChild(label);
        var checked = document.createElement("div");
        checked.setAttribute("class", "icon16 icon-circle-check");
        label.appendChild(checked);
        var unchecked = document.createElement("div");
        unchecked.setAttribute("class", "icon16 icon-circle-close");
        label.appendChild(unchecked);
        var span = document.createElement("span");
        span.textContent += choices[choice];
        label.appendChild(span);
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
document.getElementById("loadingNotice").setAttribute("style", "display: none;");
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}
function replaceGender(string, sex) {
	for(var keyword in genderReplacements[sex]) {
		var replacement = genderReplacements[sex][keyword];
		// using split().join() because it's probably easier than escaping a regexp to make the search global
		string = string.split(keyword).join(replacement);
		keyword = "$" + keyword.substr(1).capitalize();
		replacement = replacement.capitalize();
		string = string.split(keyword).join(replacement);
	}
	return string;
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
        var p = document.createElement("p");
        outputDOM.appendChild(p);
        p.textContent = output;
	} else {
		while(charAmount) {
			var output = "";
			var species = selectedSpecies[getRandomInt(0, selectedSpecies.length)].id;
			var job = selectedJobs[getRandomInt(0, selectedJobs.length)].id;
			var sex = sexes[getRandomInt(0, sexes.length)].id;
			if(job == "ai") {
				var core = cores[getRandomInt(0, cores.length)];
				output = "An AI with a core displaying " + core;
				sex = "neuter";
				species = "synthetic";
			} else if(job == "cyborg") {
				var module = Object.keys(cyborgModules)[getRandomInt(0, Object.keys(cyborgModules).length)];
				var body = cyborgModules[module][getRandomInt(0, cyborgModules[module].length)];
				var cyborgType = cyborgTypes[getRandomInt(0, cyborgTypes.length)];
				output = cyborgType + " with the " + module + " module and " + body + " body";
				sex = "neuter";
				species = "synthetic";
			} else {
				if(species == "diona") {
					sex = "plural";
					output += "A Diona " + jobs[job];
				} else if(species == "machine") {
					sex = "neuter";
					output += "An IPC " + jobs[job];
				} else if(species == "vox") {
					sex = "neuter";
					output += "A Vox Pariah " + jobs[job];
				} else {
					output += "A " + sex + " " + speciesList[species] + " " + jobs[job];
				}
			}
			minAge = Math.min(Math.max(minAge, ageLimits[species][0]), ageLimits[species][1]);
			maxAge = Math.min(Math.max(maxAge, ageLimits[species][0]), ageLimits[species][1]);
			var age = getRandomInt(minAge, maxAge + 1);
			var today = new Date();
			var birthYear = today.getFullYear() + 544 - age;
			var birthDate = getRandomDate(new Date(birthYear, 0, 1), new Date(birthYear, 11, 31));
			// if their birthday hasn't happened yet this year, then they were born a year earlier than birth year - age.
			if(today.getMonth() < birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
				birthYear--;
				birthDate.setFullYear(birthYear);
			}
			var skinTone = "";
			var hairStyle = "";
			var hairColor = "";
			var facialHairStyle = "";
			var facialHairColor = "";
			var eyeColor = "";
			if(skinTones[species]) {
				skinTone = Object.keys(skinTones[species])[getRandomInt(0, Object.keys(skinTones[species]).length)];
			}
			if(hair[species]) {
				hairStyle = hair[species][getRandomInt(0, hair[species].length)];
				if(Math.random() <= (1 / (hair[species].length + 1)) && (species == "human" || species == "unathi")) {
					hairStyle = null;
				}
			}
			if(facialHair[species]) {
				facialHairStyle = facialHair[species][getRandomInt(0, facialHair[species].length)];
				if(Math.random() <= 0.6 || (sex == "female" && species != "tajara")) {
					facialHairStyle = null;
				}
			}
			if(hairColors[species]) {
				hairColor = Object.keys(hairColors[species])[getRandomInt(0, Object.keys(hairColors[species]).length)];
				facialHairColor = hairColor;
				if(Math.random() <= 0.3) {
					facialHairColor = Object.keys(hairColors[species])[getRandomInt(0, Object.keys(hairColors[species]).length)];
				}
			}
			if(species != "synthetic" && species != "machine" && species != "diona") {
				eyeColor = eyeColors[getRandomInt(0, eyeColors.length)];
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
					output += " colored " + hairColor;
				}
				if(facialHairStyle) {
					output += ", and ";
				}
			}
			if(facialHairStyle) {
				output += facialHairStyle;
				if(facialHairColor) {
					output += " colored " + facialHairColor;
				}
			}
			if(eyeColor) {
				output += ". $Possessive eyes are " + eyeColor;
			}
			output += ". $Pronoun $was born on " + birthDate.getDate() + ". " + month[birthDate.getMonth()] + ", " + birthDate.getFullYear();
			output += " and $is " + age + " Solar years old";
			var homeSystem = homeSystems[selectedHomeSystems[getRandomInt(0, selectedHomeSystems.length)].id];
			var citizenship = citizenships[selectedCitizenships[getRandomInt(0, selectedCitizenships.length)].id];
			output += ". " + homeSystem.capitalize() + " is $possessive home system";
			if(species != "synthetic") {
				output += " and $pronoun $is currently a citizen of " + citizenship;
			}
			var religion = religions[selectedReligions[getRandomInt(0, selectedReligions.length)].id];
			output += ". $Pronoun $is a follower of " + religion;
			var flawAmt = getRandomInt(minFlaws, maxFlaws + 1);
			var motiveAmt = getRandomInt(minMotives, maxMotives + 1);
			var backStoryAmt = getRandomInt(minBackStory, maxBackStory + 1);
			var availableFlaws = flaws.slice(0);
			var availableMotives = motives.slice(0);
			var availableBackStory = backstories.slice(0);
			var firstItem = true;
			if(backStoryAmt > 0 && availableBackStory.length) {
				output += ". In the past, $pronoun ";
				while(backStoryAmt > 0) {
					if((backStoryAmt == 1 || availableBackStory.length == 1) && !firstItem) {
						output += ", and ";
					} else if(!firstItem) {
						output += ", ";
					} else {
						firstItem = false;
					}
					var chosenBackStory = availableBackStory[getRandomInt(0, availableBackStory.length)];
					output += chosenBackStory;
					availableBackStory.splice(availableBackStory.indexOf(chosenBackStory), 1);
					backStoryAmt--;
				}
			}
			firstItem = true;
			if(flawAmt > 0 && availableFlaws.length) {
				output += ". $Pronoun ";
				while(flawAmt > 0 && availableFlaws.length) {
					if((flawAmt == 1 || availableFlaws.length == 1) && !firstItem) {
						output += ", and ";
					} else if(!firstItem) {
						output += ", ";
					} else {
						firstItem = false;
					}
					var chosenFlaw = availableFlaws[getRandomInt(0, availableFlaws.length)];
					output += chosenFlaw;
					availableFlaws.splice(availableFlaws.indexOf(chosenFlaw), 1);
					flawAmt--;
				}
			}
			firstItem = true;
			if(motiveAmt > 0 && availableMotives.length) {
				output += ". $Pronoun want$s to ";
				while(motiveAmt > 0) {
					if((motiveAmt == 1 || availableMotives.length == 1) && !firstItem) {
						output += ", and ";
					} else if(!firstItem) {
						output += ", ";
					} else {
						firstItem = false;
					}
					var chosenMotive = availableMotives[getRandomInt(0, availableMotives.length)];
					output += chosenMotive;
					availableMotives.splice(availableMotives.indexOf(chosenMotive), 1);
					motiveAmt--;
				}
			}
			var relation = ntRelations[selectedRelations[getRandomInt(0, selectedRelations.length)].id];
			output += ". NanoTrasen views $dative as " + relation + " to the company";
			var faction = factions[selectedFactions[getRandomInt(0, selectedFactions.length)].id];
			output += ". $Pronoun $is a member of " + faction;
			output += "."
			output = replaceGender(output, sex);
			var p = document.createElement("p");
			outputDOM.appendChild(p);
			p.textContent = output;
			var div = document.createElement("div");
			div.setAttribute("class", "charprev");
			// Chrome will not show the drop shadow if the image itself is hidden.
			// For some reason, Chrome will only display the human body sprite out of bounds, anyway.
			if(!!window.chrome && !!window.chrome.webstore) {
				div.setAttribute("style", "overflow: visible;");
			}
			var bodyImage = document.createElement("img");
			var bodyImagePath = "bodies/";
			var eyeImagePath = "";
			switch(species) {
				case "human":
					bodyImagePath += (sex == "male") ? "human-m.png" : "human-f.png";
					break;
				case "skrell":
					bodyImagePath += (sex == "male") ? "skrell-m.png" : "skrell-f.png";
					break;
				case "tajara":
					bodyImagePath += (sex == "male") ? "tajara-m.png" : "tajara-f.png";
					break;
				case "synthetic":
					if(job == "ai") {
						bodyImagePath += "cores/" + cores.indexOf(core) + ".gif";
					} else {
						bodyImagePath += "modules/" + module + "/" + cyborgModules[module].indexOf(body) + ".gif";
						var eyeImagePath = "bodies/modules/" + module + "/" + cyborgModules[module].indexOf(body) + "-eyes.gif";
					}
					bodyImage.setAttribute("alt", "synthetic previews wip");
					break;
				default:
					bodyImagePath += species + ".png";
					break;
			}
			bodyImage.setAttribute("src", bodyImagePath);
			div.appendChild(bodyImage);
			if(eyeImagePath) {
				var eyeImage = document.createElement("img");
				eyeImage.setAttribute("src", eyeImagePath);
				div.appendChild(eyeImage);
			}
			if(skinTone) {
				var skinToneOverlayImage = document.createElement("img");
				skinToneOverlayImage.setAttribute("src", bodyImagePath);
				var blendMode = "overlay";
				if(species == "human") {
					blendMode = "multiply";
				}
				var styleString = "top: -64px; mix-blend-mode: " + blendMode + "; filter: drop-shadow(0px 64px " + skinTones[species][skinTone] + ");";
				styleString += " -webkit-filter: drop-shadow(0px 64px " + skinTones[species][skinTone] + ");";
				skinToneOverlayImage.setAttribute("style", styleString);
				div.appendChild(skinToneOverlayImage);
			}
			if(facialHairStyle) {
				var facialHairImage = document.createElement("img");
				var facialHairImagePath = "hair/" + species + "/facial/" + facialHair[species].indexOf(facialHairStyle) + ".png";
				facialHairImage.setAttribute("src", facialHairImagePath);
				div.appendChild(facialHairImage);
				if(facialHairColor) {
					var facialHairColorOverlayImage = document.createElement("img");
					facialHairColorOverlayImage.setAttribute("src", facialHairImagePath);
					var styleString = "top: -64px; mix-blend-mode: screen; filter: drop-shadow(0px 64px " + hairColors[species][facialHairColor] + ");";
					styleString += " -webkit-filter: drop-shadow(0px 64px " + hairColors[species][facialHairColor] + ");";
					facialHairColorOverlayImage.setAttribute("style", styleString);
					div.appendChild(facialHairColorOverlayImage);
				}
			}
			if(hairStyle) {
				var hairImage = document.createElement("img");
				var hairImagePath = "hair/" + species + "/" + hair[species].indexOf(hairStyle) + ".png";
				hairImage.setAttribute("src", hairImagePath);
				div.appendChild(hairImage);
				if(hairColor) {
					var hairColorOverlayImage = document.createElement("img");
					hairColorOverlayImage.setAttribute("src", hairImagePath);
					var styleString = "top: -64px; mix-blend-mode: screen; filter: drop-shadow(0px 64px " + hairColors[species][hairColor] + ");";
					styleString += " -webkit-filter: drop-shadow(0px 64px " + hairColors[species][hairColor] + ");";
					hairColorOverlayImage.setAttribute("style", styleString);
					div.appendChild(hairColorOverlayImage);
				}
			}
			p.appendChild(div);
			charAmount--;
			if(charAmount) {
				outputDOM.appendChild(document.createElement("hr"));
			}
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