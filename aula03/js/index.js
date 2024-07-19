/* exercicio1

var n = parseInt(prompt("Digite um número")); 

if (n == 1){
    alert("O seu número é 1");
}
else if (n == 2){
    alert("O seu número é 2");
}
else if (n == 3){
    alert("O seu número é 3");
}
else if (n == 4){
    alert("O seu número é 4");
}
else if (n == 5){
    alert("O seu número é 5");
}
else{
    alert("O seu número não está na nossa base de dados");
}

*/ 



function obterRespostas() {
    var numero = parseInt(prompt("Digite um número de 1 a 100"));

    if (numero <= 10){
        fraseFinal = "💡 O seu número é " + numero + ", o que significa que ele é menor ou igual a 10.";
    }
    else if (numero >= 11 && numero <= 20){
        fraseFinal = "💡 O seu número é " + numero + ", o que significa que ele está entre 11 e 20.";
    }
    else if (numero >= 21 && numero <= 30){
        fraseFinal = "💡 O seu número é " + numero + ", o que significa que ele está entre 21 e 30.";
    }
    else if (numero >= 31 && numero <= 40){
        fraseFinal = "💡 O seu número é " + numero + ", o que significa que ele está entre 31 e 40.";
    }
    else if (numero >= 41 && numero <= 50){
        fraseFinal = "💡 O seu número é " + numero + ", o que significa que ele está entre 41 e 50.";
    }
    else if (numero >= 51 && numero <= 60){
        fraseFinal = "💡 O seu número é " + numero + ", o que significa que ele está entre 51 e 60.";
    }
    else if (numero >= 61 && numero <= 70){
        fraseFinal = "💡 O seu número é " + numero + ", o que significa que ele está entre 61 e 70.";
    }
    else if (numero >= 71 && numero <= 80){
        fraseFinal = "💡 O seu número é " + numero + ", o que significa que ele está entre 71 e 80.";
    }
    else if (numero >= 81 && numero <= 90){
        fraseFinal = "💡 O seu número é " + numero + ", o que significa que ele está entre 81 e 90.";
    }
    else if (numero >= 91 && numero <= 100){
        fraseFinal = "💡 O seu número é " + numero + ", o que significa que ele está entre 91 e 100.";
    }
    else if (numero === null || numero === "" || isNaN(numero)){
        fraseFinal = "⚠️ Parece que você não inseriu um número.";
    }
    else{
        fraseFinal = "💡 O seu número é " + numero + " e não temos este número cadastrado na nossa base de dados.";
    }

    document.getElementById('meuParagrafo').innerHTML = fraseFinal;
}

// Chama a função automaticamente quando a página carrega
window.onload = obterRespostas;