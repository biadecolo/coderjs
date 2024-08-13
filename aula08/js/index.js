/*
function forma(material, formato, pesoQueCabe){
    this.material = material;
    this.formato = formato;
    this.pesoQueCabe = pesoQueCabe;
}

const forma1 = new forma("metal", "redondo", "300g");
console.log(forma1);

console.log(forma1.material.toLowerCase());
console.log(forma1.formato.toBiggerCase());
*/


/*
function pessoa(nome, idade, rua){
    this.nome = nome;
    this.idade = idade;
    this.rua = rua;
    this.falar = function(){
        console.log("Olá, sou " + this.nome)
    }
}

const pessoa1 = new pessoa("Homer", 39, "Av Sempre Verde 742");
const pessoa2 = new pessoa("Marge", 39, "Av Sempre Verde 742");

pessoa1.falar();
pessoa2.falar();
*/

class Carro {
    constructor(marca, ano, cor) {
        this.marca = marca;
        this.ano = ano;
        this.cor = cor;
    }
    apresentar() {
        var idade = 2023 - this.ano;
        console.log("O " + this.marca + " é " + this.cor + " e tem " + idade + " anos")
    }
}

const meuCarro = new Carro("Ford", 2014, "vermelho");
meuCarro.apresentar();
