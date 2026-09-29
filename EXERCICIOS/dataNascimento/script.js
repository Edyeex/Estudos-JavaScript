function verificar() {
    var ano = new Date();
    var anoAtt = ano.getFullYear();
    var nascimento = document.getElementById('nasc');
    var anoNasc = Number(nascimento.value);
    var resultado = document.getElementById('res');
    var genero = '';
    var imagem = document.createElement('img');
    imagem.setAttribute('id', 'foto');

    if (nascimento.value.length == 0 || nascimento.value > anoAtt) {
        window.alert('ERRO: Verifique os dados e tente novamente!');
    } else {
        var sexo = document.getElementsByName('sexo');
        var idade = anoAtt - anoNasc;
        if (sexo[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                imagem.setAttribute('src', 'img/homem-bebe.jpg');
            }else if(idade < 21){
                imagem.setAttribute('src', 'img/homem-jovem.jpg');
            }else if(idade < 50){
                imagem.setAttribute('src', 'img/homem-adulto.jpg');
            }else{
                imagem.setAttribute('src', 'img/homem-idoso.jpg');
            }
        }else if(sexo[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                imagem.setAttribute('src', 'img/mulher-bebe.jpg');
            }else if(idade < 21){
                imagem.setAttribute('src', 'img/mulher-jovem.jpg');
            }else if(idade < 50){
                imagem.setAttribute('src', 'img/mulher-adulta.jpg');
            }else{
                imagem.setAttribute('src', 'img/mulher-idosa.jpg');
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectado ${genero} com ${idade} ano(s) de idade.`;
        resultado.appendChild(imagem)
    }

}


