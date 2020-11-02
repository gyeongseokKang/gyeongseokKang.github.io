let headlineContainer = document.querySelector('#headline-title-top');

let headlineText = headlineContainer.innerText;
const headlineTextList = [
	'Deep-working Developer',
	'Full-Stack Developer',
	'React Developer',
	'JavaScript Developer',
]

let count = 0;
setInterval(function () {
	headlineContainer.innerText = headlineTextList[count];
	count++;
	if (count >= headlineTextList.length) count -= headlineTextList.length;

}, 3000);
