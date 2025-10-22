const prompt = require('prompt-sync')();

let palavra = prompt("Digite uma palavra: ").toLowerCase();
let contadorDeVogais = 0;

for(let i = 0; i < palavra.length; i++){
      if("aeiou".includes(palavra[i])){
        contadorDeVogais++;
      }
}

console.log(`A palavra ${palavra} tem ${contadorDeVogais} vogais.`);