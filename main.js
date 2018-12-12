
function randomPrompt() {
	var prompts = text.split("$!");
	var len = prompts.length - 1;
	result = Math.floor(Math.random() * len) + 1;
	document.getElementById("textzone").innerHTML=prompts[result];
}
