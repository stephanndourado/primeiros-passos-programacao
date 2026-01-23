// LOOP FOR
/*
for (let i = 1; i <= 10; i++) {
  console.log("Número: " + i);
}

*/
// LOOP FOR
/*
let i = 5

for (let i = 1; i <= 10; i++){
    // a variável i foi declarada dentro do escopo loop for por isso 
    //usa um endereço de memória diferente da variável i fora do escoço do loop.
    console.log(i)
    //imprime os numeros de 1 a 10
}
console.log(i) // imprime 5
*/

// LOOP WHILE
/*
let i = 0

while (i < 10){
    console.log(i)
    i++
}
// CONTAGEM REGRESSIVA
let contador = 5;

while (contador > 0) {
  console.log("Contagem regressiva: " + contador);
  contador--;
}
*/

//EXERCÍCIOS
//Mostre no console os números de 1 a 50 usando for.
console.log('EXERCICIO 01 - Mostrando de 1 a 50')
for (let i = 1; i <= 50; i++) {
    console.log(i)
}

//Mostre apenas os números pares entre 0 e 20.
console.log('EXERCICIO 02 - Numeros pares entre 0 e 20')
par = 0

while (par <= 20) {
    console.log(par)
    par = par + 2
}

//Peça um número ao usuário e mostre a tabuada dele de 1 a 10.
console.log('EXERCICIO 03 - Pedir um numeor do usuario e mostrar a tabuada desse numero de 1 a 10')
const num = prompt('Digite um número:')

for (let i = 0; i <= 10; i++) {
    console.log(num + ' x ' + i + ' = ' + num * i)
}

// Faça uma contagem regressiva de 10 até 0 usando while.
console.log('EXERCICIO 04 - Contagem regressiva de 10 a 0')
let contador = 10

while (contador >= 0) {
    console.log(contador)
    contador--
}