/*
// declaração de array
const carros = ['BMW', 'Audi', 'Honda']

for(let i = 0; i < carros.length; i++){
    let carro = carros.sort()[i]
    console.log(carro)
}
// mudando o primeiro elemento da array carros
carros[0] = 'Ferrari'

// imprimir usando o indice dos elementos
console.log(carros[0])

// metodo toString()
console.log(carros.toString())

/* Arrays são objetos. O operador typeof retorna
um objeto para arrays, mas as arrays são melhor
descritas como arrays mesmo, pois arrays usam números
para acessr seus elementos. */

// MÉTODOS EM ARRAYS
// carros.length retorna o numero de elementos */
/*
numElementos = carros.length
console.log(numElementos)

// acessando o primeiro elementos
const frutas = ['Banana','Laranja','Maçã','Manga']
let fruta = frutas[0]
console.log(fruta)
// imprimindo a lista array frutas em ordem a-z
for (let i = 0; i < frutas.length; i++){
    console.log(frutas.sort()[i])
}
// .forEch com a funçaõ imprime() criada
// imprime cada elemento do array frutas
frutas.forEach(imprime)
function imprime(valor){
    console.log(valor)
}
// adiciona elementos no final da array
frutas.push('Biribá')
console.log(frutas)

// outra forma de adicionar
frutas[frutas.length] = 'Pitomba'
console.log(frutas)

// como reconhecer uma array
console.log(typeof(frutas))
console.log('É array? ' + Array.isArray(frutas))
console.log('É uma array? ' + (frutas instanceof Array))

// remover o ultmo elemento da arrey
console.log(frutas.pop())
console.log(frutas)
// adiciona um novo elemento ao array
frutas.push('Kiwi')
console.log(frutas)
// remover o primeiro item e renumerar o outros itens
frutas.shift()
console.log(frutas)
// adiciona um elemento no inicio da matriz
frutas.unshift('Abacate')
console.log(frutas)
*/
// EXERCICIOS
console.log('Crie um array com 5 nomes.')
const bairros = ['Centro', 'Barro Alto', 
    'Vai quem quer', 'Novo Amanhecer', 'Cidade Nova'
]
console.log(bairros)
//
console.log('Mostre todos os nomes no console usando for.')
for (let i = 0; i < bairros.length; i++){
    console.log(bairros[i])
}
//
console.log('Peça um nome ao usuário e adicione ao array.')
const nome = prompt('Nome: ')
bairros.push(nome)
console.log(bairros)
//
console.log('Remova o primeiro nome da lista.')
let remove = bairros.shift()
console.log(bairros)
//
console.log('Mostre o tamanho final do array')
console.log(bairros.length)
