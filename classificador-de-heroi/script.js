const nome = document.querySelector('#nome');
const xp = document.querySelector('#xp');
const level = [
	'Ferro',
	'Bronze',
	'Prata',
	'Ouro',
	'Platina',
	'Ascendente',
	'Imortal',
	'Radiante',
];

const form = document.querySelector('form');
const levelHero = document.querySelector('.nivel-heroi')


form.addEventListener('submit', function (event) {
	event.preventDefault();
	
	const inputNome = nome.value;
	const inputXp = xp.value;

	if (inputXp <= 1000) {
		var titulo = document.createElement('h3')
		levelHero.appendChild(titulo)
		var textoTitulo = document.createTextNode(`O Herói ${inputNome} está no nível de ${level[0]}`)
		titulo.appendChild(textoTitulo)

	} else if (inputXp <= 2000) {
		var titulo = document.createElement('h3')
		levelHero.appendChild(titulo)
		var textoTitulo = document.createTextNode(`O Herói ${inputNome} está no nível de ${level[1]}`)
		titulo.appendChild(textoTitulo)

	} else if (inputXp <= 5000) {
		var titulo = document.createElement('h3')
		levelHero.appendChild(titulo)
		var textoTitulo = document.createTextNode(`O Herói ${inputNome} está no nível de ${level[2]}`)
		titulo.appendChild(textoTitulo)

	} else if (inputXp <= 7000) {
		var titulo = document.createElement('h3')
		levelHero.appendChild(titulo)
		var textoTitulo = document.createTextNode(`O Herói ${inputNome} está no nível de ${level[3]}`)
		titulo.appendChild(textoTitulo)

	} else if (inputXp <= 8000) {
		var titulo = document.createElement('h3')
		levelHero.appendChild(titulo)
		var textoTitulo = document.createTextNode(`O Herói ${inputNome} está no nível de ${level[4]}`)
		titulo.appendChild(textoTitulo)

	} else if (inputXp <= 9000) {
		var titulo = document.createElement('h3')
		levelHero.appendChild(titulo)
		var textoTitulo = document.createTextNode(`O Herói ${inputNome} está no nível de ${level[5]}`)
		titulo.appendChild(textoTitulo)

	} else if (inputXp <= 10000) {
		var titulo = document.createElement('h3')
		levelHero.appendChild(titulo)
		var textoTitulo = document.createTextNode(`O Herói ${inputNome} está no nível de ${level[6]}`)
		titulo.appendChild(textoTitulo)

	} else if (inputXp > 10000) {
		var titulo = document.createElement('h3')
		levelHero.appendChild(titulo)
		var textoTitulo = document.createTextNode(`O Herói ${inputNome} está no nível de ${level[7]}`)
		titulo.appendChild(textoTitulo)
	}
});
