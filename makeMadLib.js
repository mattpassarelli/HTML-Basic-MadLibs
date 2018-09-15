//christ this code looks bad. I should look into html and JS more in my spare time
var inputOne = document.createElement("INPUT");
inputOne.setAttribute("type", "text");

var inputTwo = document.createElement("INPUT");
inputTwo.setAttribute("type", "text");

var inputThree = document.createElement("INPUT");
inputThree.setAttribute("type", "text");

var input4 = document.createElement("INPUT");
input4.setAttribute("type", "text");

var input5 = document.createElement("INPUT");
input5.setAttribute("type", "text");

var input6 = document.createElement("INPUT");
input6.setAttribute("type", "text");

var input7 = document.createElement("INPUT");
input7.setAttribute("type", "text");

var input8 = document.createElement("INPUT");
input8.setAttribute("type", "text");

var input9 = document.createElement("INPUT");
input9.setAttribute("type", "text");

var input10 = document.createElement("INPUT");
input10.setAttribute("type", "text");

var input11 = document.createElement("INPUT");
input11.setAttribute("type", "text");

var input12 = document.createElement("INPUT");
input12.setAttribute("type", "text");

var input13 = document.createElement("INPUT");
inputThree.setAttribute("type", "text");

var input14 = document.createElement("INPUT");
input14.setAttribute("type", "text");

var input15 = document.createElement("INPUT");
input15.setAttribute("type", "text");


function writeLib() {
	document.getElementById("main-body").innerHTML = "";

	var randomInt = Math.floor(5 * Math.random() + 1);
	var node = document.createTextNode("You're now playing MadLib #" + randomInt + "!!");
	var body = document.getElementById('main-body');
	var hr = document.createElement('hr');
	body.appendChild(node);
	body.appendChild(hr);


	switch (randomInt) {
		case 1:
			one();
			break;
		case 2:
			two();
			break;
		case 3:
			three();
			break;
		case 4:
			four();
			break;
		case 5:
			five();
			break;

	}
}

function one() {
	var body = document.getElementById('main-body');
	var linebreak = document.createElement("br");
	var hr = document.createElement('hr');
	var node = document.createTextNode("PLAYING ONE");
	var submitButton = document.createElement("BUTTON");
	var submitTxt = document.createTextNode("Write MadLib!");
	submitButton.appendChild(submitTxt);
	var restart = document.createElement("BUTTON");
	var restartTxt = document.createTextNode("Click to play again!");
	restart.appendChild(restartTxt);

	node = document.createTextNode("Please enter a noun: ");
	body.appendChild(node);
	body.appendChild(inputOne);


	node = document.createTextNode("Please enter a plural noun: ");
	body.appendChild(node);
	body.appendChild(inputTwo);

	node = document.createTextNode("Please enter a noun: ");
	body.appendChild(node);
	body.appendChild(inputThree);

	node = document.createTextNode("Please enter a place: ");
	body.appendChild(node);
	body.appendChild(inputFour);

	node = document.createTextNode("Please enter a adjective: ");
	body.appendChild(node);
	body.appendChild(inputFive);

	node = document.createTextNode("Please enter a noun: ");
	body.appendChild(node);
	body.appendChild(inputSix);

	body.appendChild(submitButton);

	submitButton.onclick = function () {
		body.innerHTML = "Be kind to your " + inputOne.value + "-footed " + inputTwo.value + "<br>" +
			"For a duck may be somebody`s " + inputThree.value + "," + "<br>" +
			"Be kind to your " + inputThree.value + " in " + inputFour.value + "<br>" +
			"Where the weather is always " + inputFive.value + "." + "<br>" + "<br>" +
			"You may think that this is the " + inputSix.value + "," + "<br>" +
			"Well it is." + "<br>" + "<br>" + "<br>"

		body.appendChild(restart);
	};

	restart.onclick = function () {
		writeLib();
	};
}

function two() {
	var body = document.getElementById('main-body');
	var linebreak = document.createElement("br");
	var hr = document.createElement('hr');
	var node = document.createTextNode("PLAYING ONE");
	var submitButton = document.createElement("BUTTON");
	var submitTxt = document.createTextNode("Write MadLib!");
	submitButton.appendChild(submitTxt);
	var restart = document.createElement("BUTTON");
	var restartTxt = document.createTextNode("Click to play again!");
	restart.appendChild(restartTxt);

	node = document.createTextNode("Please enter a name: ");
	body.appendChild(node);
	body.appendChild(inputOne);


	node = document.createTextNode("Please enter an adjective: ");
	body.appendChild(node);
	body.appendChild(inputTwo);

	node = document.createTextNode("Please enter a noun: ");
	body.appendChild(node);
	body.appendChild(inputThree);

	body.appendChild(submitButton);

	submitButton.onclick = function () {
		body.innerHTML = "Please excuse " + inputOne.value + "," + "<br>" +
			"who is far too " + inputTwo.value + " to attend " + inputThree.value + " class." + "<br>" + "<br>" + "<br>";

		body.appendChild(restart);

	};

	restart.onclick = function () {
		writeLib();
	};
}

