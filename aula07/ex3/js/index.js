// C=(F-32)/1,8.

var numero = Number(prompt("Quantos graus Fahrenheit"));


function calculaTrem(numero){
    let grauCerto = (numero - 32) / 1.8;
    alert(grauCerto);
    
}

calculaTrem(numero);