/* QUESTÃO 03 – Um banco organiza as contas de clientes de acordo com seus números
de conta, que são únicos e estão em ordem crescente. Escreva um programa em C que
use busca binária para verificar se uma conta específica está ativa. Se a conta for
encontrada, exiba a posição no vetor, caso contrário, mostre que a conta não existe. O
banco deve ter pelo menos 100 contas ativas.
Informe também quantas comparações foram necessárias para determinar se a conta está
presente ou não. */

#include <stdio.h>
#include <stdlib.h>

int main() {
    int contas[100];
    int i;
    int conta_procurada;
    int inicio = 0;
    int meio;
    int fim = 99;
    int controle = -1;
    int comparacoes = 0;

    for (i = 0; i < 100; i++) {
        contas[i] = i + 1;
    }


    printf("Informe o número da conta a ser buscada: ");
    scanf("%d", &conta_procurada);

    while (inicio <= fim) {
        meio = (inicio + fim) / 2;
        comparacoes++;

        if (contas[meio] == conta_procurada) {
            controle = meio;
            break;
        } else if (contas[meio] < conta_procurada) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    if (controle == -1) {
        printf("Conta bancária não encontrada.\n");
    } else {
        printf("Conta bancária encontrada na posição: %d \n", controle);
    }

    printf("Número de comparações realizadas: %d\n", comparacoes);

    return 0;
}