const prompt = require('prompt-sync')();

let quantidade = Number(prompt("Digite a quantidade de números que deseja inserir: "));
let numeros = [];
let soma = 0;

for(let i = 0; i < quantidade; i++) {
    let valor = Number(prompt(`Digite o número ${i + 1}: `));
    numeros.push(valor);

    if(numeros[i] % 2 === 0) {
        soma += numeros[i];
    }
}

console.log(`A soma dos números pares é: ${soma}`);