# Api ORM MYSQL 

* Npm init

* Npm install express

* Npm body-perser

* Npm install nodemon e vamos entrar na pasta package.json e adicionar em scripts "start": "nodemon ./src/index.js"

* Depois vamos instalar o sequelize: Npm install --save sequelize

* Nessa api eu utilizei o SQL-SERVER então eu instalei o mssql

* Instalei o sequelize-cli path 

* Vamos iniciar o sequelize para ele gerar as pastas de migrações, modelos, seeders e config com o seguinte comando: npx sequelize-cli init

* Vamos passar as pastas para dentro da pasta SRC e vamos criar um arquivo .sequelizerc com o seguinte comando 

```
const path = require('path');

module.exports = {
  'config': path.resolve('./src/config', 'config.json'),
  'models-path': path.resolve('./src/models'),
  'seeders-path': path.resolve('./src/seeders'),
  'migrations-path': path.resolve('./src/migrations')
}

```
#

* Vamos na pasta config que foi criada pelo sequelizecli e vamos definir o banco de dados que está sendo utilizado, segue as configurações que usei pro sqlserver

```
  "development": {
    "username": "sa",
    "password": "123456",
    "database": "Escola-Ingles",
    "host": "127.0.0.1",
    "dialect": "mssql"
  },
```

 #
 * Depois vamos criar os modelos atraves do sequelize com o seguinte codigo: npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:string,email:string,role:string. Estamos passandos o nome da tabela que no caso é "Pessoas" e os atributos da tabela.

 * Depois vamos migrar os modelos criado dando o seguinte comando: npx sequelize-cli db:migrate

 * Vamos criar o seed para popular o banco de dados com o seguinte codigo: npx sequelize-cli seed:generate --name demo-pessoa

 * Na pasta seeders vai ser gerado um seed demo com o seguinte codigo:


```
 'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	
  },

  async down (queryInterface, Sequelize) {

  }
};
```

#
* O seu up deve ser da seguinte forma:
```
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pessoas //nome da tabela', [
			{
		//Nome do atributo		        nome: 'Ana Souza',
		//Nome do atributo				ativo: "Ativo",
	    //Nome do atributo				email: 'ana@ana.com',
		//Nome do atributo				role: 'estudante',
		//Nome do atributo				createdAt: new Date(),
		//Nome do atributo				updatedAt: new Date()
			}
	], {})
  },

  ```

  #

  * Depois vamos inserir no banco de dados com o seguinte comando: npx sequelize-cli db:seed:all


  # Contraladores e rotas
  
  * Primeiro vamos criar a pasta controllers, a função do controller é ficar todos os "controles" que no caso é as funções, que no nosso projeto vai ser o famoso CRUD.

  * Vamos criar o arquivo PessoasController.js que vai conter uma class com as funções LISTA PESSOAS, DELETA PESSOA, ATUALIZA PESSOA E LISTA PESSOA ESPECIFICA.

```

  const database = require('../models')


class PessoaController{
   static async listaTodasAsPessoas(req, res){
    try{
        const todasAsPessoas = await database.Pessoas.findAll(); //esperando eu ir até o banco pegar as pessoas e voltar
        return res.status(200).json(todasAsPessoas)

    }catch(error){
        return res.status(500).json(error.message)
    }

    }
}

module.exports = PessoaController;
```

#

 * Vamos criar a pasta routes e criar um arquivo index nela para exportar as rotas que vão ser usada.
  
```
const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')


module.exports = app =>{
    app.use(bodyParser.json())
    app.use(pessoas)
}

```
