var express = require('express');
var routes = express.Router();
var mongoose = require('mongoose');
var usuariosModel = mongoose.model('usuarios');
var Gpio = require('onoff').Gpio;
var LED = new Gpio(2, 'out'); 

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
  
routes.post('/led', function(req,res){
    var led = req.body.led;
    if(led){
        res.send('tentei ligar o led x2');
         LED.writeSync(1);
    }else{
        LED.writeSync(0);
        res.send('tentei desligar o led x2');
    }        
})
module.exports = routes;