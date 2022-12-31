// aqui vamos ralizar a configuração com o mongo
const mongoose = require('mongoose')

/*
Realiza conexão com o mongo, enviando os comandos:
insert, update, delete
*/

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')

mongoose.version()