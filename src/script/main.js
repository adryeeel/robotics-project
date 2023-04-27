const $header = document.querySelector(".header");

document.addEventListener("scroll", (eventHandler) => {
	window.scrollY > 0
		? $header.classList.add("background")
		: $header.classList.remove("background");
});

const flkty = new Flickity(".gallery-carousel", {
	cellAlign: "left",
	contain: true,
	wrapAround: true,
});
