// Função para lidar com erros internos do servidor
const errorHandler = (err, req, res, next) => {
    console.error('Erro interno do servidor:', err);

    // Responder ao cliente com uma mensagem de erro genérica
    res.status(500).json({ message: 'Erro interno do servidor.' });
};

module.exports = errorHandler;
