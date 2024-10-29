/* QUESTÃO 05 – Escreva uma função recursiva que calcule o Mínimo Comum Divisor (MCD)
de dois números inteiros positivos usando o algoritmo de Euclides. */

#include <stdio.h>

int mcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    return mcd(b, a % b);
}

int main() {
    int num1, num2;

    printf("Digite dois números inteiros positivos:\n");
    printf("Número 1: ");
    scanf("%d", &num1);
    printf("Número 2: ");
    scanf("%d", &num2);

    if (num1 <= 0 || num2 <= 0) {
        printf("Por favor, digite números inteiros positivos.\n");
    } else {
        int resultado = mcd(num1, num2);
        printf("O MCD de %d e %d é: %d\n", num1, num2, resultado);
    }

    return 0;
}