const express = require('express');
const app = express();

app.use(express.json()); // Habilita o uso de JSON no corpo das requisições

// Banco de dados fictício com heróis da Liga da Justiça
let herois = [
    { id: 1, nome: "Superman", poder: "Super força" },
    { id: 2, nome: "Batman", poder: "Inteligência e tecnologia" },
    { id: 3, nome: "Mulher-Maravilha", poder: "Força e agilidade" },
    { id: 4, nome: "Flash", poder: "Super velocidade" },
    { id: 5, nome: "Aquaman", poder: "Comandar criaturas marinhas" }
];

// Rota de boas-vindas
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor da Liga da Justiça!');
});

// Rota dinâmica: Saudação personalizada
app.get('/saudacao/:nome', (req, res) => {
    const { nome } = req.params;
    res.send(`Olá, ${nome}! Bem-vindo à Liga da Justiça!`);
});

// Middleware de autenticação (simples)
function verificarToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token)
        return res.status(401).json({ erro: 'Acesso não autorizado! Token ausente.' });

    next();
}

// Rota protegida (só acessível com token)
app.get('/protegido', verificarToken, (req, res) => {
    res.json({ mensagem: 'Acesso permitido! Bem-vindo à Batcaverna secreta.' });
});

// Rota para buscar heróis com filtros (query params)
app.get('/herois', (req, res) => {
    const { nome, poder } = req.query;
    let resultado = herois;

    if (nome)
        resultado = resultado.filter(hero => hero.nome.toLowerCase().includes(nome.toLowerCase()));
    
    if (poder) 
        resultado = resultado.filter(hero => hero.poder.toLowerCase().includes(poder.toLowerCase()));

    if (resultado.length === 0)
        return res.json({ mensagem: "Nenhum herói encontrado." });
    
    res.json(resultado);
});

// Middleware de validação de heróis
function validarHeroi(req, res, next) {
    const { nome, poder } = req.body;

    if (!nome || !poder) {
        return res.status(400).json({ erro: 'Nome e poder são obrigatórios!' });
    }

    next();
}

// Rota para adicionar um novo herói
app.post('/herois', validarHeroi, (req, res) => {
    const novoHeroi = { id: herois.length + 1, ...req.body };
    herois.push(novoHeroi);
    res.status(201).json(novoHeroi);
});

//  Middleware de tratamento global de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ erro: 'Erro interno do servidor!' });
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
