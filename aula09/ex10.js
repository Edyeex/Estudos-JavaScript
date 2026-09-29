var novaHora = new Date();
var hora = novaHora.getHours();

console.log(`Agora sao ${hora} horas.`);

if(hora < 12){
    console.log(`Bom dia!!`);
}else if(hora <= 18){
    console.log(`Boa tarde!!`);
}else{
    console.log(`Boa noite!!`);
}