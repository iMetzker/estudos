<p align="right">
  <a href="#configuração-de-ambiente-no-windows">Configurações de Ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#resoluções-dos-exercícios">Respostas dos Exercícios</a>
</p>

<br> <br>

# Repositório Acadêmico
![](https://img.shields.io/badge/c-000000?style=for-the-badge&logo=cc&logoColor=white)
![](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Algoritmo e Estrutura de Dados I
Este repositório é apenas para resoluções dos exercícios avaliativos propostos durante o período letivo.

> Faculdade Presidente Antonio Carlos - AlfaUnipac <br>
Graduação de nível superior em Sistemas de Informação <br>
Grade do 2º período<br>
Docente Maria Laura

## Configuração de Ambiente no Windows
Configurações iniciais para a compilação de códigos na linguagem C utilizando a IDE do VsCode. <br>

Para executar programas em C no VSCode, precisamos de um arquivo que vem junto com a instalação do DEVC++, este arquivo é o Mingw, faça o download e instalação dele. 
<br>
1. Faça o download do MinGW:
<br>
<img src="assets/t1-mingw.png">
<br> 
<img src="assets/t2-mingw.png">
<br>
2. Faça a instalação, seguindo os passos abaixo:
<br>
<img src="assets/t3-mingw.png">
<br>
<img src="assets/t4-mingw.png">
<br>
3. Nesta última tela, marque o pacote básico do MinGW, vá no canto superior da tela, selecione ``instalation`` e ``apply changes``:
<br>
<img src="assets/t5-mingw.png">

Após a instalação, iremos ter acesso ao executável gcc, que será o responsável pela compilação dos nossos códigos em C, este executável deve ser acessível em todo o nosso sistema, para isso:
<br>
1. Clique na barra de iniciar do Windows, digite 'variaveis de ambiente' e vá para as propriedades: 

<img src="assets/v1-sist.png">
<br>
<img src="assets/v2-sist.png">
<br>

2. Localize o Path dentro das variáveis do sistema, e clique em ``Editar``:

<img src="assets/v3-sist.png">

3. Clique em ``Procurar`` e entre na pasta bin do MinGw, para salvar o diretório dessa nova variável que será utilizada, que é o gcc. Após isso, clique me ``Ok`` e feche a aba:
<br>
<img src="assets/v4-sist.png">

## | Configurações do VSCode

1. Para execução dos programas em C no VSCode, adicione duas novas extensões: 
<br>
<img src="assets/t2-vscode.png">

2. Configure o VSCode a executar corretamente o gcc, atualizando o caminho utilizado no Terminal Integrated, que por default estará null. 

- Abra seu VSCode e vá nas configurações ``CTRL`` + ``,`` e digite na barra de pesquisa ``shell`` , localize o ``Terminal Integrated Default`` e mude para que execute no próprio promt do windows.

<br>
<img src="assets/t1-vscode.png">
<br>

Após seguir esses passos basta reiniciar o ambiente de desenvolvimento e seu VSCode já estará <b>pronto para compilar códigos em C utilizando a tecla F6.</b>

## Resoluções dos Exercícios
<table>
    <tr>
        <th>Lista de Exercícios - 01</th>
        <th>Lista de Exercícios - 02</th>
    </tr>
    <tr>
        <td><a href="./lista_01/questao_01.c">Questão 01</a></td>
        <td><a href="./lista_02/questao_01.c">Questão 01</a></td>
    </tr>
    <tr>
        <td><a href="./lista_01/questao_02.c">Questão 02</a></td>
        <td><a href="./lista_02/questao_02.c">Questão 02</a></td>
    </tr>
    <tr>
        <td><a href="./lista_01/questao_03.c">Questão 03</a></td>
        <td><a href="./lista_02/questao_03.c">Questão 03</a></td>
    </tr>
    <tr>
        <td><a href="./lista_01/questao_04.c">Questão 04</a></td>
        <td><a href="./lista_02/questao_04.c">Questão 04</a></td>
    </tr>
    <tr>
        <td><a href="./lista_01/questao_05.c">Questão 05</a></td>
        <td>-</td>
    </tr>
    <tr>
        <td><a href="./lista_01/questao_06.c">Questão 06</a></td>
        <td>-</td>
    </tr>
    
</table>

