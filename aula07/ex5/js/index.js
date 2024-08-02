function calcularSomatorio(numero) {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
      soma += i;
    }
    return soma;
  }
  
  // Pedir ao usuário um número
  const numero = Number(prompt("Digite um número:"));
  
  // Chamar a função e mostrar o resultado
  const resultado = calcularSomatorio(numero);
  alert("O somatório dos números de 1 até " + numero + " é: " + resultado);
  