var mes = prompt("Digite um mês").toLowerCase();

function qualEstacao(mes){

    if (mes === "janeiro" || mes === "fevereiro" || mes === "março"){
        alert("Verão");
    }
    else if (mes === "abril" || mes === "maio" || mes === "junho"){
        alert("Outono");
    }
    else if (mes === "julho" || mes === "agosto" || mes === "setembro"){
        alert("Inverno");
    }
    else if (mes === "outubro" || mes === "novembro" || mes === "dezembro"){
        alert("Primavera");
    }
    else{
        alert("Mês inválido");
        location.reload();
    }
    
}

qualEstacao(mes);