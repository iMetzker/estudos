/* QUESTÃO 02 – Implemente um programa em C que leia um número inteiro positivo e
exiba todos os números pares entre 1 e o número informado.*/

#include <stdio.h>

int main() {
    int entrada;
    int i;

    printf("Digite um número inteiro positivo: ");
    scanf("%d", &entrada);


    if (entrada <= 0) {
        printf("Número inválido, digite um número positivo.\n");
    } else {
        printf("Números pares entre 1 e %d:\n", entrada);
    
        for (i = 1; i <= entrada; i++) {
            if (i % 2 == 0) {
                printf("%d ", i);
            }
        }
    }

    return 0;
}
