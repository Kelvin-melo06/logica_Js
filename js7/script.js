const prompt = require('prompt-sync')();

let quantidadeDeNumeros = Number(prompt('Quantos números você quer inserir no array? '));
let arrayDeNumeros = [];
let temp;

// Entrada dos números
for (let i = 0; i < quantidadeDeNumeros; i++) {
  let numero = Number(prompt(`Digite o ${i + 1}º número: `));
  arrayDeNumeros.push(numero);
}

// Bubble sort
for (let i = 0; i < arrayDeNumeros.length; i++) {
  for (let j = 0; j < arrayDeNumeros.length - 1 - i; j++) { 
    // compara o elemento atual com o próximo
    if (arrayDeNumeros[j] > arrayDeNumeros[j + 1]) {
      // troca os valores
      temp = arrayDeNumeros[j];
      arrayDeNumeros[j] = arrayDeNumeros[j + 1];
      arrayDeNumeros[j + 1] = temp;
    }
  }
}

// Saída dos números ordenados
console.log("\nArray ordenado:");
for (let i = 0; i < arrayDeNumeros.length; i++) {
  console.log(arrayDeNumeros[i]);
}
