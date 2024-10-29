/* QUESTÃO 06 – Escreva uma função em C que retorne o maior dos 3 números recebidos
como parâmetro. */

#include <stdio.h>


int maiorDeTres(int a, int b, int c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

int main() {
    int num1, num2, num3;

    printf("Digite três números inteiros:\n");
    printf("Número 1: ");
    scanf("%d", &num1);
    printf("Número 2: ");
    scanf("%d", &num2);
    printf("Número 3: ");
    scanf("%d", &num3);

    int maior = maiorDeTres(num1, num2, num3);
    printf("O maior número entre %d, %d e %d é: %d\n", num1, num2, num3, maior);

    return 0;
}