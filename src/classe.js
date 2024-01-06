const objetoPessoa = {
  name: 'Adriano',
  age: 34,
  work: 'developer',
  married: true,
  childrenNames: ['Alexandre']
}

objetoPessoa["yourCars"] = 'Honda Civic';

console.log(objetoPessoa);

class Pessoa {
  name = '';
  age = 0;
  work = '';
  married = false;

  constructor(
    name,
    age,
    work,
    married,
  ) {
    this.name = name;
    this.age = age;
    this.work = work;
    this.married = married;
  }

  print() {
    console.log(this)
  }
}


const pessoa = new Pessoa('Adriano', 34, 'Developer', true);
pessoa.print();

console.log(pessoa.name);