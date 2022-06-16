const body = document.querySelector('body')
function createBody() {
	body.innerHTML += `
		<div class="container">
			<h4 class="title">Turn the light on and off by clicking the bulb!</h4>
			<img class="img" id="img" src="OFFbulb.jpg" alt="">
		</div>
	`
}
createBody()

const img = document.querySelector('#img')
img.addEventListener('click', onOff)
function onOff() {
	if (img.classList.contains("img")) {
		img.src = "ONbulb.jpg";
		img.classList.remove("img")
	} else {
		img.src = "OFFbulb.jpg";
		img.classList.add("img")
	}
}