/* QUESTÃO 01 – Faça um programa em C que simule o Jogo da Forca. Uma palavra de até
10 caracteres deve ser previamente inserida no programa, sejam via código ou pelo
usuário. O programa deverá contar os caracteres da palavra e adicionar duas tentativas
adicionais (por exemplo, uma palavra de 5 letras dá 7 vidas ao jogador).
O programa deve pedir ao usuário que informe uma letra e por meio de busca linear deve
verificar se essa letra existe na palavra secreta. Caso a letra exista, deverá ser exibido em
tela a posição em que se encontra a letra.
Caso a letra não exista, uma vida será perdida.
O Jogo acaba quando não existirem mais vidas para o jogador ou se todas as letras forem
descobertas. */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int main() {

 char palavra[] = "insanidade"; 
    int tamanho = strlen(palavra);
    int vidas = tamanho + 2;
    char letra;
    int acertos = 0;
    int i;
    char exibir[tamanho + 1];

    for (i = 0; i < tamanho; i++) {
        exibir[i] = '_';
    }
    exibir[tamanho] = '\0';

    while (vidas > 0 && acertos < tamanho) {
        printf("Palavra: %s\n", exibir);
        printf("Vidas restantes: %d\n", vidas);
        

        printf("Digite uma letra: ");
        scanf(" %c", &letra);
        letra = tolower(letra); // Ignorar maiúsculas, convertendo sempre em minúsculas

        // Verificar se a letra está na palavra  
        int encontrado = 0;      
        for (i = 0; i < tamanho; i++) {
            if (tolower(palavra[i]) == letra) {
                if (exibir[i] == '_') { 
                    // Se ainda não foi descoberta
                    exibir[i] = palavra[i];
                    acertos++;
                }
                encontrado = 1;
            }
        }

        if (!encontrado) {
            vidas--;
            printf("Letra incorreta!\n");
        } else {
            printf("Letra correta!\n");
        }

        if (acertos == tamanho) {
            printf("Parabéns! Você ganhou! A palavra era: %s\n", palavra);
            break;
        }
    }

    if (vidas <= 0) {
        printf("Você perdeu! A palavra era: %s\n", palavra);
    }

    return 0;
}