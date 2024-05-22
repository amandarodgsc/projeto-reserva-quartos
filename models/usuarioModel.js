const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    tipoUsuario: { type: String, enum: ['admin', 'cliente'], default: 'cliente' }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