function three() {
	var body = document.getElementById('main-body');
	var linebreak = document.createElement("br");
	var hr = document.createElement('hr');
	var node = document.createTextNode("PLAYING ONE");
	var submitButton = document.createElement("BUTTON");
	var submitTxt = document.createTextNode("Write MadLib!");
	submitButton.appendChild(submitTxt);
	var restart = document.createElement("BUTTON");
	var restartTxt = document.createTextNode("Click to play again!");
	restart.appendChild(restartTxt);


	node = document.createTextNode("Please enter an adjective: ");
	body.appendChild(node);
	body.appendChild(inputOne);


	node = document.createTextNode("Please enter a nationality: ");
	body.appendChild(node);
	body.appendChild(inputTwo);

	node = document.createTextNode("Please enter a name: ");
	body.appendChild(node);
	body.appendChild(inputThree);

	node = document.createTextNode("Please enter a noun: ");
	body.appendChild(node);
	body.appendChild(input4);

	node = document.createTextNode("Please enter an adjective: ");
	body.appendChild(node);
	body.appendChild(input5);

	node = document.createTextNode("Please enter a noun: ");
	body.appendChild(node);
	body.appendChild(input6);

	node = document.createTextNode("Please enter an adjective: ");
	body.appendChild(node);
	body.appendChild(input7);

	node = document.createTextNode("Please enter an adjective: ");
	body.appendChild(node);
	body.appendChild(input8);

	node = document.createTextNode("Please enter a plural noun: ");
	body.appendChild(node);
	body.appendChild(input9);

	node = document.createTextNode("Please enter a noun: ");
	body.appendChild(node);
	body.appendChild(input10);

	node = document.createTextNode("Please enter a number: ");
	body.appendChild(node);
	body.appendChild(input11);

	node = document.createTextNode("Please enter a shape: ");
	body.appendChild(node);
	body.appendChild(input12);

	node = document.createTextNode("Please enter a food: ");
	body.appendChild(node);
	body.appendChild(input13);

	node = document.createTextNode("Please enter a food: ");
	body.appendChild(node);
	body.appendChild(input14);

	node = document.createTextNode("Please enter a number: ");
	body.appendChild(node);
	body.appendChild(input15);


	body.appendChild(submitButton);


	submitButton.onclick = function () {
		body.innerHTML = "Pizza was invented by a " + inputOne.value + " " + inputTwo.value + " chef named " + inputThree.value + "." + "<br>" +
			"To make a pizza, you need to take a lump of " + input4.value + ", and make a thin round, " + input5.value + " " + input6.value + ". <br>" +
			"Then you cover it with " + input7.value + " sauce, " + input8.value + " cheese, and freshly chopped " + input9.value + ". <br>" +
			"Next you have to bake it in a very hot " + input10.value + ". When it's done, cut it into " + input11.value + " " + input12.value + "s. <br>" +
			"Some kids like " + input13.value + " pizza the best, but my favorite is the " + input14.value + " pizza. If I could, I would eat pizza " + input15.value + " times a day!" +
			"<br>" + "<br>" + "<br>"


		body.appendChild(restart);
	};

	restart.onclick = function () {
		writeLib();
	};

}

