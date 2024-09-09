/* QUESTÃO 02 – Em uma pesquisa de mercado, 50 crianças foram perguntadas sobre as
notas que elas dariam para o DVD Xuxa Só para Baixinhos 10 atribuindo notas de 1 a 5
(sendo 1 = ruim e 5 = ótimo).
Faça um programa em C que gere um array randômico com o resultado dessa pesquisa
e exiba em tela quantas vezes cada nota foi atribuída ao DVD. Use busca linear. */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int notas[50]; 
    int contagem[5] = {0};
    int i;

    srand(time(NULL));

    for (i = 0; i < 50; i++) {
        notas[i] = rand() % 5 + 1;
    }

    for (i = 0; i < 50; i++) {
        contagem[notas[i] - 1]++;
    }

    printf("Contagem de cada nota atribuída para o DVD Xuxa Só para Baixinhos:\n");
    for (i = 0; i < 5; i++) {
        printf("Nota %d: %d vezes\n", i + 1, contagem[i]);
    }

    return 0;
}