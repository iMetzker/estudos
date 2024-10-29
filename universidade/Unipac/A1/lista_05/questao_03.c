/* QUESTÃO 03 – Implemente uma função recursiva em C chamada fibonacci que receba um
número inteiro n e retorne o n-ésimo termo da sequência de Fibonacci. */

#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) {
        return n; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

int main() {
    int n;

    printf("Digite um número inteiro para calcular o termo da sequência de Fibonacci: ");
    scanf("%d", &n);

    if (n < 0) {
        printf("Por favor, digite um número inteiro não negativo.\n");
    } else {
        printf("O %d-ésimo termo da sequência de Fibonacci é: %d\n", n, fibonacci(n));
    }

    return 0;
}