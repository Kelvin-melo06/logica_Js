/*
========= MINI TODO LISTA ==============
*/

const prompt = require('prompt-sync')(); // Aqui nós importamos um modulo do node chamado prompt-sync para nos permiter ter a entrada de dados via terminal
const fs = require('fs'); // Aqui temos outro modulo node porém esse se chama fs (file system) ele nos permite ler e escrever arquivos no sistema, vamos precisar dele para salvar o placar do jogo

const caminhoArquivo = "placar.json"; // Já aqui temos o caminh do arquivo onde vamos o salvar o placar do jogo

if (!fs.existsSync(caminhoArquivo)) { // Verificamos se o arquivo ja existe dentro do nosso modulo fs, se não existir ent vamos criar ele
  fs.writeFileSync( // metodo do js para escrever arquivos
    caminhoArquivo, // arquivo onde vamos salvar
    JSON.stringify({ vitorias: 0, derrotas: 0, empates: 0 }, null, 2) // conteudo que vai ir nesse arquivo, nesse caso é um obj que vamos converter para json usando o metodo JSON.stringify()
  );
}

let placar = JSON.parse(fs.readFileSync(caminhoArquivo)); // vamos então ler o arquivo que criamos/ja existia e converter o conteudo dele que está em string para obj usando o metodo JSON.parse()

const opcoes = ["pedra", "papel", "tesoura"]; // Aqui temos uma array com opções do jogo, essa array vai ser sorteada seu indice para simular a jogada do computador
const vitorias = ["🔥 Mandou bem!", "🏆 Vitória merecida!", "💪 Você é brabo!"]; // array que vai tmb ser sorteado o indice para mandar um frase de vitoria
const derrotas = ["💀 Quase!", "🤖 O bot mandou bem!", "😅 Tenta outra vez!"]; // // array que vai tmb ser sorteado o indice para mandar um frase de derrota

let pontosJogador = 0; // pontos do jogador, guardados em uma variavel contadora
let pontosComputador = 0; // pontos do computador, guardados em uma variavel contadora

console.log("🎮 Pedra, Papel ou Tesoura — Edição com Placar!"); // visual para interface que vai mostrar o historico do placar atual onde vamos lá no nosso obj que foi retornado do arquivo e acessamos a propriedade, vitorias, derrotas e empates
console.log("📊 Histórico atual:");
console.log(
  `Vitórias: ${placar.vitorias} | Derrotas: ${placar.derrotas} | Empates: ${placar.empates}\n`
);

while (pontosJogador < 3 && pontosComputador < 3) { // Esse while é o coração do sistema, onde tudo que está dentro dele vai ser executado até que o jogador ou o computador chegue a 3 pontos
  let jogador = prompt("Escolha (pedra, papel ou tesoura): ").toLowerCase().trim(); // aqui colocamos a escolha do jogador(pedra,papel,tesoura)

  if (!opcoes.includes(jogador)) { // Verificamos se o que o jogador digitou está dentro das opções validas
    console.log("❌ Opção inválida!\n");
    continue; // esse continue faz com que o cod volte para o inicio do while, e o jogador escolha de novo
  }

  const computador = opcoes[Math.floor(Math.random() * 3)]; // aqui nos vamos sortear uma opção da array de opções para a jogada do computador, usamos o floor e random, random sorteia um numero entre 0 e 1, multipla por 3 pois tem 3 opções e ent o floor arredonda para baixo, tendo 0 1 2, indices validos da array
  console.log(`🤖 Computador escolheu: ${computador}`);

  if (jogador === computador) { // se as escolhas forem iguais, é empate
    console.log("🟡 Empate! Rodada será repetida.\n");
    placar.empates++; // e atualizamos o placar de empates
    continue; // esse continue faz com que o cod volte para o inicio do while, e o jogador escolha de novo
  }

  if ( // se o jogador ganhar
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
  ) {
    pontosJogador++; // add 1 ponto para ele
    console.log(vitorias[Math.floor(Math.random() * vitorias.length)] + "\n"); // sorteamos uma frase de vitoria para mostrar, mesma logica que usamos para sortear a jogada do computador
  } else {
    pontosComputador++; // se o jogador nao ganhou, o computador ganhou e add 1 ponto para ele
    console.log(derrotas[Math.floor(Math.random() * derrotas.length)] + "\n"); // sorteamos uma frase de derrota para mostrar, mesma logica que usamos para sortear a jogada do computador
  }

  console.log(`📊 Placar da partida: Você ${pontosJogador} x ${pontosComputador} Computador\n`); // depois de entrar nos if e else, que cuidam da questão de atualização de placar, condição de comparação e vitoria, vamos ent mostrar o placar da partida
}

if (pontosJogador === 3) { // se o jogador chegou a 3 pontos primeiro, ele venceu o jogo
  console.log("🏆 Você venceu o jogo!");
  placar.vitorias++; // e atualizamos o placar de vitorias
} else {
  console.log("🤖 O computador venceu o jogo!");
  placar.derrotas++;
}

fs.writeFileSync(caminhoArquivo, JSON.stringify(placar, null, 2)); // depois de termos ent o obj de placar atualizadom, com vitorias,derrotas e empates, vamos ent salvar ele de volta no arquivo, convertendo o obj para json usando o metodo JSON.stringify()

console.log("\n📁 Placar atualizado salvo com sucesso!");
console.log(
  `Vitórias: ${placar.vitorias} | Derrotas: ${placar.derrotas} | Empates: ${placar.empates}`
);
