const $header = document.querySelector(".header");

document.addEventListener("scroll", (eventHandler) => {
	window.scrollY > 0
		? $header.classList.add("background")
		: $header.classList.remove("background");
});

const flkty = new Flickity(".gallery-carousel", {
	cellAlign: "left",
	wrapAround: true,
	adaptiveHeight: true,
	imagesLoaded: true,
});

const galleryTitle = document.querySelector(".gallery__description__title");
const galleryText = document.querySelector(".gallery__description__text");

const descriptions = [
	{
		title: "Eletrónica",
		text: "A eletrónica é uma parte fundamental da robótica e, em nosso clube, os alunos terão a oportunidade de aprender sobre circuitos, arduino, componentes electrónicos, tensão e mais. Em seguida, poderão aplicar seus conhecimentos em projetos práticos, utilizando o Arduino.",
	},

	{
		title: "Programação",
		text: "Quer saber como fazer os robôs pensarem? É através da programação que fazemos isso. O AEC Probos lhe proporcionará a oportunidade de aprender conceitos básicos da programação e aplicar o seu aprendizado em programas simples de robôs, dando inteligência à eles.",
	},

	{
		title: "Testagem",
		text: "A testagem é uma etapa fundamental no processo de desenvolvimento de qualquer projeto. É quando verificamos se o que foi desenvolvido funcionou, e se não, como corrigir. No clube AEC Probos vai ser possível desenvolver habilidades de diagonóstico e testagem de programas, circuitos, sensores e mais.",
	},

	{
		title: "Montagem",
		text: "Com as atividades propostas no clube, vai ser possível aprender a montar robôs de maneira gradual e eficiente, começando com conceitos básicos e progredindo para tarefas mais avançadas à medida que adquire mais habilidades e confiança.",
	},

	{
		title: "Lógica",
		text: "O raciocínio lógico é fundamental para o sucesso académico e profissional de qualquer pessoa em qualquer área. Sabendo disso, o AEC Probos proporciona a oportunidade de desenvolver o seu raciocínio lógico desde cedo, de forma divertida e envolvente, além de incentivar o trabalho em equipa, a colaboração e a comunicação.",
	},
];

flkty.on("select", () => {
	cellIndex = flkty.selectedElement.getAttribute("data-order");

	galleryTitle.innerText = descriptions[cellIndex - 1].title;
	galleryText.innerText = descriptions[cellIndex - 1].text;
});

function showResponsiveNavigation(button, target) {
	button.addEventListener("click", () => {
		button.classList.toggle("open");
		target.classList.toggle("visible");

		document.body.classList.toggle("block-scroll");
		$header.classList.toggle("black");
	});

	target.addEventListener("click", () => {
		mobileNavigation.classList.toggle("visible");
		document.body.classList.toggle("block-scroll");
		$header.classList.toggle("black");
	});
}

const hamburguerButton = document.querySelector(".header__hamburger");
const mobileNavigation = document.querySelector(".header__responsive");

showResponsiveNavigation(hamburguerButton, mobileNavigation);