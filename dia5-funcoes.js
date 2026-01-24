// 🧠 EXERCÍCIOS (1h)

// No mesmo arquivo:

// Crie uma função que receba dois números e retorne a multiplicação.


/*
console.log('Crie uma função que receba dois números e retorne a multiplicação.')

function multiplica(n1, n2) {
    return n1 * n2
}

console.log('2 x 5 = ' + multiplica(5, 2))

// Crie uma função que receba um nome e uma idade e retorne uma frase.

console.log('Crie uma função que receba um nome e uma idade e retorne uma frase.')


function frase(nome, idade) {
    return 'Seu nome é ' + nome + ' e sua idade é ' + idade
}


console.log(frase('Stephann', 44))

// Crie uma função que receba um número e diga se ele é par ou ímpar.

console.log('Crie uma função que receba um número e diga se ele é par ou ímpar.')

function parimpar(n) {
    if (n % 2 == 1) {
        return n + " é Número ímpar."
    }
    else {
            return n + ' é Número par'
        }
    }

console.log(parimpar(4))

// Crie uma função que calcule a média de três notas.
console.log('Crie uma função que calcule a média de três notas.')

let nota1 = +prompt('Primeira nota:')
let nota2 = +prompt('Segunda nota: ')
let nota3 = +prompt('Terceira nota: ')

function media(n1,n2,n3){
    let med = (n1 + n2 + n3) / 3
    return 'Nota média = ' + med
}

console.log('Essas são as notas: ' + nota1, nota2, nota3)

console.log('Essa é média: ' + media(nota1, nota2, nota3))


*/


// Crie uma função que receba dois números e retorne a multiplicação.

console.log('Crie uma função que receba dois números e retorne a multiplicação.')

const numero1 = +prompt('Digite um número: ')
const numero2 = +prompt('digite o segundo numero: ')

function multiplica(numero1, numero2){
    return numero1 * numero2
}

console.log(numero1 + ' x ' + numero2 + ' = ' + multiplica(numero1, numero2))

// Crie uma função que receba um nome e uma idade e retorne uma frase.

console.log('Crie uma função que receba um nome e uma idade e retorne uma frase.')

let nome = prompt('Digite seu nome: ')
let idade = prompt('Digite sua idade')

function frase(nome, idade){
    return 'Seu nome é ' + nome + ' e você tem ' + idade + ' de idade.'
}

console.log(frase(nome, idade))


// Crie uma função que receba um número e diga se ele é par ou ímpar.

console.log('Crie uma função que receba um número e diga se ele é par ou ímpar.')

let n = +prompt("Digite um número qualquer: ")

function parimpar(n1){
    if(n1 % 2 == 1){
        return 'O número ' + n1 + ' é ímpar.'
    }else{
        return 'O número ' + n1 + ' é par.'
    }
}

console.log(parimpar(n))

// Crie uma função que calcule a média de três notas.
console.log('Crie uma função que calcule a média de três notas.')

let nota1 = +prompt('Digite a nota 1: ')
let nota2 = +prompt('Digite a nota 2: ')
let nota3 = +prompt('Digite a nota 3: ')

function media(n1, n2, n3){
    let media = (n1 + n2 + n3) / 3
    return 'A média entre ' + n1 + ' , ' + n2+ ' e ' + n3 + ' é [ ' + media + ' ]'
}

console.log(media(nota1, nota2, nota3))