// uso do while - criar um prograna que pegunte um numero ao usuario e va somando, ate que ele saia do prograna, depois mostar o rsultado da soma

/*let num = Number (prompt("digite um numero, apra sair digite zero"))
let soma = 0

while (num !== 0){
    soma = soma + num
    num =  Number (prompt ("digite  um numero, pra sair digite 0"))
}
// só mostrou a soma com template string
alert (`a asoma é ${soma}`)*/

// uso do for
//escrever programa que receb um numero por input do usuario, o programa devera contador ate o numero digitado

/*let num = Number (prompt("insira um numeor"))

for (let contador = 0; contador <= num; contador++){
    console.log(contador)
}*/

// for com arrays
//criar um array com 7 numeros w utilizar um for para percorrer o array imprimindo no console cada linha

/*const array = [7,6,5,4,3,2,1]

for (i = 0; i< array.length; i++){
    console.log(`o indice é ${i} e seu valor é ${array[i]}`)
}*/

//foxação
//utilizar whilw,  receba promp esperando tipo de usuario "A" para administrador, "B" para usuario comum e "C" para usuario assinanate, enqyanto o valor for diferente de administrador , o laço devera se repetir mostrando a mensagem acesso negado

/*let tipoUsuario = prompt("digite o seu tipo de usuario")

while (tipoUsuario !== "A"){
    console.log ("acesso negado")
    tipoUsuario =  prompt ("digite o usuario de novo")
}

console.log("bem vindo ADM")*/

//usar for para escrever tabuada do 2


/*let tabuada = Number (prompt("digite qual a tabuada quer fazer"))

for (i = 0; i <=10; i++){
    console.log (i*tabuada)
}*/

// criar for que receba array de strings e receba no console em caixa alta

const array = ["Nowitzky", "Curry", "Rose"]

console.log("meus jogadores favoritos da NBA")
for (i=0; i<array.length; i++){
        console.log (array[i].toUpperCase())
}




