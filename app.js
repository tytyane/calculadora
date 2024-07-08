const prompt = require('prompt-sync')()

let operadores = [
    {nome: 'Soma', caracter: '+'},
    {nome: 'Subtração', caracter: '-'},
    {nome: 'Multiplicação', caracter: '*'},
    {nome: 'Divisão', caracter: '/'},
    {nome: 'Porcentagem', caracter: '%'}
]
let resposta = 0
let numero1  = 0
let numero2  = 0
let operadorEscolhido = ''
menuCalculadora()

function menuCalculadora(){
    console.log(`
          __________________________________________
         |_______________CALCULADORA________________|
         |            1. Fazer cálculo              |
         |           2. Obter resultado             |
         |________________3. Sair___________________|
         |                                          |
         | ( 1ºn )  operador  ( 2ºn )  =  resultado |
         |__________________________________________|
         

    `)

    let opcao = prompt(`Escolha uma opção: `)
    switch(opcao){
        case "1":
            calculo()
            break
        case "2":
            resultado()
            break
        case "3":
            break
        default:
            console.log('Opção inválida, tente novamente!')
            menuCalculadora()
    }
}

function calculo(){
    numero1 = parseFloat(prompt('Digite o primeiro número: '))
    if(isNaN(numero1)){
        console.log('Inválido, você precisa digitar um número, tente novamente!')
        calculo()
    } else {
        console.log(`
            Lista de operadores: `)
        operadores.forEach((operador, index) => {
            console.log(`${index + 1}. ${operador.nome}: ${operador.caracter}
                `)
        })
        operadorEscolhido = prompt('Digite o operador escolhido: ')
            if(operadorEscolhido > 0 && operadorEscolhido <= operadores.length){
                operadorEscolhido = operadores[operadorEscolhido - 1].caracter
                numero2 = parseFloat(prompt('Digite o segundo número: '))
                if(isNaN(numero2)){
                    console.log('Inválido, você precisa digitar um número, tente novamente!')
                    calculo()
                } else {
                console.log('Calculando...')
                menuCalculadora()
                }
            } else {
                console.log("Número inválido, tente novamente!")
                menuCalculadora()
            }  
    }
}

function resultado(){
    switch(operadorEscolhido){
        case '+':
            resposta = numero1 + numero2
            break
        case '-':
            resposta = numero1 - numero2
            break
        case '*':
            resposta = numero1 * numero2
            break
        case '/':
            if(numero2 == 0){
                console.log('Impossível dividir por 0!')
                menuCalculadora()
            } else {
                resposta = numero1/numero2
                break
            }
        case '%':
            resposta = (numero1/100) * numero2
            break
        default:
            menuCalculadora()
            break
        }
    console.log(`
    | ${numero1}  ${operadorEscolhido}  ${numero2}  =  ${resposta} |
    `)
    menuCalculadora()
}

