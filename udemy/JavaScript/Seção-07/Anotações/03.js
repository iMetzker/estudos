// AULA 105 - MÉTODOS DE INSTÂNCIA E ESTÁTICOS

class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
    }
// MÉTODOS DA INSTÂNCIA:
    aumentar() {
        this.volume+= 2;
    }

    diminuir() {
        this.volume -=2;
    } 

    // MÉTODOS ESTÁTICOS:
    static trocaPilha(){
        console.log('Ok, trocar');
    }
}

const controle1 = new ControleRemoto('LG');
// INSTÂNCIA OU OBJETO : CONTROLE1 
// LOGO: MÉTODO DE INSTRÂNCIA:
controle1.aumentar();
controle1.aumentar();
controle1.aumentar();

// MÉTODO ESTÁTICO : 
ControleRemoto.trocaPilha();

console.log(controle1);