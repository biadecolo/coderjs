// if numero % 1 == 0 && numero % numero == 0 = primo 
// else nao eh primo 

function ehPrimo(numero) {
    // Números menores ou iguais a 1 não são primos
    if (numero <= 1) {
      return false;
    }
  
    // Começamos a verificar a divisibilidade a partir de 2
    for (let i = 2; i * i <= numero; i++) {
      if (numero % i === 0) {
        return false; // Se o resto da divisão for 0, não é primo
      }
    }
  
    // Se nenhum divisor foi encontrado, o número é primo
    return true;
  }
  
  // Pedimos ao usuário para digitar um número
  const numero = Number(prompt("Digite um número:"));
  
  // Chamamos a função e mostramos o resultado
  if (ehPrimo(numero)) {
    alert(numero + " é um número primo.");
  } else {
    alert(numero + " não é um número primo.");
  }