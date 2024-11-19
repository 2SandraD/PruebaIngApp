const mongoose = require('mongoose');

const proyectointroductorioSchema = new mongoose.Schema({
    description: String,
    complete: Boolean
});

module.exports.Proyectointroductorio = mongoose.model('Proyectointroductorio', proyectointroductorioSchema)