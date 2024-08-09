/* QUESTÃO 03 – Faça um programa em C que solicite ao usuário dois números reais.
Retorne em tela:
• o produto do dobro do primeiro número digitado.
• a soma do triplo do primeiro número com a metade do segundo número.
• a raiz quadrada da soma do primeiro número com o segundo número.*/

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main() {
    float num_01, num_02, produto_dobro, equa_01, equa_02;

    printf("Digite dois numeros reais\n");
    printf("Digite o primeiro numero:");
    scanf("%f", &num_01);
    printf("Digite o segundo numero:");
    scanf("%f", &num_02);

    produto_dobro = (num_01 * 2) * num_01;
    equa_01 = (num_01 * 3) + (num_02 / 2);
    equa_02 = sqrt(num_01 + num_02);

    printf("\nO produto do dobro do primeiro numero digitado e: %.2f\n", produto_dobro);
    printf("A soma do triplo do primeiro numero com a metade do segundo numero digitado e: %.2f\n", equa_01);
    printf("A raiz quadrada da soma do primeiro numero com o segundo numero digitado e: %.2f\n", equa_02);

    return 0;
}