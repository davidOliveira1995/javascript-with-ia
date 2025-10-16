for(let i = 1; i <= 10; i++) {
    console.log(i);
}


let numeros = [1, 2, 3, 4, 5];

let soma = 0;
for(const numero of numeros) {
    
    soma += numero;
}

console.log(soma);


let count = 10;
while(count >= 1){
    console.log(count);
    count--;
}