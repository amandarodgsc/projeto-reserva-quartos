const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para registro de novo usuário
router.post('/registro', usuarioController.registrarUsuario);

// Rota para autenticação de usuário
router.post('/login', usuarioController.autenticarUsuario);

module.exports = router;
