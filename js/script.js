const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 10) + 1;

let tentativa;
let tentativas = 0;

while(tentativa !== numeroSecreto) {
    console.log('------------ JOGO DA ADIVINHAÇÃO ------------');
    tentativa = Number(prompt('Adivinhe o número secreto (entre 1 e 10): '));
    tentativas++;

    if(tentativa < numeroSecreto) {
        console.log('🔼 O número secreto é MAIOR!');
    } else if(tentativa > numeroSecreto) {
        console.log('🔽 O número secreto é MENOR!');
    } else {
        console.log(`🎉 Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
    }

    if(tentativas >= 5 && tentativa !== numeroSecreto) {
        console.log(`😞 Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`);
        console.log('------------ GAME OVER ------------');
        break;
    }
}