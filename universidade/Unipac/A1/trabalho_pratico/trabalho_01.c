#include <stdio.h>
#include <math.h>

int main() {
    int opcao;
    double a, b, c, resultado;
    double delta, x1, x2;

    do {
        printf("\n--- Calculadora Interativa ---\n");
        printf("1. Soma\n");
        printf("2. Subtração\n");
        printf("3. Multiplicação\n");
        printf("4. Divisão\n");
        printf("5. Exponenciação\n");
        printf("6. Raiz Quadrada\n");
        printf("7. Módulo\n");
        printf("8. Bhaskara\n");
        printf("9. Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("Digite dois números \n");
                printf("Digite o primeiro número: ");
                scanf("%lf", &a);
                printf("Digite o segundo número: ");
                scanf("%lf", &b);
                resultado = a + b;
                printf("Resultado: %.2lf\n", resultado);
                break;

            case 2:
                printf("Digite dois números \n");
                printf("Digite o primeiro número: ");
                scanf("%lf", &a);
                printf("Digite o segundo número: ");
                scanf("%lf", &b);
                resultado = a - b;
                printf("Resultado: %.2lf\n", resultado);
                break;

            case 3:
                printf("Digite dois números \n");
                printf("Digite o primeiro número: ");
                scanf("%lf", &a);
                printf("Digite o segundo número: ");
                scanf("%lf", &b);
                resultado = a * b;
                printf("Resultado: %.2lf\n", resultado);
                break;

            case 4:
                printf("Digite o dividendo: ");
                scanf("%lf", &a);
                printf("Digite o divisor: ");
                scanf("%lf", &b);
                if (b != 0) {
                    resultado = a / b;
                    printf("Resultado: %.2lf\n", resultado);
                } else {
                    printf("Erro: Divisão por zero!\n");
                }
                break;

            case 5:
                printf("Digite a base: ");
                scanf("%lf", &a);
                printf("Digite o expoente: ");
                scanf("%lf", &b);
                resultado = pow(a, b);
                printf("Resultado: %.2lf\n", resultado);
                break;

            case 6:
                printf("Digite o número: ");
                scanf("%lf", &a);
                if (a >= 0) {
                    resultado = sqrt(a);
                    printf("Resultado: %.2lf\n", resultado);
                } else {
                    printf("Erro: Número negativo!\n");
                }
                break;

            case 7:
                printf("Digite dois números \n");
                printf("Digite o primeiro número: ");
                scanf("%lf", &a);
                printf("Digite o segundo número: ");
                scanf("%lf", &b);
                resultado = fmod(a, b);
                printf("Resultado: %.2lf\n", resultado);
                break;

            case 8:
                printf("Digite os coeficiente a: ");
                scanf("%lf", &a);
                printf("Digite os coeficiente b: ");
                scanf("%lf", &b);
                printf("Digite os coeficiente c: ");
                scanf("%lf", &c);
                delta = b * b - 4 * a * c;
                if (delta >= 0) {
                    x1 = (-b + sqrt(delta)) / (2 * a);
                    x2 = (-b - sqrt(delta)) / (2 * a);
                    printf("As raízes são: x1 = %.2lf e x2 = %.2lf\n", x1, x2);
                } else {
                    printf("Não existem raízes reais.\n");
                }
                break;

            case 9:
                printf("Encerrando a calculadora.\n");
                break;

            default:
                printf("Opção inválida!\n");
        }
    } while (opcao != 9);

    return 0;
}
