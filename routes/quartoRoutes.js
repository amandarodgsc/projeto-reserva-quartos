const express = require('express');
const router = express.Router();
const quartoController = require('../controllers/quartoController');

// Rota para listar todos os quartos
router.get('/', quartoController.listarQuartos);

// Rota para criar um novo quarto
router.post('/', quartoController.criarQuarto);

// Rota para atualizar um quarto existente
router.put('/:id', quartoController.atualizarQuarto);

// Rota para deletar um quarto
router.delete('/:id', quartoController.deletarQuarto);

module.exports = router;
