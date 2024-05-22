const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    quarto: { type: mongoose.Schema.Types.ObjectId, ref: 'Quarto', required: true },
    dataCheckIn: { type: Date, required: true },
    dataCheckOut: { type: Date, required: true },
    status: { type: String, enum: ['pendente', 'confirmada', 'cancelada'], default: 'pendente' }
});

module.exports = mongoose.model('Reserva', reservaSchema);
