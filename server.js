var express = require('express');
var server = express();
var mongoose = require('mongoose');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//Config
server.use(express.json());
require('./src/models/usuarios');

//Database
mongoose.connect('mongodb+srv://admin:p@ssw0rd@cluster0.zrfrs.mongodb.net/maindb?retryWrites=true&w=majority', {useUnifiedTopology : true, useNewUrlParser : true})

//Rotas
server.use(require('./src/routes'));

server.listen(3002);
console.log('servidor ouvindo na porta 3002.');
