# Meu primeiro teste unitário

## Stacks utilizadas
 **Desenvolvimento:**
 
 [![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()
 [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
 [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()

 **Testes:**

 [![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)]()
 [![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)]()
 [![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)]()

## Instalação

 ```
 git clone https://github.com/davisonalves/learning-unit-tests.git
 npm install
 npm run test
 ```
 **Observação**: É um pré-requisito ter git e node instalados para clonar o repositório e rodar os testes.

## Sobre a aplicação
A aplicação se trata de uma calculadora com funções simples como:
1. Inserção de valores
2. Apagar o último valor digitado
3. Apagar todos os valores digitados
4. E as operações básicas de soma, subtração, multiplicação e divisão.
---
![Calculadora](https://i.imgur.com/g1GEiQO.jpg)

## Sobre os testes
Os testes foram baseados nas funcionalidades descritas acima, e pensados de forma analitica com as técnicas de partição de equivalência e experiência do testador.

---
![Execução dos testes](https://i.imgur.com/vtsEsmjl.png)

## Considerações finais e meu aprendizado
No início tive muitos problemas tentando rodar os testes e entender qual seria a lógica por trás deles, porém no caminho descobri que essa era a parte mais simples e que o problema era meu código que não estava bom o suficiente para ser testado. Então a primeira coisa que tive que fazer antes de rodar o Jest foi implementar melhorias para que isso fosse possivel, com isso segui o principio do TDD, onde escrevi primeiro como eu imaginava o meu teste, refatorei meu código, e depois de executar realizei ajustes tanto no teste quanto no código para que tudo funcionasse.

Vi na prática agora o quanto os testes unitários contribuem para a qualidade do nosso código desenvolvido, pois ele nos mostra onde precisamos de melhorias e refatoração. E sem contar que pra saber se algo continua funcionando após implementar uma nova feature é muito mais fácil rodar os testes unitários do que lembrar e executar todos os cenários manualmente denovo.

E se você chegou até aqui, muito obrigado ❤️