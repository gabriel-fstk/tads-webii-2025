const express = require('express');
const app = express();

app.use(express.json()); // Habilita o uso de JSON no corpo das requisi��es

// Banco de dados fict�cio com her�is da Liga da Justi�a
let herois = [
    { id: 1, nome: "Superman", poder: "Super for�a" },
    { id: 2, nome: "Batman", poder: "Intelig�ncia e tecnologia" },
    { id: 3, nome: "Mulher-Maravilha", poder: "For�a e agilidade" },
    { id: 4, nome: "Flash", poder: "Super velocidade" },
    { id: 5, nome: "Aquaman", poder: "Comandar criaturas marinhas" }
];

// Rota de boas-vindas
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor da Liga da Justi�a!');
});

// Rota din�mica: Sauda��o personalizada
app.get('/saudacao/:nome', (req, res) => {
    const { nome } = req.params;
    res.send(`Ol�, ${nome}! Bem-vindo � Liga da Justi�a!`);
});

// Middleware de autentica��o (simples)
function verificarToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token)
        return res.status(401).json({ erro: 'Acesso n�o autorizado! Token ausente.' });

    next();
}

// Rota protegida (s� acess�vel com token)
app.get('/protegido', verificarToken, (req, res) => {
    res.json({ mensagem: 'Acesso permitido! Bem-vindo � Batcaverna secreta.' });
});

// Rota para buscar her�is com filtros (query params)
app.get('/herois', (req, res) => {
    const { nome, poder } = req.query;
    let resultado = herois;

    if (nome)
        resultado = resultado.filter(hero => hero.nome.toLowerCase().includes(nome.toLowerCase()));
    
    if (poder) 
        resultado = resultado.filter(hero => hero.poder.toLowerCase().includes(poder.toLowerCase()));

    if (resultado.length === 0)
        return res.json({ mensagem: "Nenhum her�i encontrado." });
    
    res.json(resultado);
});

// Middleware de valida��o de her�is
function validarHeroi(req, res, next) {
    const { nome, poder } = req.body;

    if (!nome || !poder) {
        return res.status(400).json({ erro: 'Nome e poder s�o obrigat�rios!' });
    }

    next();
}

// Rota para adicionar um novo her�i
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
