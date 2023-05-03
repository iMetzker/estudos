// AULA 94 - MANIPULANDO PROTOTYPES


// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
}

Object.setPrototypeOf(objB, objA); // MÉTODO UTILIZADO PARA MUDAR O PROTOTYPE SENDO O PRIMEIRO O OBJETO QUE TERA O  PROTOTYPE MUDADO E O SEGUNDO O QUE AGIRÁ COMO O PROTOTYPE
console.log(objB.chaveA);