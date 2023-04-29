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
		text: "A eletrónica é uma parte fundamental da robótica e, em nosso clube, os alunos terão a oportunidade de aprender sobre circuitos, arduino, componentes electrónicos, tensão e mais. Em seguida, poderão aplicar seus conhecimentos em projetos práticos, como na foto ao lado.",
	},

	{
		title: "Programação",
		text: "Quer saber como fazer os robôs pensarem? É através da programação que fazemos isso. O AEC Probos lhe proporcionará a oportunidade de aprender conceitos básicos da programação e aplicar o seu aprendizado em programas simples de robôs, dando inteligência à eles.",
	},

	{
		title: "Testagem",
		text: "A testagem é uma etapa fundamental no processo de desenvolvimento de qualquer projeto. É nele que verificamos se o que foi desenvolvido funcionou, e se não, corrigir. No clube AEC Probos, você desenvolverá habilidades de diagonóstico e testagem de programas, circuitos, sensores e mais.",
	},

	{
		title: "Montagem",
		text: "Com o nosso programa de aprendizagem didático e intuitivo, você aprenderá a montar robôs de maneira gradual e eficiente, começando com conceitos básicos e progredindo para tarefas mais avançadas à medida que adquire mais habilidades e confiança.",
	},

	{
		title: "Lógica",
		text: "O raciocínio lógico é fundamental para o sucesso acadêmico e profissional de qualquer pessoa, e incentivar esse desenvolvimento desde a infância é importante para atingi-lo. Sabendo disso, o AEC Probos proporciona à crianças do ensino primário a oportunidade de desenvolver seu raciocínio lógico desde cedo, de forma divertida e envolvente, além de incentivar o trabalho em equipa, colaboração e comunicação",
	},
];

flkty.on("select", () => {
	cellIndex = flkty.selectedElement.getAttribute("data-order");

	galleryTitle.innerText = descriptions[cellIndex - 1].title;
	galleryText.innerText = descriptions[cellIndex - 1].text;
});
