/* QUESTÃO 03 – Você está desenvolvendo um sistema em C para uma loja que precisa
organizar a lista de preços de produtos. Escreva um programa que leia uma lista de
preços e ordene os valores utilizando o algoritmo de Insertion Sort. */

#include <stdio.h>

int main()
{
    int i, j;
    int chave;
    int preco_produto[10] = {9, 2, 6, 4, 5, 3, 10, 8, 1, 7};

    for (i = 1; i < 10; i++)
    {
        chave = preco_produto[i];

        for (j = i - 1; j >= 0 && preco_produto[j] > chave; j--)
        {
            preco_produto[j + 1] = preco_produto[j];
        }

        preco_produto[j + 1] = chave;
    }

    printf("Preços dos produtos em ordem crescente: \n");
    for (i = 0; i < 10; i++)
    {
        printf("Produto %d: R$ %d \n", i + 1, preco_produto[i]);
    }

    return 0;
}