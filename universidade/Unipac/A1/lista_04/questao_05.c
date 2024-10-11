/* QUESTÃO 05 – Faça um programa em C que receba dados inteiros digitados pelo usuário.
Logo após deve ser solicitado a digitação de um valor e esse valor deverá ser pesquisado
nessa lista utilizando BUSCA BINÁRIA. */

#include <stdio.h>

int main() {
    int n, i, valor, inicio, fim, meio, encontrado = 0;
    // int arr[n];

    printf("Digite a quantidade de elementos que a sua lista terá: ");
    scanf("%d", &n);
    
    int arr[n];

    printf("Digite os elementos da sua lista em ordem crescente: \n");
    for (i = 0; i < n; i++) {
        printf("%d item - ", i);
        scanf("%d", &arr[i]);
    }
    
    printf("Digite o valor a ser pesquisado: ");
    scanf("%d", &valor);


    inicio = 0;
    fim = n - 1;

    while (inicio <= fim) {
        meio = (inicio + fim) / 2;

        if (arr[meio] == valor) {
            printf("Valor %d encontrado na posição %d da lista.\n", valor, meio);
            encontrado = 1;
            break;
        } else if (arr[meio] < valor) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    if (!encontrado) {
        printf("Valor %d não encontrado na lista.\n", valor);
    }

    return 0;
}



