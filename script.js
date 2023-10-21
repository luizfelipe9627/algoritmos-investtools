// 1. Escreva um programa que imprima no console “Hello World“.
console.log("Hello World");

// 2. Escreva um programa que imprima no console “meu nome é <seu nome>“.
function mostraNome() {
  const input = document.getElementById("input1");
  console.log("Meu nome é " + input.value);
}

// 3. Imprima a tabuada do número 5(de 1 a 10).
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + 5 * i);
}

// 4. Crie duas variáveis, nome e sobrenome, e concatene - as para formar o nome completo.
const nome = "Luiz Felipe";
const sobrenome = "Silva";
const nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

// 5. Converta uma string em letras maiúsculas.
const fruta = "Abacaxi";
const frutaMaiuscula = fruta.toUpperCase();
console.log(frutaMaiuscula);

// 6. Converta uma string em letras minúsculas.
const frutaMinuscula = fruta.toLowerCase();
console.log(frutaMinuscula);

// 7. Remova os espaços em branco de uma string.
const fraseComEspaco = "   Hello World   ";
const fraseSemEspaco = fraseComEspaco.trim();
console.log(fraseSemEspaco);

// 8. Substitua uma palavra em uma string por outra palavra.
const frase = "Hello World";
const fraseNova = frase.replace("World", "Mundo");
console.log(fraseNova);

// 9. Conte o número de caracteres em uma string.
const cidade = "São Paulo";
console.log(cidade.length);

// 10. Verifique se uma string contém uma determinada palavra.
const texto = "Um texto qualquer";
const contemTexto = texto.includes("texto");
console.log(contemTexto);

// 11. Separe uma string em substrings em todos os underscore(“_”) que ela possue.
const tecnologias = "HTML_CSS_JavaScript";
const tecnologiasArray = tecnologias.split("_");
console.log(tecnologiasArray);

// 12. Escreva um programa que tenha duas variáveis com números e mostre no console a soma desses números.
const num1 = 10;
const num2 = 5;
const soma = num1 + num2;
console.log(soma);

// 13. Escreva um programa que tenha duas variáveis com números e mostre no console o produto desses números.
const produto = num1 * num2;
console.log(produto);

// 14. Escreva um programa que tenha duas variáveis com números e mostre no console a média produto desses números.
const produtoMedia = (num1 + num2) / 2;

// 15. Escreva um programa que tenha uma variáveis com número e mostre no console o seu quadrado.
const num3 = 5;
const quadrado = num3 ** 2;
console.log(quadrado);

// 16. Escreva um programa que tenha duas variáveis uma varíavel altura e outra peso e imprima no console a o IMC a partir dessas duas variáveis.
const altura = 1.8;
const peso = 80;
const imc = peso / (altura ** 2);
console.log(imc);

// 17. Crie um programa que converta uma quantidade de metros para centímetros.
const metros = 10;
const centimetros = metros * 100;
console.log(centimetros);

// 18. Crie um programa que converta uma quantidade de segundos para minutos.
const segundos = 60; 
const minutos = segundos / 60;
console.log(minutos);

// 19. Crie um programa que verifique se um número é par.
const num4 = 10;
const par = num4 % 2 === 0;
console.log(par);

// 20. Crie um programa que transforme um ano de YYYY para YY. (Exemplo: 2023 → 23, 1994 → 94).
const ano = 2023;
const anoAbreviado = ano % 100;
console.log(anoAbreviado);

// 21. Crie um programa que informa se um ano é bissexto.
const anoBissexto = 2020;
const bissexto = anoBissexto % 4 === 0;
console.log(bissexto);
