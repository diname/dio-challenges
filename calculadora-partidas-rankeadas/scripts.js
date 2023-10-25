const matchs = calculateMatchs(130, 5);
const level = [
	'Ferro',
	'Bronze',
	'Prata',
	'Ouro',
	'Diamante',
	'Lendário',
	'Imortal',
];

if (matchs <= 10){
    console.log(`O Herói tem de saldo de ${matchs} está no nível de ${level[0]}`);
}
else if (matchs <=20) {
    console.log(`O Herói tem de saldo de ${matchs} está no nível de ${level[1]}`);
}
else if (matchs <= 50) {
    console.log(`O Herói tem de saldo de ${matchs} está no nível de ${level[2]}`);
}
else if (matchs <=80) {
    console.log(`O Herói tem de saldo de ${matchs} está no nível de ${level[3]}`);
}
else if (matchs <=90) {
    console.log(`O Herói tem de saldo de ${matchs} está no nível de ${level[4]}`);
}
else if (matchs <=100) {
    console.log(`O Herói tem de saldo de ${matchs} está no nível de ${level[5]}`);
}
else if (matchs >=101) {
    console.log(`O Herói tem de saldo de ${matchs} está no nível de ${level[6]}`);
}


function calculateMatchs(victory, loses) {
	let result = victory - loses;
	return result;
}
