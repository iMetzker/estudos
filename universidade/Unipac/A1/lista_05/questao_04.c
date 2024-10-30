/* QUESTÃO 04 – Escreva uma função recursiva para implementar o algoritmo de busca
binária em um array de inteiros. A função deve retornar o índice do elemento procurado
ou -1 se não for encontrado. */

#include <stdio.h>

int buscaBinaria(int array[], int esquerda, int direita, int elemento) {
    if (esquerda > direita) {
        return -1; 
    }

    int meio = esquerda + (direita - esquerda) / 2;

    if (array[meio] == elemento) {
        return meio; 
    } else if (array[meio] > elemento) {
        return buscaBinaria(array, esquerda, meio - 1, elemento); 
    } else {
        return buscaBinaria(array, meio + 1, direita, elemento); 
    }
}

int main() {
    int n, elemento;

    printf("Digite a quantidade de elementos no array: ");
    scanf("%d", &n);

    int array[n];

    printf("Digite os elementos do array em ordem crescente:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &array[i]);
    }

    printf("Digite o elemento a ser procurado: ");
    scanf("%d", &elemento);

    int resultado = buscaBinaria(array, 0, n - 1, elemento);

    if (resultado != -1) {
        printf("Elemento %d encontrado no índice: %d\n", elemento, resultado);
    } else {
        printf("Elemento %d não encontrado no array. -1 \n", elemento);
    }

    return 0;
}