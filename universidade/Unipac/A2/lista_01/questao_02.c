/* QUESTÃO 02 – Faça um programa em C que solicite ao usuário uma temperatura
em graus Celsius e retorne para o usuário essa mesma temperatura em graus
Fahrenheit. A conversão é feita com a fórmula: ((C * 9)/5) + 32 ou F = C * 1.8 + 32 */


#include <stdio.h>
#include <stdlib.h>

int main() {
int temp_celcius, temp_fahrenheit;

printf("Digite a temperatura em graus Celsius que deseja converter para Fahrenheit: ");
scanf("%d", &temp_celcius);

temp_fahrenheit = temp_celcius * 1.8 + 32;

printf("%d graus Fahrenheit.", temp_fahrenheit);

return 0;
};
