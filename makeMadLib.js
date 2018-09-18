//code doesn't look bad anymore :)
//yay tutorials and actual planning

function writeLib() {
	var randomInt = Math.floor(5 * Math.random() + 1);
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
	window.location.href = "FoodMadLib.html";
}

function two() {
	window.location.href = "ClassMadLib.html";
}

function three() {
	window.location.href = "PizzaMadLib.html";
}

function four() {
	window.location.href = "FallMadLib.html";
}

function five() {
	window.location.href = "LunchMadLib.html";
}