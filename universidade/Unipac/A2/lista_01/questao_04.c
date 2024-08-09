/* QUESTÃO 04 – Zé Olho de Gato, um pescador, precisa de um programa para calcular o rendimento do seu trabalho. De acordo com a Legislação no 24.826 de 2024,
caso o pescador ultrapasse a coleta de 50Kg de peixe ele deve pagar R$ 4,00 de multa.
Zé Olho de Gato precisa informar a quantidade de Kg de peixe pescado no dia e
que o programa dê como saída o valor excedente em Kg pescado e o valor que ele
deverá pagar de multa. */

#include <stdio.h>
#include <stdlib.h>

int main() {
    float kg_pescado, kg_excedente, valor_multa;

    printf("Calculadora de multa do seu Ze\n");
    printf("Informe a quantidade total de kg de peixes pescados: ");
    scanf("%f", &kg_pescado);

    if(kg_pescado <= 50 || kg_pescado == 0) {
        printf("Nao sera nescessario o pagamento de nenhuma multa.");
    } else {
        kg_excedente = kg_pescado - 50;
        valor_multa = kg_excedente * 4;
        printf("Excederam %.2f kg na pesca de hoje que geraram R$ %.2f de multa", kg_excedente, valor_multa);
    }

    return 0;
}