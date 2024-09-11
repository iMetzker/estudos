/* QUESTÃO 03 – Altere o algoritmo de busca Bubble Sort para que ele ordene os
elementos de um array de inteiros, em ordem decrescente. */

#include <stdio.h>

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int tamanho = 5;
    int i, j, temp;
    int controle;


    for (i = 0; i < tamanho - 1; i++) {
        controle = 0; 
        for (j = 0; j < tamanho - i - 1; j++) {

            if (arr[j] < arr[j + 1]) { // mudança de ordenação para decrescente 
                temp = arr[j];        
                arr[j] = arr[j + 1]; 
                arr[j + 1] = temp; 
                controle = 1; 
            }
        }

        
        if (controle == 0) {
            break;
        }
    }

    printf("Array completo ordenado de maneira decrescente: ");
    for (i = 0; i < tamanho; i++) {
        printf(" %d ", arr[i]);
    }
    
    return 0;
}