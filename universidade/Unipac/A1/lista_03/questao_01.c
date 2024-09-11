/* QUESTÃO 01 – Peça ao usuário que insira várias letras e utilizando o algoritmo de busca
Bubble Sort, realize a ordenação alfabética das letras digitadas. */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main() {

 char letras[15];
 int i, j;
 char temp;

 printf("Insira 15 letras: ");
 for (i = 0; i < 15; i++)
 {
     scanf(" %c", &letras[i]); 
    }

    for(i = 0; i < 14; i++) {
        for(j = 0; j < 14-i; j++) {
            if(letras[j] > letras[j+1]) {
                temp = letras[j];
                letras[j] = letras[j+1];
                letras[j+1] = temp;
            }
        }
    }

    printf("Letras ordenadas: ");
    for(i = 0; i < 15; i++) {
        printf("%c ", letras[i]);
    }

    return 0;
}

