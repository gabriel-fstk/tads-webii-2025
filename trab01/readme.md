# 🚀 API Express.js - Liga da Justiça

Esta API desenvolvida com **Express.js** implementa diversas funcionalidades como rotas GET, POST, middlewares, tratamento de erros e manipulação de dados com herois da **Liga da Justiça**.

## 📌 Requisitos
Antes de iniciar, você precisará ter instalado:
- **Node.js** (>= v18)
- **npm** ou **yarn**

## 📌 Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd nome-do-projeto
   ```
3. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```

## 📌 Executando o Servidor
Para rodar o servidor, utilize:
```sh
npm run dev
# ou
node src/server.js
```
Por padrão, a API estará disponível em **http://localhost:3000**

---

## 📌 Endpoints e Testes (Postman)
Para testar os endpoints, utilize o **Postman** seguindo os passos abaixo:

1. **Abra o Postman**.
2. **Crie uma nova requisição** e insira a URL correspondente.
3. **Escolha o método correto (GET, POST, etc.)**.
4. **Caso necessário, adicione cabeçalhos ou corpo da requisição**.
5. **Clique em "Send"** e visualize a resposta.

### 🏠 1. Boas-Vindas
- **Método:** `GET`
- **URL:** `http://localhost:3000/`
- **Resposta esperada:**
```json
{ "mensagem": "Bem-vindo à API da Liga da Justiça!" }
```

### 🦸‍♂️ 2. Saudação Personalizada
- **Método:** `GET`
- **URL:** `http://localhost:3000/saudacao/Batman`
- **Resposta esperada:**
```json
{ "mensagem": "Olá, Batman!" }
```

### 🔐 3. Middleware de Autenticação
- **Método:** `GET`
- **URL:** `http://localhost:3000/protegido`
- **Cabeçalho:**
  - **Chave:** Authorization
  - **Valor:** Bearer 12345
- **Resposta esperada sem token:**
```json
{ "erro": "Acesso negado. Token não fornecido." }
```

### 📋 4. Listagem de Herois
- **Método:** `GET`
- **URL:** `http://localhost:3000/herois`
- **Resposta esperada:**
```json
[
  { "id": 1, "nome": "Superman" },
  { "id": 2, "nome": "Batman" }
]
```

### 🔍 5. Filtrar herois (Query Params)
- **Método:** `GET`
- **URL:** `http://localhost:3000/herois?nome=Batman`
- **Resposta esperada:**
```json
[
  { "id": 2, "nome": "Batman" }
]
```

### ✍️ 6. Adicionar Novo Herói
- **Método:** `POST`
- **URL:** `http://localhost:3000/herois`
- **Cabeçalho:**
  - **Chave:** Content-Type
  - **Valor:** application/json
- **Corpo da requisição (JSON):**
```json
{
  "nome": "Mulher Maravilha",
  "poder": "Força e inteligência"
}
```
- **Resposta esperada:**
```json
{ "id": 3, "nome": "Mulher Maravilha", "poder": "Força e inteligência" }
```

### ❌ 7. Validação de Dados
- **Método:** `POST`
- **URL:** `http://localhost:3000/herois`
- **Cabeçalho:**
  - **Chave:** Content-Type
  - **Valor:** application/json
- **Corpo da requisição (JSON) inválido:**
```json
{}
```
- **Resposta esperada:**
```json
{ "erro": "Nome e poder são obrigatórios!" }
```

### ⚠️ 8. Testando Tratamento Global de Erros
- **Método:** `GET`
- **URL:** `http://localhost:3000/erro`
- **Resposta esperada:**
```json
{ "erro": "Erro interno do servidor!" }
```

## 📌 Tecnologias Utilizadas
- **Node.js** + **Express.js**
- Middleware de autenticação e tratamento de erros
- Manipulação de query params e JSON

## 📌 Contribuição
Fique à vontade para contribuir enviando **Pull Requests** ou reportando problemas na aba **Issues**.

## 📌 Licença
Este projeto está sob a licença **MIT**. Sinta-se livre para usá-lo e modificá-lo como quiser.

---
**Desenvolvido por [Gabriel Soares](https://github.com/gabriel-fstk)** 🚀

