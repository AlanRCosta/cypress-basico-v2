# Cypress-basico

[![main](https://github.com/wlsf82/cy-data-test/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/cy-data-test/actions)

Projeto básico para estudo de cypress.

## Pre-requisitos

É necessário ter Node.js e npm instalados para executar este projeto.

> Usei as versões 16.17.0 e 8.15.0 do Node.js e npm, respectivamente. Eu sugiro que você use as mesmas versões ou versões posteriores.

⚠️ Se vocë estiver usando Linux será necessário a instalação de algumas dependências.
Para a instalação dessas dependências, execute o comando:

```shell
 apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

Para mais informações sobre, acesse: https://docs.cypress.io/guides/continuous-integration/introduction#UbuntuDebian.


## Instalação

Exeute `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento.

## Testes

Você pode executar os testes simulando uma viewport desktop ou mobile.


#### Desktop

Execute `npm test` (ou `npm t` para a versão curta) para executar o teste no modo headless.

Ou, execute `npm run cy:open` para abrir o Cypress no modo interativo.


#### Mobile

Execute `npm run test:mobile` para executar o teste no modo headless.

Ou, execute `npm run cy:open:mobile` para abrir o Cypress no modo interativo.