function four() {
	var body = document.getElementById('main-body');
	var linebreak = document.createElement("br");
	var hr = document.createElement('hr');
	var node = document.createTextNode("PLAYING ONE");
	var submitButton = document.createElement("BUTTON");
	var submitTxt = document.createTextNode("Write MadLib!");
	submitButton.appendChild(submitTxt);
	var restart = document.createElement("BUTTON");
	var restartTxt = document.createTextNode("Click to play again!");
	restart.appendChild(restartTxt);



	node = document.createTextNode("Please enter an adjective: ");
	body.appendChild(node);
	body.appendChild(inputOne);


	node = document.createTextNode("Please enter an adjective: ");
	body.appendChild(node);
	body.appendChild(inputTwo);

	node = document.createTextNode("Please enter a type of bird: ");
	body.appendChild(node);
	body.appendChild(inputThree);

	node = document.createTextNode("Please enter a room in a house: ");
	body.appendChild(node);
	body.appendChild(input4);

	node = document.createTextNode("Please enter a verb (past tense): ");
	body.appendChild(node);
	body.appendChild(input5);

	node = document.createTextNode("Please enter a verb: ");
	body.appendChild(node);
	body.appendChild(input6);

	node = document.createTextNode("Please enter a name: ");
	body.appendChild(node);
	body.appendChild(input7);

	node = document.createTextNode("Please enter a noun: ");
	body.appendChild(node);
	body.appendChild(input8);

	node = document.createTextNode("Please enter a type of liquid: ");
	body.appendChild(node);
	body.appendChild(input9);

	node = document.createTextNode("Please enter a verb ending in -ing: ");
	body.appendChild(node);
	body.appendChild(input10);

	node = document.createTextNode("Please enter a plural part of the body: ");
	body.appendChild(node);
	body.appendChild(input11);

	node = document.createTextNode("Please enter a plural noun: ");
	body.appendChild(node);
	body.appendChild(input12);

	node = document.createTextNode("Please enter a verb ending in -ing: ");
	body.appendChild(node);
	body.appendChild(input13);

	node = document.createTextNode("Please enter a noun: ");
	body.appendChild(node);
	body.appendChild(input14);


	body.appendChild(submitButton);



	submitButton.onclick = function () {
		body.innerHTML = "It was a " + inputOne.value + ", cold November day. I woke up to" + "<br>" +
			"the " + inputTwo.value + " smell of " + inputThree.value + " roasting in the " + input4.value + " downstairs. <br>" +
			"I " + input5.value + " down the stairs to see if I could help " + input6.value + " the dinner. My mom said, <br>" +
			" ''See if " + input7.value + " needs a fresh " + input8.value + ".'' So I carried a tray of glasses full of " + input9.value +
			" into the " + input10.value + " room. <br>" + "When I got there, I couldn't believe my " + input11.value + "s! There were " + input12.value + " " +
			input13.value + " on the " + input14.value + "! <br> <br> <br>"

		body.appendChild(restart);

	};

	restart.onclick = function () {
		writeLib();
	};
}

function five() {
	var body = document.getElementById('main-body');
	var linebreak = document.createElement("br");
	var hr = document.createElement('hr');
	var node = document.createTextNode("PLAYING ONE");
	var submitButton = document.createElement("BUTTON");
	var submitTxt = document.createTextNode("Write MadLib!");
	submitButton.appendChild(submitTxt);
	var restart = document.createElement("BUTTON");
	var restartTxt = document.createTextNode("Click to play again!");
	restart.appendChild(restartTxt);


	node = document.createTextNode("Please enter a container: ");
	body.appendChild(node);
	body.appendChild(inputOne);


	node = document.createTextNode("Please enter an adjective: ");
	body.appendChild(node);
	body.appendChild(inputTwo);

	node = document.createTextNode("Please enter an adjective: ");
	body.appendChild(node);
	body.appendChild(inputThree);

	node = document.createTextNode("Please enter a noun: ");
	body.appendChild(node);
	body.appendChild(input4);

	node = document.createTextNode("Please enter an animal: ");
	body.appendChild(node);
	body.appendChild(input5);

	node = document.createTextNode("Please enter a vegtable: ");
	body.appendChild(node);
	body.appendChild(input6);

	node = document.createTextNode("Please enter a vegtable: ");
	body.appendChild(node);
	body.appendChild(input7);

	node = document.createTextNode("Please enter a color: ");
	body.appendChild(node);
	body.appendChild(input8);

	node = document.createTextNode("Please enter an adjective: ");
	body.appendChild(node);
	body.appendChild(input9);

	body.appendChild(submitButton);


	submitButton.onclick = function () {
		body.innerHTML = "Make sure your lunch " + inputOne.value + " is filled with nutrious <br>" +
			inputTwo.value + " food. Do not go to the " + inputThree.value + " food stand across the street from school. <br>" +
			"The hamburgers they serve are fried in " + input4.value + " and are made of " + input5.value + " meat. <br>" +
			"So take a sandwich made of " + input6.value + " or " + input7.value + "; it's much healthier!" + " Drink " + input8.value +
			"<br> milk instead of " + input9.value + " colas. <br> <br> <br>"

		body.appendChild(restart);

	};

	restart.onclick = function () {
		writeLib();
	};
}

