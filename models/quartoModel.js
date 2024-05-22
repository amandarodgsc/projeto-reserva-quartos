const mongoose = require('mongoose');

const quartoSchema = new mongoose.Schema({
    numero: { type: Number, required: true },
    tipo: { type: String, enum: ['standard', 'deluxe', 'suite'], required: true },
    precoPorNoite: { type: Number, required: true },
    disponibilidade: { type: Boolean, default: true }
});

module.exports = mongoose.model('Quarto', quartoSchema);
