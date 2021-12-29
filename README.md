![compass](https://github.com/pedrohmenezes1/Compass-UOL/blob/master/compass.png?raw=true "Compass")
<img align="right" width="300" src="https://i2.wp.com/allhtaccess.info/wp-content/uploads/2018/03/programming.gif?fit=1281%2C716&ssl=1" />


<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pedrohmenezes1/Compass-UOL?color=%2304D361">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pedrohmenezes1/Compass-UOL">
  <img alt="Status" src="https://img.shields.io/badge/Status-Completed-brightgreen">
    <img alt="ES6" src="https://img.shields.io/badge/JS-ECMAScript%206-red">
</p>

# 💻 REST API em Node.js e Express.js - API Bloco de notas

Nesta aplicação foram implementadas as seguintes fucionalidades: criação de projetos, listagem de projetos, atualização de projetos e exclusão de projetos, criação de um array de tarefas para um projeto, listagem, atualização e exclusão de tarefas.

## 🛠 Tecnologias Utilizadas

- [x] [Node.js](https://nodejs.org/en/)

- [x] [Postman](https://www.postman.com)

- [x] [MongoDB](https://www.mongodb.com)

- [x] [VS Code](https://code.visualstudio.com)

## 🚀 Dependências

- [x] Express

- [x] Mongoose

- [x] Body-Parser

- [x] Nodemon (não é pré-requisito, mas facilita o uso)

## 🧭 Guia 

1. É necessário clonar o repositório com o comando `git clone https://github.com/pedrohmenezes1/Compass-UOL`

2. Instalar todas as dependências utilizando `npm install dependencies` ou `yarn install dependencies`

3. Recomendo instalar o nodemon, utilizando `npm install nodemon` ou `yarn install nodemon`

4. Após isso rodar a aplicação utilizando `nodemon src/index.js`

## Arquitetura REST

A seguir está uma configuração genérica de local host na porta 3000(que pode ser alterado na pasta config):

- Listagem de projetos - GET: http://localhost:3000/api/compasso/projects/

Em caso de sucesso retorna todos os projetos já cadastrados no banco de dados, cada projeto no formato JSON, contendo title, description e um array de tasks, caso der erro retorna um status (400) `Error loading projects`.

- Adicionar projeto e tarefa - POST: http://localhost:3000/api/compasso/projects/

Adiciona um projeto e tarefa ao banco de dados, sendo necessário inserir o title, description e um array de tasks com title e taskRelevance. O Id do projeto é gerado automaticamente, Em caso de erro retorna um status(400) `Error creating new project`.

- Exemplo:
`{
    "title": "Novo projeto",
    "description": "Descrição do projeto",
    "tasks": [
       {
           "title": "Nova Tarefa",
           "taskRelevance": "10"
       },
       {
           "title": "Nova Tarefa2",
           "taskRelevance": "10"
       }      
    ]
}` 

- Buscar projeto e tarefas por Id - GET: http://localhost:3000/api/compasso/projects/{inserir-id-aqui}

Utiliza o Id gerado automaticamente quando o projeto é adicionado ao banco de dados. Retorna o arquivo no formato JSON com sucesso caso exista. Para essa busca é necessário inserir o Id após /project, para ver o Id de um projeto é preciso listar todos os projetos como foi mostrado acima, caso de erro retorna um status (400) `Error loading project`.

- Deletar um projeto por Id - DELETE: http://localhost:3000/api/compasso/projects/{inserir-id-aqui}.

- Atualizar projetos e tarefas - PUT: http://localhost:3000/api/compasso/projects/{inserir-id-aqui}.

## Testes

Foram totalmente realizados no ambiente automatizado do Postman, onde foi criado uma collection com 5 testes, comprovando o sucesso de cada funcionalidade. Os testes que foram feitos nesse caso podem ser vistos no arquivo Desafio-API.postman_collection. O Postman é uma ferramenta extremamente útil para se testar manualmente ou automatizar os testes de qualquer API REST.

## Créditos

<p align="center">
  <a href="https://rocketseat.com.br">
    <img src="https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo_roxa.png" alt="Logo">
  </a>

  <h3 align="center">Cursos Rocketseat</h3>
</p>

## 📝 Instrutores e ScrumMaster

- Instrutores:

bruna.santos@compasso.com.br

felipe.santos@compasso.com.br

- ScrumMasters:
 
thais.nicodemus@compasso.com.br

giovanni.hoffmann@compasso.com.br

diego.scacinate@compasso.com.br
