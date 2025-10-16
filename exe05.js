const quadrado = function (numero) {
    return Math.pow(numero,2);
}

const dividir = (a,b) => a/b;

const processar = function(a, b, operacao) {
    return operacao(a,b);
}

console.log(quadrado(4));
console.log(dividir(10,2));
console.log(processar(100,4,dividir));