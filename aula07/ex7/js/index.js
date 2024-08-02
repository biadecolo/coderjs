var n1 = Number(prompt("Digite seu primeiro número aqui"));
var n2 = Number(prompt("Digite seu segundo número aqui"));

function veSeDivide(){
    if( n1 % n2 === 0){
        alert("É divisível");
    }
    else{
        alert("Não é divisível");
    }
}

veSeDivide();