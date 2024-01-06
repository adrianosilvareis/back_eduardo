class Empresa {
  nomeFantasia = 'Loja do zezin';
  cnpj = '1234567891234';
  funcao = 'loja';
  funcionarios = [];

  constructor(nomeFantasia, cnpj, funcao, funcionarios) {
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
    this.funcao = funcao;
    this.funcionarios = funcionarios;
  }

  print() {
    console.table(this)
  }
}

class Funcionarios {
  nome = null;
  idade = null;
  funcao = null;
  salario = null;

  constructor(
    nome,
    idade,
    funcao,
    salario,
  ) {
    this.nome = nome;
    this.idade = idade;
    this.funcao = funcao;
    this.salario = salario;
  }

  print() {
    console.table(this)
  }
}

const funcionario1 = new Funcionarios('Eduardo', 15, 'desenvolvedor', 10000);
const funcionario2 = new Funcionarios('Alexandre', 15, 'desenvolvedor', 5000);
const funcionario3 = new Funcionarios('Zezin', 15, 'desenvolvedor', 8000);

const empresa = new Empresa('Adriano ME', '123.456.789-0001/05', 'desenvolvimento de sistemas', [funcionario1, funcionario2, funcionario3]);

empresa.funcionarios.at(0).print();