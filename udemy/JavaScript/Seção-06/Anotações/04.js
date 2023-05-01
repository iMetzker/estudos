// AULA 92 - MÉTODOSPASA OBJETOS

/* 
// JÁ VIMOS
... (spread)
object.getOwnPropertyDescriptor (objeto, 'prop')
object.keys (retorna as chaves dentro de um array)
object.freeze (congela o objeto)
object.defineProperties (define várias propriedades)
object.defineProperty (define uma propriedade)
 */

const produto = { nome: "Produto", preco: 1.8 };
const caneca = { ...produto };

Object.freeze(produto); // NÃO É POSSÍVEL MAIS ALTERAR O OBJETO
produto.nome = 'Outro nome';

console.log(produto);
console.log(Object.keys(caneca));

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
