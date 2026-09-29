var velocidade = 82;
var limite = 80;

console.log(`Você está a ${velocidade}Km/h`);
console.log(`Velocidade máxima, ${limite}Km/h`);
if(velocidade > limite){
    console.log(`Você está acima do limite de velocidade!!`);
}else{
    console.log(`Você está abaixo do limite de velocidade`);
}