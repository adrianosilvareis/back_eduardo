// função que some dois números e retorne o resultado multiplicado por cinco. 
// Caso o resultado seja menor que 50, retorne "Valor muito baixo" ,
// caso contrário, retorne "Valor alto o suficiente" .


function Valor (max, min){
    return (max + min) * 5
}

const soma = Valor(9, 0)
function validateValue(soma) {
  if (soma < 50) {
    console.log(soma, 'Valor muito baixo');
  } else if ( soma > 50){
    console.log(soma, 'Valor alto o suficiente');
  }
}

validateValue(Valor(9, 5));
validateValue(Valor(4, 1));
validateValue(Valor(6, 7));