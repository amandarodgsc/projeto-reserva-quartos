const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const Usuario = require('../models/usuarioModel');

// Função para registrar um novo usuário
exports.registrarUsuario = async (req, res) => {
    try {
        // Verificar se o e-mail já está em uso
        const usuarioExistente = await Usuario.findOne({ email: req.body.email });
        if (usuarioExistente) {
            return res.status(400).json({ message: 'E-mail já cadastrado.' });
        }

        // Criptografar a senha
        const senhaCriptografada = await bcrypt.hash(req.body.senha, 10);

        // Criar novo usuário
        const novoUsuario = new Usuario({
            nome: req.body.nome,
            email: req.body.email,
            senha: senhaCriptografada,
            tipoUsuario: req.body.tipoUsuario
        });

        // Salvar usuário no banco de dados
        await novoUsuario.save();
        res.status(201).json({ message: 'Usuário registrado com sucesso.' });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

// Função para autenticar usuário
exports.autenticarUsuario = async (req, res) => {
    try {
        // Encontrar usuário pelo e-mail
        const usuario = await Usuario.findOne({ email: req.body.email });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Verificar a senha
        const senhaValida = await bcrypt.compare(req.body.senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ message: 'Senha incorreta.' });
        }

        // Gerar token JWT
        const token = jwt.sign({ id: usuario._id }, config.secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};
