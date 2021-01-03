var express = require('express');
var routes = express.Router();
var mongoose = require('mongoose');
var usuariosModel = mongoose.model('usuarios');
//Rotas
routes.get('/sensor',function(req,res){
    res.send({
        "codigo" : "123456",
        "nome" : "Sensor temperatura 1",
        "temperatura" : 36.7,
        "umidade" : 90,
        "coletas" : [8,11,15,19,20]
    })
})

routes.post('/login',function(req,res){
    var response = req.body;

    if(response.usuario == 'moacir' && response.senha == '123456'){
        res.send({
            "token" : '1231n2je21uieh129821n'
        })
    }else {
        res.send({
            'token' : ''
        })
    }    

    res.send('bem vindo ' + response.usuario);
})

routes.post('/cadastro',async function(req,res){
    var payload = req.body;
    var result = await usuariosModel.create(payload);
    res.json(result);
})

module.exports = routes;