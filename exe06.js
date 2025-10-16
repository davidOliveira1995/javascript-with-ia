let cores = ["vermelho","azul","verde"];

cores.push("amarelo");

console.log(cores);

cores.unshift("preto");

console.log(cores);

cores.splice(2,1);

console.log(cores);


const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2023
}

console.log(carro);

carro.ano = 2025;

console.log(carro);

carro.cor = "Preto";

console.log(carro);

let produtos = [
    {
        nome: "Maquina de lavar",
        preco: 2890
    },
    {
        nome: "Geladeira",
        preco: 5200
    },
    {
        nome: "Cama de casal",
        preco: 2100
    }
];

for(const produto of produtos) {

    console.log(`Produto: ${produto.nome} - Preço: R$${produto.preco}`);
    
}