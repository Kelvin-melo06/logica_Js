const prompt = require('prompt-sync')();
const fs = require('fs');

let caminhoArquivo = 'placarDados.json';

if(!fs.existsSync(caminhoArquivo)){
    fs.writeFileSync(
        caminhoArquivo,
        JSON.stringify({vitorias: 0, derrotas: 0, empates: 0}, null, 2)
    );
}

let placar = JSON.parse(fs.readFileSync(caminhoArquivo));

console.log("🎲 Bem-vindo ao mini jogo de Dado!");
console.log(`Histórico de vitórias: ${placar.vitorias}`);
console.log(`Histórico de derrotas: ${placar.derrotas}`);
console.log(`Histórico de empates: ${placar.empates}`);
prompt("Pressione Enter para rolar o dado...");

let jogador1 = prompt('Nome do jogador 1: ');
let jogador2 = prompt('Nome do jogador 2: ');

let rodadas = Number(prompt('Quantas rodadas vocês querem jogar? '));

let pontosJogador1 = 0;
let pontosJogador2 = 0;
let pontosEmpates = 0;

for(let i = 1; i <= rodadas; i++){
    console.log(`\n--- Rodada ${i} ---`);

    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    console.log(`${jogador1} rolou: ${dado1}`);
    console.log(`${jogador2} rolou: ${dado2}`);

    if(dado1 > dado2){
        console.log(`🏆 ${jogador1} vence!`);
        pontosJogador1++;
    } else if(dado2 > dado1){
        console.log(`🏆 ${jogador2} vence!`);
        pontosJogador2++;
    } else{
        console.log("🤝 Empate!");
        pontosEmpates++;
    }
}

console.log("\n🏁 RESULTADO FINAL 🏁");
console.log(`${jogador1} - Pontos: ${pontosJogador1}`);
console.log(`${jogador2} - Pontos: ${pontosJogador2}`);
console.log(`Empates: ${pontosEmpates}`);

if(pontosJogador1 > pontosJogador2){
    console.log(`🎉 ${jogador1} é o grande vencedor!`);
    placar.vitorias++;
} else if(pontosJogador2 > pontosJogador1){
    console.log(`🎉 ${jogador2} é o grande vencedor!`);
    placar.derrotas++;
} else{
    console.log("🤝 O jogo terminou em empate!");
    placar.empates++;
}

fs.writeFileSync(caminhoArquivo, JSON.stringify(placar, null, 2));

console.log("\nObrigado por jogar! Até a próxima!");
