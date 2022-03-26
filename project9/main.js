let slideIndex = 1;
showSlides(slideIndex);
// countdown //
function countdown() {
	var seconds= document.getElementById("seconds").value;
	
	function tick() {
		seconds = seconds -1;
		timer.innerHTML = seconds;
		var time=setTimeout(tick, 1000);
		if (seconds == -1) {
			alert("time is up");
			timer.innerHTML ="";
		}
	}
	tick();
}
function plusSlides(a) {
  showSlides(slideIndex += a);
}

// thumbnail ctrls //
function currentSlide(a) {
  showSlides(slideIndex = a);
}

function showSlides(a) {
  let b;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (a > slides.length) {slideIndex = 1}
  if (a < 1) {slideIndex = slides.length}
  for (b = 0; b < slides.length; b++) {
    slides[b].style.display = "none";
  }
  for (b = 0; b < dots.length; b++) {
    dots[b].className = dots[b].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}