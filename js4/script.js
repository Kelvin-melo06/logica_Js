const prompt = require('prompt-sync')();

let quantidade = Number(prompt("Digite a quantidade de números que deseja inserir: "));

let numeros = [];
let maiorNumero = Number.NEGATIVE_INFINITY;
let segundoMaiorNumero = Number.NEGATIVE_INFINITY;
let menorNumero = Number.POSITIVE_INFINITY;

for(let i = 0; i < quantidade; i++){
    let valor = Number(prompt(`Digite o número ${i + 1}: `));
    numeros.push(valor);

    if(valor > maiorNumero){
        segundoMaiorNumero = maiorNumero;
        maiorNumero = valor;
    } else if(valor > segundoMaiorNumeroNumero){
        segundoMaiorNumero = valor;
    }

    if(valor < menorNumero){
        menorNumero = valor;
    }
}

console.log(`O maior número é: ${maiorNumero}`);
console.log(`O segundo maior número é: ${segundoMaiorNumero}`);
console.log(`O menor número é: ${menorNumero}`);