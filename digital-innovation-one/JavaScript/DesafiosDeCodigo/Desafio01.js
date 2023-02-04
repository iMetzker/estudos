//Somando Múltiplos

let a = 3;
let N = 18;
let soma = 0;


for (let i = a; i <= N; i++) {
    if (i % a === 0){
  soma =  soma + i;
}
}
console.log(soma);
