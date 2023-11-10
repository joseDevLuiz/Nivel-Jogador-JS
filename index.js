const nomeHeroi = "Demolidor";
xp = 9000;
let nivelHeroi = "Iniciante";

console.log("----------------------------------------------------")
console.log("Seja muito bem-vindo ao centro de premeações")
console.log("Sei que não foi nada fácil chegar aqui mas")
console.log("Cada desafio te rendeu pontos de experiências ou XPs")
console.log("E esses pontos ou XP poderão ser usados para elevar")
console.log("Seu nível e melhorar suas habilidades")
console.log("----------------------------------------------------")
console.log("");

if(xp <= 1000){
    nivelHeroi = "Ferro"
}else if(xp >= 1001 & xp <= 2000){
    nivelHeroi = "Bronze"
}else if(xp >= 2001 & xp <= 5000){
    nivelHeroi = "Prata"
}else if(xp >= 5001 & xp <= 7000){
    nivelHeroi = "Ouro"
}else if(xp >= 7001 & xp <= 8000){
    nivelHeroi = "Platina"
}else if(xp >= 8001 & xp <= 9000){
    nivelHeroi = "Ascendente"
}else if(xp >= 9001 & xp <= 10000){
    nivelHeroi = "Imortal"
}else if(xp >= 10001){
    nivelHeroi = "Radiante"
};

console.log(nomeHeroi, "com sua pontuação de", xp, "você agora será nível", nivelHeroi);
console.log("Parabéns pela sua conquista, esse é só o inícil de sua jornada");
console.log("Mais uma vez parabéns e boa sorte daqui para frente");