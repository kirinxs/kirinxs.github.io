const text = document.querySelector(".text");

var chars = text.innerText.split("");

var newText = "";
for (char in chars) {
	newText = newText + `<span>${chars[char]}</span>`;
}

text.innerHTML = newText;