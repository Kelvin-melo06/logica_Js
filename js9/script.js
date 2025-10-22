const prompt = require('prompt-sync')();

console.log("===== Verificador de Senha ====");

const senha = prompt("Digite sua senha: ");

let tem8Caracteres = senha.length >= 8;
let temLetraMaiuscula = /[A-Z]/.test(senha);
let temNumero = /[0-9]/.test(senha);
let temCaracteresEspeciais = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

if(tem8Caracteres && temLetraMaiuscula && temNumero && temCaracteresEspeciais){
    console.log("✅ Senha forte!");
}else{
    console.log("❌ Senha fraca! A senha deve conter: ");
    if (!tem8caracteres) console.log("- Pelo menos 8 caracteres");
    if (!temMaiuscula) console.log("- Pelo menos uma letra maiúscula");
    if (!temNumero) console.log("- Pelo menos um número");
    if (!temEspecial) console.log("- Pelo menos um caractere especial");
}
