function somar(){
    var n1 = document.querySelector('input#n1');
    var n2 = document.querySelector('input#n2');
    var res = document.getElementById('res');
    var num1 = Number(n1.value);
    var num2 = Number(n2.value);

    var soma = num1 + num2;

    res.innerHTML = `A soma entre ${num1} e ${num2} é: ${soma}`;
}

var botao = document.getElementById('btn');
botao.style.background = 'green';

var inter = document.getElementById('btn');
inter.addEventListener('click', clicar);
inter.addEventListener('mouseenter', entrar);
inter.addEventListener('mouseout', sair);

function clicar(){
    inter.style.background = 'red';
}

function entrar(){
    inter.style.background = 'chartreuse';
    inter.style.font = 'bolder 14pt Arial'
}

function sair(){
    inter.style.background = 'green';
    inter.style.font = 'bolder 17px italic'
}