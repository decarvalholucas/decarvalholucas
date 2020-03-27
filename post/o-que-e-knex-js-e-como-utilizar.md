---
title: "O que é Knex.js e como utilizar?"
date: "2020-03-26"
description: "Um poderoso query builder que vai mudar completamente a forma que você se comunica com bancos SQL"
---

Estou participando da décima primeira edição da Semana Omnistack da Rocketseat,
que por sinal está sendo sensacional. Se você está lendo este artigo em uma data futura a essa, possívelmente o evento já terminou. Estamos construindo uma aplicação completa, com o Backend desenvolvido com NodeJS, Front-end desenvolvido com ReactJS e o aplicativo Mobile, que está sendo desenvolvido com React Native.

A primeira parte da semana consiste em criar o backend, nele vamos fazer muitas consultas a banco de dados, e só de ler isso já vem o sentimento de preguiça e de complexidade em toda a arquitetura que você vai ter que pensar para fazer isso, não é mesmo?

Digo isso, porque, se para você é familiar trabalhar com bancos de dados SQL, quando precisamos fazer uma única consulta, faríamos basicamente assim:

```SQL
SELECT first_name,last_name FROM peoples WHERE id = "1"
```

Isso sendo apenas uma simples consulta e nem poderia ser utilizado diretamente em nosso código, na nossa aplicação, teríamos que montar uma estrutura por trás do nosso projeto para podermos utilizar códigos SQL e depois, para os códigos conseguirem se comunicar com os bancos de dados, etc... Só de pensar, já cansa, não é mesmo?

para isso, temos uma ferramenta muito poderosa que nos ajuda em toda interação que precisamos fazer com nosso banco de dados, o Knex JS.

## O que é Knex JS?

O Knex é um query builder, que procurando no Google, temos essa definição:

> Query Builder (Construtor de Consulta) Desenvolvido à partir do Database Access Objects, o query builder permite que você construa uma instrução SQL em um programático e independente de banco de dados

Ou seja, podemos utilizar nossa linguagem, aqui de exemplo o JavaScript, para fazer consultas, apagar, inserir, alterar dados em nossos bancos de dados, e o melhor, não importa qual banco de dados, podemos fazer utilizando o MySQL e depois se formos trocar pro SQLite por algum motivo, ele vai funcionar da mesma forma, não precisamos fazer o trabalho todo do 0 de novo, possívelmente iremos fazer algumas alterações em arquivos de configurações da ferramenta, informando a ela que alteramos o banco de dados e nada mais.

Os bancos que o Knex suporta são: Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift.

## Como é um exemplo de inserção de dados a um banco de dados com o Knex?

Depois de tudo configurado, e você pode olhar a documentação do Knex caso queira configurar e começar a utilizar em seu projeto, [clique aqui para ver a documentação oficial do Knex JS](http://knexjs.org/)

Neste exemplo irei utilizar NodeJS, primeiro precisamos configurar o banco de dados, e aqui vou utilizar o MySQL.

Criamos um arquivo chamado **knexfile.js**

Vamos supor que essa aplicação seja apenas para um teste que estamos fazendo, então não vamos configurar a mesma para produção nem nada, apenas para desenvolvimento. Preenchemos o knexfile.js desta forma:

```javascript
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "your_database_user",
      password: "your_database_password",
      database: "myapp_test",
    },
  },
}
```

A partir daqui nossa conexão com o banco de dados já está funcionando, o client é o MySQL, mas poderia ser qualquer um dos bancos listados acima.

No connection são as configurações do seu banco de dados, como, host, usuário, senha e o nome da database/schema.

Agora, suponha que tenhamos uma database e também uma tabela com nome de "usuarios",
precisamos inserir o nome e sobrenome desse usuário, então faríamos assim:

```javascript
const knex = require("knex");
const configuration = require("./knexfile.js");
const connection = knex(configuration.development);

const insertUser = async (firstname, lastname) => {
  await connection("usuarios").insert({
    firstname,
    lastname,
  });
};

insertUser("Lucas", "de Carvalho Alves");
```

E pronto, acabamos de criar de uma maneira muito simples, uma inserção de um usuário em nosso banco de dados.

Primeiro chamamos o knex, depois as configurações que fizemos no knexfile, executamos o knex com o arquivo de configurações e por final, criamos uma função de inserir usuário, ela por sinal é uma função assíncrona e utilizamos o connection na tabela usuarios com o método insert, passando os parâmetros vindo da função. Simples, não?

O melhor disso tudo, utilizamos desde o princípio, JavaScript. Somente isso.

E com isso, da para fazer um CRUD inteiro, com vários filtros e tipos de consultas. Peço que, se te interessou, [leia a documentação](http://knexjs.org/), use e abuse de estudar, isso é o mais importante de tudo.