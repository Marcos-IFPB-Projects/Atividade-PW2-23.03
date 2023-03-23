// Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee : {code: number, name: string} = {code:0, name:''};

employee.code = 10;

employee.name = "John";


// Como podemos melhorar o esse código usando TS?

type Pessoa = {nome:string, idade:number, profissao:string};


let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: "atriz"
  };
  
  let pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: "padeiro"
  };
  
  let pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: "atriz"
  };
  
  let pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: "padeiro"
  };
  