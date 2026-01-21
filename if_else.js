// uso do if e else


//DIZ SE É DE MAIOR
/*
let idade = prompt('Qual sua idade? ')

if (idade >= 18) {
    console.log('Você é maior de idade.')
}else{
    console.log('Você é menor de idade.')
}
*/

// DIZ QUE UMA PALAVRA É LONGA SE TEM MAIS DE 5 LETRAS
/*
const nome = prompt('Digite uma palavra.')

if (nome.length > 5){
    console.log('Essa palavra é longa.')
}else{
    console.log('Essa palavra é curta.')
}*/

//APROVADO OU REPROVADO OU DE RECUPERAÇÃO
const nota = prompt('Digite usa nota:')

if (nota >= 7){
    console.log('Aprovado')
}
else if (nota >= 5){
    console.log('Recuperação')
}
else{
    console.log('Reprovado')
}