/* QUESTÃO 01 - Faça um programa em C que calcule a área de um quadrado (dados
informados pelo usuário) e em seguida retorne em tela o dobro do resultado da
área para o usuário. */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int lado_quadrado, area, dobro;

    printf("Digite um número inteiro, que será o lado do seu quadrado: ");
    scanf("%d", &lado_quadrado);

    area = lado_quadrado * lado_quadrado;
    dobro = area * 2;
    printf("A área do seu quadrado é: %d\n", area);
    printf("O dobro da área do seu quadrado é: %d\n", dobro);

    return 0;
};