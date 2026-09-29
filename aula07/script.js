function calcular() {
    var texvel = document.querySelector('input#vel');
    var texlim = document.querySelector('input#lim');
    var res = document.querySelector('div#res');

    var vel = Number(texvel.value);
    var lim = Number(texlim.value);
    res.innerHTML = `Você está a <strong>${vel}</strong> Km/h. <br><br>O limite máximo de velocidade é de <strong>${lim}</strong> Km/h`;

    if (vel > lim) {
        res.innerHTML += `<p>Você está acima do limite de velocidade, você foi <strong>multado</strong>!!</p>`;
    } else {
        res.innerHTML += `<p>Você está abaixo do limite de velocidade.</p>`;
        res.innerHTML += `<p>Dirija em segurança!</p>`;
    }
}

