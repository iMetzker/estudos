/* QUESTÃO 02 – Realize a otimização do algoritmo de busca Bubble Sort para que ele
pare de executar se, em uma passagem completa, nenhum elemento for trocado
(indicando que o array já está ordenado). O array utilizado conterá números inteiros e a
ordenação deve ser em ordem crescente. */


#include <stdio.h>

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int tamanho = 5;
    int i, j, temp;
    int controle;


    for (i = 0; i < tamanho - 1; i++) {
        controle = 0;  // Reseta a variável de controle para cada ciclo

        for (j = 0; j < tamanho - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                temp = arr[j];        
                arr[j] = arr[j + 1]; 
                arr[j + 1] = temp; 
                controle = 1; // altera a variável de controle para cada troca no array
            }
        }

        // Se nenhuma troca foi feita, finaliza a iteração
        if (controle == 0) {
            break;
        }
    }

    printf("Array completo ordenado de maneira crescente: ");
    for (i = 0; i < tamanho; i++) {
        printf(" %d ", arr[i]);
    }
    
    return 0;
}
