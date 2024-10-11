/* QUESTÃO 04 – Imagine que você está desenvolvendo um sistema para uma escola que
precisa organizar as notas dos alunos em ordem decrescente para gerar um relatório.
Escreva um programa que utilize o algoritmo de Selection Sort para ordenar as notas de
uma turma. */

#include <stdio.h>

int main() {
    int i, j, chave;
    int notas[10] = {7, 2, 8, 6, 5, 4, 9, 6, 7, 10};
    int temp;

    for (i = 0; i < 10 - 1; i++) {
        chave = i; 

        // Encontra a maior nota na parte não ordenada
        for (j = i + 1; j < 10; j++) {
            if (notas[j] > notas[chave]) {
                chave = j;  // Atualiza a maior nota
            }
        }

        // Troca a maior nota encontrada com a primeira nota não ordenado
        if (chave != i) {
            temp = notas[i];
            notas[i] = notas[chave];
            notas[chave] = temp;
        }
    }

    printf("Notas dos alunos em ordem decrescente:\n");
    for (i = 0; i < 10; i++) {
        printf("Aluno %d: %d\n", i + 1, notas[i]);
    }

    return 0;
}
