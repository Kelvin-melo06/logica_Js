const prompt = require('prompt-sync')(); // Importa o módulo prompt-sync para entrada de dados

let tarefas = []; // Criação de array onde serão armazenadas nossas tarefas
let menu; // Varivael que vai guardar a opção de menu escolhida pelo usuário

do { // loop do..while pois precisamos exibir o menu ao menos uma vez, independente da condição do while
    console.log("\n=== MENU ==="); // Aqui fizemos algo visual, apenas para o usuario saber do que se trata cada número
    console.log("1 - Adicionar tarefa");
    console.log("2 - Remover tarefa");
    console.log("3 - Listar tarefas");
    console.log("4 - Sair");

    menu = prompt("Escolha uma opção (1-4): "); // Aqui é onde o usuário depois de ver o menu, escolhe uma opção, para então podermos agir conforme a escolha dele

    switch (menu) { // Fizemos um switch case para tratar cada opção do menu, inves de varios ifs
        case '1': { // Escolheu 1 ent quer dizer que ele quer digitar uma tarefa e ent adiciona-la no array TAREFAS
            let novaTarefa = prompt("Digite a nova tarefa: "); // entrada de dados da tarefa
            if (novaTarefa !== "") { // verificamos se o usuario digitou algo
                tarefas.push(novaTarefa); // Add na array a tarefa digitada
                console.log(`✅ Tarefa "${novaTarefa}" adicionada!`); // e mostra uma mensagem de sucesso
            } else {
                console.log("⚠️ Tarefa vazia não pode ser adicionada!"); // se o usuario nao digitou nada, mostramos uma mensagem de erro
            }
            break; // break para sair do case
        }

        case '2': { // Escolheu a opção 2, ent quer remover uma tarefa
            if (tarefas.length === 0) { // primeiro tem que ver se tem alguma tarefa cadastrada
                console.log("⚠️ Nenhuma tarefa para remover!"); // se nao tiver, mostramos uma mensagem de erro
            } else { // se tiver tarefas cadastradas ent esse else é executado
                console.log("\n📋 Tarefas atuais:"); // visual apenas 
                tarefas.forEach((tarefa, index) => { // percorremos a array indo em cada tarefa e mostrando seu indice e o nome da tarefa, para o usuario saber qual indice ele deve digitar para remover a tarefa desejada
                    console.log(`${index} - ${tarefa}`);
                });

                let indiceRemover = Number(prompt("Digite o índice da tarefa a ser removida: ")); // pedimos ent o indice da tarefa que o usuario quer remover
                if (!isNaN(indiceRemover) && indiceRemover >= 0 && indiceRemover < tarefas.length) { // verificamos se o indice é um numero valido e se ele esta entre 0 e o tamanho da array -1
                    let removida = tarefas.splice(indiceRemover, 1); // usamos o metodo splice usado para add, remover, substituir elementos em arrays
                    console.log(`✅ Tarefa "${removida}" removida!`); // mensagem de sucesso
                } else {
                    console.log("⚠️ Índice inválido!"); // caso o indice digitado nao seja um numero ou esteja fora do intervalo valido, mostramos uma mensagem de erro
                }
            }
            break; // break para sair do case
        }

        case '3': { // caso o usuario escolha a opção 3, ele quer ver a lista de tarefas cadastradas
            if (tarefas.length === 0) { // vemos se tem alguma tarefa cadastrada
                console.log("⚠️ Nenhuma tarefa cadastrada!"); // se nao tiver, mostramos uma mensagem de erro
            } else { // caso tenha tarefas cadastradas, mostramos a lista
                console.log("\n📋 Tarefas atuais:");
                tarefas.forEach((tarefa, index) => { // percorremos o array de tarefas e ent mostramos o indice e o nome da tarefa
                    console.log(`${index} - ${tarefa}`);
                });
            }
            break; // break para sair do case
        }

        case '4': // caso o usuario escolha a opção 4, ele quer sair do gerenciador de tarefas
            console.log("👋 Saindo do gerenciador de tarefas. Até mais!");
            break;

        default: // caso o usuario digite uma opção inválida, mostramos uma mensagem de erro
            console.log("⚠️ Opção inválida! Tente novamente.");
    }

} while (menu !== '4'); // e isso tudo vai continuar acontecendo enquanto o usuario nao escolher a opção 4 para sair do gerenciador de tarefas
