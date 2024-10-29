/* QUESTÃO 01 – Escreva um programa em C que tenha uma função recursiva que receba
um número inteiro positivo e retorne a soma de todos os números de 1 até n. Teste a
função com diferentes valores no programa principal. */

#include <stdio.h>

int main() {
    int n;

    printf("Digite um número inteiro positivo: ");
    scanf("%d", &n);

    if (n > 0) {
        int somaRecursiva(int num) {
            if (num == 1) {
                return 1;
            } else {
                return num + somaRecursiva(num - 1);
            }
        }

        printf("A soma de 1 até %d é: %d\n", n, somaRecursiva(n));
    } else {
        printf("Por favor, digite um número positivo.\n");
    }

    return 0;
}