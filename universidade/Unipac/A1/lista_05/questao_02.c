/* QUESTÃO 02 – Escreva uma função em C que receba a quantidade de elementos de um
array, o valor inicial e a razão da progressão aritmética e retorne o array com o resultado.
Escreva uma outra função em C que realize a impressão desse array retornado. */

#include <stdio.h>

int main() {
    int qtd, valor_inicial, razao;

    printf("Digite a quantidade de elementos: ");
    scanf("%d", &qtd);

    printf("Digite o valor inicial: ");
    scanf("%d", &valor_inicial);

    printf("Digite a razão da progressão aritmética: ");
    scanf("%d", &razao);

   
    int array[qtd];

 
    for (int i = 0; i < qtd; i++) {
        array[i] = valor_inicial;
        valor_inicial += razao;
    }

    printf("Array da progressão aritmética: ");
    for (int i = 0; i < qtd; i++) {
        printf("%d - ", array[i]);
    }

    return 0;
}