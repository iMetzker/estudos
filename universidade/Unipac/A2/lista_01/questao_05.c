/* QUESTÃO 05 - O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de
fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de
45%, escreva um algoritmo em C para ler o custo de fábrica de um carro, calcular
e escrever em tela o valor final que será pago pelo consumidor.*/

#include <stdio.h>
#include <stdlib.h>

int main() {
    float custo_fabrica, perc_venda, perc_imposto, custo_final;

    printf("Insira o custo de fabrica do carro: ");
    scanf("%f", &custo_fabrica);

    perc_venda = (custo_fabrica * 28) / 100;
    perc_imposto = (custo_fabrica * 45) / 100;
    custo_final = custo_fabrica + perc_venda + perc_imposto;

    printf("O valor final a ser sera de R$ %.2f", custo_final);

    return 0;
};