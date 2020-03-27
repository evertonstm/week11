### anotações###

/**
 *** Métod HTTP***
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 */

/**
 * ***Tipos de Parametros**
 * 
 * Query Params: Parametros Nomeados enviados na rota após o "?"(Simbolos, Paginação)
 * Route Params: Parametros utilizados para indentificar recursos
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
 */

***Banco De Dados**
SQL: MySQL, SQLite...

Driver: SELECT * FROM users

Query Builder: table('users).select(*).where()

### SQLITE
Criando os migrate da tabela create_ongs e create_incidents

❯ npx knex migrate:make create_ongs
❯ npx knex migrate:make create_incidents

***cria as tabelas no banco SQLITE
❯ npx knex migrate:latest

voltar a ultima migração
npx knex migrate:roollback


Mostra todas as migrações já efetuada
npx knex migrate:status