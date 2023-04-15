// AULA 90 - OBJECTS.DEFINE.PROPERTY() E PROPERTIES (FREEZANDO APENAS UMA OU MAIS PROPRIEDADE DO OBJETOS E DEIXANDO AS OUTRAS NORMAIS (EDITÁVEIS))

// O THIS DENTRO DA FUNÇÃO CONSTRUTORA REFERENCIA AO PRÓPRIO OBJETO CRIADO
//Object.defineProperty()
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preço = preço;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {

    })
}

const p1 = new Produto ('Camiseta', 20, 3);
console.log(p1.nome);

