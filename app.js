const express = require('expres'); // Importa o framework Express, que facilita a criação de APIs no Node.js
const app = express(); // Cria uma instância do app Express, que será usada para configurar o servidor
const cors = require('cors')

app.use(cors()); // Importa o middleware CORS para permitir requisições de outros domínios (ex: frontend separado do backend)
app.use(express.json());
// Middleware que permite o servidor entender dados em JSON enviados pelo body das requisições
// Necessário para que o backend entenda os dados enviados por POST, PUT, etc

// importa as rotas
const autorRoutes = require('./routes/livroRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const emprestimoRoutes = require('./routes/emprestimoRoutes');
const livroRoutes = require('./routes/livroRoutes');
const usuarioRoutes = require('./routes/categoriaRoutes');

// usa as rotas com prefixo
app.use('/autor', autorRoutes);
app.use('/categoria', categoriaRoutes);
app.use('/emprestimo', emprestimoRoutes);
app.use('/livro', livroRoutes);
app.use('/usuario', usuarioRoutes);

// porta servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}') // Inicia o servidor e exibe uma mensagem no console quando estiver pronto
});




