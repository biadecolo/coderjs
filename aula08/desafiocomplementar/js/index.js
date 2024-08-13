class Alimento {
    constructor(nome, cor, peso, tipo) {
        this.nome = nome;
        this.cor = cor;
        this.peso = peso;
        this.tipo = tipo;
    }

    descrever() {
        document.getElementById('meuParagrafo').innerHTML = (`O alimento é um(a) ${this.nome}, de cor ${this.cor}, pesa ${this.peso} gramas e é um(a) ${this.tipo}.`);
    }
}

// Criando dois objetos a partir da classe Alimento
const fruta = new Alimento("Maçã", "vermelha", 150, "fruta");
const verdura = new Alimento("Alface", "verde", 200, "verdura");

// Exibindo as descrições dos alimentos criados
fruta.descrever();
verdura.descrever();
