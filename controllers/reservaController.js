const Reserva = require('../models/reservaModel');

// Função para listar todas as reservas
exports.listarReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        console.error('Erro ao listar reservas:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

// Função para criar uma nova reserva
exports.criarReserva = async (req, res) => {
    try {
        const novaReserva = new Reserva(req.body);
        await novaReserva.save();
        res.status(201).json({ message: 'Reserva criada com sucesso.' });
    } catch (error) {
        console.error('Erro ao criar reserva:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

// Função para atualizar informações de uma reserva
exports.atualizarReserva = async (req, res) => {
    try {
        await Reserva.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Reserva atualizada com sucesso.' });
    } catch (error) {
        console.error('Erro ao atualizar reserva:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

// Função para deletar uma reserva
exports.deletarReserva = async (req, res) => {
    try {
        await Reserva.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Reserva deletada com sucesso.' });
    } catch (error) {
        console.error('Erro ao deletar reserva:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};
