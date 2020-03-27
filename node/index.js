const express = require('express');

const app = express();

app.use(express.json())

/**
 * Métod HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 */

/**
 * Tipos de Parametros
 * 
 * Query Params: Parametros Nomeados enviados na rota após o "?"(Simbolos, Paginação)
 * Route Params: Parametros utilizados para indentificar recursos
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
 */


app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body)

  return response.json({
    evento:'hello word',
    aluno:'Everton Reis',
    idade:40
  });
});
app.listen(3333);