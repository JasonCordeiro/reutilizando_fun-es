//Exercicio 1

function somaReutilizavel(a,b){
    //const sum = a + b
    //return sum
    return a + b 
}

let resultado = 0
resultado = somaReutilizavel(10, 10) * 5;

console.log(resultado);

//Exercicio 2

function letraInicial(nome, sobrenome){
    const primeiraLetraNome = nome[0].toUpperCase()
    const primeiraLetraSobrenome = sobrenome[0].toUpperCase()

    return `${primeiraLetraNome} e ${primeiraLetraSobrenome}`
}

function nomeCompleto(){
    const letrasIniciais = letraInicial("Jason", "Miguel")

    return `As letras iniciais do meu nome completo são ${letrasIniciais}`
}

console.log(nomeCompleto())

//Exercicio 3

function impar(n){
    if(n%2 !== 0){
        return true
    }
    return false
}

function letrasProduto(produto){
    const tamanhoProduto = produto.length
    if(par(tamanhoProduto)){
        return "O número de letras deste produto é par"
    }
    else if(impar(tamanhoProduto)){
        return "O número de letras deste produto é impar"
    }
}

console.log(letrasProduto("produto"))
