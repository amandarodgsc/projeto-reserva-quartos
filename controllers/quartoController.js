const Quarto = require('../models/quartoModel');

// Função para listar todos os quartos
exports.listarQuartos = async (req, res) => {
    try {
        const quartos = await Quarto.find();
        res.status(200).json(quartos);
    } catch (error) {
        console.error('Erro ao listar quartos:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

// Função para criar um novo quarto
exports.criarQuarto = async (req, res) => {
    try {
        const novoQuarto = new Quarto(req.body);
        await novoQuarto.save();
        res.status(201).json({ message: 'Quarto criado com sucesso.' });
    } catch (error) {
        console.error('Erro ao criar quarto:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

// Função para atualizar informações de um quarto
exports.atualizarQuarto = async (req, res) => {
    try {
        await Quarto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Quarto atualizado com sucesso.' });
    } catch (error) {
        console.error('Erro ao atualizar quarto:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

// Função para deletar um quarto
exports.deletarQuarto = async (req, res) => {
    try {
        await Quarto.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Quarto deletado com sucesso.' });
    } catch (error) {
        console.error('Erro ao deletar quarto:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};
