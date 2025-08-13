document.addEventListener("DOMContentLoaded", function () {
	const heroGrid = document.querySelector(".tiltgrid");
	const hero = document.querySelector(".hero");
	const tiltDegree = 10;
	function isElementInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
			rect.bottom > 0 &&
			rect.right > 0 &&
			rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
			rect.top < (window.innerHeight || document.documentElement.clientHeight)
		);
	}
	function mapRange(value, inMin, inMax, outMin, outMax) {
		return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
	}
	function updateScrollPos() {
		const scrollPos = window.scrollY;
		const rect = heroGrid.getBoundingClientRect();
		const scrollPercent = (scrollPos * 100) / rect.height;

		let mappedValue = mapRange(scrollPercent, 0, 100, tiltDegree * -1, tiltDegree);
		heroGrid.style.setProperty("--scroll-tilt", `${mappedValue}`);
		let heroOpacity = mapRange(scrollPercent, 0, 10, 1, 0);
		let heroScale = mapRange(scrollPercent, 0, 10, 1, 0);
		let heroTransformY = mapRange(scrollPercent, 0, 10, 0, -100);
		let heroBlur = mapRange(scrollPercent, 0, 10, 0, 20);
		hero.style.opacity = heroOpacity;
		hero.style.filter = `blur(${heroBlur}px)`;
		hero.style.transform = `translateY(${heroTransformY}px)`;
	}

	function handleScroll() {
		if (heroGrid && isElementInViewport(heroGrid)) {
			updateScrollPos();
		}
	}

	window.addEventListener("scroll", handleScroll);

	handleScroll();
});

var open = false;

function Drop(n) {
	var i;
	if (open == false) {
		for (i = n; i < 7; i++) {
			Drp(i)
		}
		open = true
	} else if (open == true) {
		for (i = n; i < 7; i++) {
			Cls(i)
		}
		open = false
	}
}

function Drp(n) {
	var elem = document.getElementsByClassName("menuitem")[n];
	var pos = -1 * window.innerHeight - n * 100;
	var id = setInterval(frame, 7);

	function frame() {
		if (pos >= -10) {
			clearInterval(id);
			elem.style.top = 0 + 'px';
		} else {
			pos += 10;
			elem.style.top = pos + 'px';
		}
	}
}

function Cls(n) {
	var elems = document.getElementsByClassName("menuitem")[n];
	var poss = 0;
	var ids = setInterval(frames, 7);

	function frames() {
		if (poss <= -1 * window.innerHeight) {
			clearInterval(ids);
			elems.style.top = -1 * window.innerHeight + 'px';
		} else {
			poss += -7 - n * 2;
			elems.style.top = poss + 'px';
		}
	}
}