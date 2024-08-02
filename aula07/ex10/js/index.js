const diaAtual = new Date().getDate();
const mesAtual = new Date().getMonth() + 1; // Os meses em JavaScript começam em 0, então adicionamos 1
const anoAtual = new Date().getFullYear();

const diaNascimento = Number(prompt("Dia do seu nascimento"));
const mesNascimento = Number(prompt("Mês do seu nascimento (1-12)"));;
const anoNascimento = Number(prompt("Ano do seu nascimento"));;

let idadeAtual = anoAtual - anoNascimento;

if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idadeAtual--;
}

alert(`Sua idade atual é ${idadeAtual} anos.`);
