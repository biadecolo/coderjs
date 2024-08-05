/*var numero = Number(prompt("Digite um número (menor ou igual a 10):"));
var i = 1;

if (numero <= 10) {
    while (i <= numero) {
        console.log(i); // Imprima o valor de i (números de 1 até o número inserido)
        i++;
    }
} else {
    document.getElementById('meuParagrafo').innerHTML = ("Por favor, insira um número menor ou igual a 10.");
}
*/

function calcularFatorial(numero) { //já recebe o número na função
    if (numero < 0) { //trata o número para o caso de ser -0
        return "O fatorial não está definido para números negativos.";
    } 
    
    else if (numero === 0 || numero === 1) {
        return 1;
    } 
    
    else {
        let fatorial = 1;
        let i = 1;

        while (i <= numero) {
            fatorial *= i;
            i++;
        }

        return fatorial;
    }
}

const numeroInserido = parseInt(prompt("Digite um número para calcular o fatorial:"));
const resultado = calcularFatorial(numeroInserido);

document.getElementById('meuParagrafo').innerHTML = (`O fatorial de ${numeroInserido} é ${resultado}.`);
