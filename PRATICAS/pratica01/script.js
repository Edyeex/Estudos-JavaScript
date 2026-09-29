window.alert("Olá!!");

let numero = Number(window.prompt("informe um valor numérico: "));

window.alert(`O valor digitado foi ${numero.toLocaleString('pt-BR', {
    style: 'currency', 
    currency: 'BRL'
})}`);

document.querySelector("#resultado").innerHTML = 
    numero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });