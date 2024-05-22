const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Rota para listar todas as reservas
router.get('/', reservaController.listarReservas);

// Rota para criar uma nova reserva
router.post('/', reservaController.criarReserva);

// Rota para atualizar uma reserva existente
router.put('/:id', reservaController.atualizarReserva);

// Rota para deletar uma reserva
router.delete('/:id', reservaController.deletarReserva);

module.exports = router;
