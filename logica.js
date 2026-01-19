

//let cidade = prompt("Qual é a sua cidade? ");
//console.log("Você mora em " + cidade);
// variáveis
let nome = prompt("Qual o seu nome? ");
let idade = prompt('Qual é a sua idade? ');

console.log('Seu nome é ' + nome + ' e sua idade é ' + idade + " anos.");

if (idade >= 18) {
    console.log('Você já é maior de idade.');
}
else {
    console.log('Você é menor de idade.');
}
    
console.log('Em 2027 você terá ' + (Number(idade) + 1) + ' anos.');