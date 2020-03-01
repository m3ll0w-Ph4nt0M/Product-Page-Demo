document.addEventListener('DOMContentLoaded', function() {
	// function for tagline slider
	var count = 2;
	var prev_slide_id;
	var next_slide_id;
	var myVar = setInterval(tagslider, 7000);
	function tagslider() {
			prev_slide_id = count - 1;
			next_slide_id = count;
			var prev_slide = document.getElementsByClassName('ik-tagline-slide-'+prev_slide_id.toString());
			var next_slide = document.getElementsByClassName('ik-tagline-slide-'+next_slide_id.toString());
			prev_slide[0].style.opacity = "0"; prev_slide[1].style.opacity = "0";
			setTimeout(function(){ prev_slide[0].style.display = "none"; prev_slide[1].style.display = "none"; }, 1000);
	  		setTimeout(function(){ next_slide[0].style.display = "inline-block"; next_slide[1].style.display = "inline-block"; }, 1000);
	  		setTimeout(function(){ next_slide[0].style.opacity = "1"; next_slide[1].style.opacity = "1"; }, 1200);
	  		count++;
	  	if(count == 10) {
			clearInterval(myVar);
		}
	}

	// scroll animations
	var scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback,1000/60)};
	var animationElements = document.querySelectorAll('.show-on-scroll');
	var animationElementsArray= Array.prototype.slice.call(animationElements);
	function visibility_check() {
		animationElementsArray.forEach(function (element) {
			if (isElementInViewport(element)) {
				element.classList.add('is-visible');
			} else {
				element.classList.remove('is-visible');
			}
		});
		scroll(visibility_check);
	}
	
	visibility_check();

	// function to check if element is in Viewport
	function isElementInViewport(el) {
	  var rect = el.getBoundingClientRect();
	  return (
	    (rect.top <= 0
	      && rect.bottom >= 0)
	    ||
	    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
	      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
	    ||
	    (rect.top >= 0 &&
	      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	  );
	}
}, false);