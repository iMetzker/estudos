/* QUESTÃO 01 – Escreva um programa em C que receba a idade de uma pessoa e baseado na
informação recebida, exiba as seguintes mensagens:
• "Menor de idade" se a idade for menor que 18.
• "Maior de idade" se a idade for entre 18 e 65.
• "Idoso" se a idade for maior que 65.
Use estrutura de condição CASE. */

#include <stdio.h>

int main()
{
    int idade;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    switch (idade)
    {
    case 0 ... 17 :
        printf("Menor de idade");
        break;
    case 18 ... 65:
        printf("Maior de idade");
        break;
    default:
        printf("Idoso");
        break;
    }

    return 0;
}