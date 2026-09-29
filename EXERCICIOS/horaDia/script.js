function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var section = document.querySelector('section');
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');

    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        msg.innerHTML +='<br> Bom dia!';
        img.src = 'img/manha.jpg';
        header.style.color = '#ffffff';
        document.body.style.background = '#FFA500';
        msg.style.color = '#fa7a03'
        msg.style.textShadow = '6px 6px 4px #FF0000';
        section.style.background = '#F0E68C'
        section.style.boxShadow = '6px 6px 20px 12px #FF8C00';
        footer.style.color = '#ffffff';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += '<br> Boa Tarde!'
        img.src = 'img/tarde.jpg';
        header.style.color = '#ffffff';
        document.body.style.background = '#4169E1';
        msg.style.color = '#fffefe'
        msg.style.textShadow = '6px 6px 4px #0000FF';
        section.style.background = '#6495ED'
        section.style.boxShadow = '6px 6px 20px 12px #0000FF';
        footer.style.color = '#ffffff';
    } else if (hora > 18 && hora < 23){
        msg.innerHTML += '<br> Boa noite!'
        img.src = 'img/noite.jpg';
        footer.style.color = '#ffffff';
        footer.style.te
        header.style.color = '#ffffff';
        document.body.style.background = '#1C1C1C';
        msg.style.color = '#000000'
        msg.style.textShadow = '6px 6px 4px #000000';
        section.style.background = '#b4b4b4'
        section.style.boxShadow = '6px 6px 20px 12px #000000';
    }else{
        msg.innerHTML += 'Horario não reconhecido'
    }
}


