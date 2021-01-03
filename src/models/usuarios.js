var mongoose = require('mongoose');
var ususariosSchema = mongoose.Schema({
    usuario : String,
    senha : String,
})

mongoose.model('usuarios', ususariosSchema);
