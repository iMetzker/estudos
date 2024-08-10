/* QUESTÃO 06 – Faça um algoritmo em C que calcule a quantidade de litros de
gasolina utilizados em uma viagem, sabendo que o carro utilizado faz 12Km por
litro, e a distância percorrida. O algoritmo vai receber do usuário o tempo gasto na
viagem em horas e a velocidade média em quilômetros por hora. */

#include <stdio.h>

int main()
{
    float vel_media, tempo_viagem, dist_viagem, gasolina_viagem;

    printf("Calculadora de Viagem: Gasto de combustivel e km percorrido.\n");
    printf("Digite o tempo total gasto na sua viagem em horas: ");
    scanf("%f", &tempo_viagem);
    printf("Digite a velocidade media durante a viagem em km/h: ");
    scanf("%f", &vel_media);

    // distancia percorrida e quantidade gasta de gasolina
    dist_viagem = vel_media * tempo_viagem;
    gasolina_viagem = dist_viagem / 12;

    printf("\nEm uma viagem a %.2f km/h durante %.2f horas,\nserao gastos %.2f litros de gasolina e o percurso total tera %.2f km\n", vel_media, tempo_viagem, gasolina_viagem, dist_viagem);

    return 0;
};