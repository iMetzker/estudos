// CONTINUAÇÃO COM TRY - UTILIZANDO FINALLY ( BLOCO QUE SEMPRE  SERÁ EXECUTADO )

try {
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gero erro");
  console.log("Fechar o arquivo");
} catch (e) {
  console.log("Tratar o erro");
} finally {
  console.log("FINALLY: Eu sempre sou executado ( fechar o arquivo )");
}
