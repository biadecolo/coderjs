function isEven(numero) {
    return numero % 2 === 0;
}

function handleButtonClick() {
    var numeroDigitado = parseInt(prompt("Digite um número:"));

    if (isEven(numeroDigitado)) {
        document.getElementById('meuParagrafo').innerHTML = "O número " + numeroDigitado + " é par. <br> <i style='color: lightgray'>Number " + numeroDigitado + " is even.</i>";
    } else {
        document.getElementById('meuParagrafo').innerHTML = "O número " + numeroDigitado + " é ímpar. <br> <i style='color: lightgray'>Number " + numeroDigitado + " is uneven.</i>";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('meuBotao').addEventListener('click', handleButtonClick);
});