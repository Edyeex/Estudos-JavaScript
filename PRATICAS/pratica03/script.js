function nacionalidade(){
    var nacionalidade = document.querySelector('input#nac');
    var pais = document.querySelector('input#pais');
    var resultado = document.querySelector('div#res');

    var nac = nacionalidade.value;
    var ps = pais.value;

    resultado.innerHTML = `Você é ${nac} e está morando no pais ${ps}.`;

    if(ps.toUpperCase() != 'BR'){
        resultado.innerHTML += `<br>Você é estrangeiro!`;
    }else{
        resultado.innerHTML += `<br>Você mora no seu pais de origem!`
    }
}