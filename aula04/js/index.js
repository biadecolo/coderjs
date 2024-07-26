function isEven(numero) {
    var numero = parseInt(prompt("Digite um número:"));
    return numero % 2 === 0;
}

// Exemplo de uso

if (isEven(numero)) {
    alert("O número " + numero + " é par.");
}

else {
    alert("O número " + numero + " é ímpar.");
}