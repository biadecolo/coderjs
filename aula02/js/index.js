/*
var nome = "Bianca";
var sobrenome = "Decoló";
var anoNascimento = 2001;
var anoAtual = 2024;

var idade = anoAtual - anoNascimento;

var textoFinal = "O meu nome é " + nome + " " + sobrenome + ", e no final de 2024 eu terei " + idade + " anos.";

console.log(textoFinal);

document.querySelector('p').innerHTML = textoFinal

alert(textoFinal)
*/

/* 
var n1 = parseInt(prompt('Número 1'));
var n2 = parseInt(prompt('Número 2'));

var soma = n1 + n2;
var produto = n1 * n2; 

var frase = "A soma é " + soma + " e o produto é " + produto;

console.log(frase);
document.querySelector('p').innerHTML = frase;
*/

var ano = parseInt(prompt("Em que ano estamos?"));
var anoNascimento = parseInt(prompt("Em que você nasceu?"));
var nome = prompt("Digite aqui o seu nome"); 

var idadeAtual = ano - anoNascimento;
var fraseFinal = "Entendi. O seu nome é " + nome + ", você nasceu em " + anoNascimento + "e sua idade atualmente é " + idadeAtual + ", certo?"

document.querySelector('p').innerHTML = fraseFinal;
