const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const usuarioRoutes = require('./routes/usuarioRoutes');
const quartoRoutes = require('./routes/quartoRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const errorHandler = require('./utils/errorHandler'); // Importando errorHandler

const app = express();

// Conexão com o banco de dados
mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Middlewares
app.use(express.json());

// Rotas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/quartos', quartoRoutes);
app.use('/api/reservas', reservaRoutes);

// Middleware para lidar com erros
app.use(errorHandler);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
