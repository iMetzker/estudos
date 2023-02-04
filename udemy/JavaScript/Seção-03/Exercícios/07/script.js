// AULA 62 - EXERCÍCIO FIZZ BUZZ + VERIFICAR SE É UM NUMBER E TESTAR COM UM LAÇO DE 0 A 100 

const checagemDivisao = (num) => {
  if (typeof num !== "number") return num;
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
};

for (let i = 0; i <= 100; i++) {
  console.log(i, checagemDivisao(i));
}