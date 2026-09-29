function somar(){
    var tn1 = window.document.querySelector('input#txtn1');
    var tn2 = window.document.querySelector('input#txtn2');
    var res = window.document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var s = n1 + n2;

    res.innerHTML = `A soma entre ${n1} e ${n2} é: ${s}`;
}

var botao = document. getElementById('botao');
botao.style.background = 'green';

var area = document.getElementById('botao');
area.addEventListener('click', clicar);
area.addEventListener('mouseenter', entrar);
area.addEventListener('mouseout', sair);

function clicar(){
    area.style.background = 'red';
}
function entrar(){
    area.style.background = 'chartreuse';
    area.style.font = 'bolder 17pt Arial'
}
function sair(){
    area.style.background = 'green';
    area.style.font = 'bolder 18pt italic'
}