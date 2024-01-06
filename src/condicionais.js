function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomValue = getRandomNumber(0, 10);
console.log(randomValue);

if (randomValue > 5) {
  console.log('O valor é maior que 5');
} else if (randomValue < 5) {
  console.log('O valor é menor que 5');
}


const trafficLight = randomValue > 5 ? 'O valor é maior que 5' : 'O valor é menor que 5';
console.log(trafficLight);
