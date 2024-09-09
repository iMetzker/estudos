/* QUESTÃO 04 – Crie um programa em C que tenha um array dos números primos de 1 a
100. Peça ao usuário que informe um número de 1 a 100 e utilizando busca binária,
verifique se o número digitado está na lista ou não.*/

#include <stdio.h>
#include <stdlib.h>
int main()
{
    int lista[] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97};
    int tamanho = 25;
    int valor_procurado;
    int inicio = 0;
    int meio;
    int fim = tamanho - 1;
    int controle = -1;

    printf("Informe um número de 1 a 100: ");
    scanf("%d", &valor_procurado);

    while (inicio <= fim)
    {
        meio = (inicio + fim) / 2;

        if (lista[meio] == valor_procurado) {
            controle = meio;
            break;
        } else if (lista[meio] < valor_procurado) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    if (controle == -1) {
        printf("Número não encontrado. \n");
    } else {
        printf("Número encontrado na posição: %d \n", controle);
    }

    printf("Lista completa de números primos: ");
    for (int i = 0; i < tamanho; i++) {
        printf("%d ", lista[i]);
    }
    printf("\n");

    return 0;
}