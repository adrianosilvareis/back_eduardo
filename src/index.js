const list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

console.log(list.length);
console.log(list[5]);

const letter = list.find((letter) => letter === 'C');
console.log(letter);

const fluxoDeCaixa = [5 , -2, 3, 10, 0, 1, 2, -5, 7];

const entradas = fluxoDeCaixa.filter((valor) => valor > 0);
console.log(entradas);

const saldoDeEntradas = entradas.reduce((acc, cur) => acc + cur, 0); // 28
console.log(saldoDeEntradas);

const saidas = fluxoDeCaixa.filter((valor) => valor < 0);
console.log(saidas);

const saldoDeSaidas = saidas.reduce((acc, cur) => acc + cur, 0); // -7
console.log(saldoDeSaidas);

const saldo = saldoDeEntradas + saldoDeSaidas;
console.log(saldo);


// for (let index = 0; index < 100; index++) {

// }

const nomeDaMinhaVariavelConstante = 'valor da minha variavel';
let nomeDaMinhaVariavelMutavel = 'valor da minha variavel mutavel';


nomeDaMinhaVariavelMutavel = 'novo valor da minha variavel';