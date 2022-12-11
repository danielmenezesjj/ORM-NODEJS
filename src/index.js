const express = require('express')
const routes = require('./routes')


const app = express();

routes(app);

const port = 3001


app.listen(port, () => console.log(`A api está rodando na porta ${port}`))

module.exports = app;