# ?? API Express.js - Liga da Justiça

Esta API desenvolvida com **Express.js** implementa diversas funcionalidades como rotas GET, POST, middlewares, tratamento de erros e manipulação de dados com herois da **Liga da Justiça**.

## ?? Requisitos
Antes de iniciar, você precisará ter instalado:
- **Node.js** (>= v18)
- **npm** ou **yarn**

## ?? Instalação

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

## ?? Executando o Servidor
Para rodar o servidor, utilize:
```sh
npm start
# ou
node server.js
```
Por padrão, a API estará disponível em **http://localhost:3000**

---

## ?? Endpoints e Testes
Aqui estão os endpoints disponíveis e como testá-los usando **cURL** (alternativamente, você pode usar o **Postman** ou **Insomnia**):

### ?? 1. Boas-Vindas
**Rota:** `GET /`
```sh
curl http://localhost:3000/
```
**Resposta esperada:**
```json
{ "mensagem": "Bem-vindo à API da Liga da Justiça!" }
```

### ????? 2. Saudação Personalizada
**Rota:** `GET /saudacao/:nome`
```sh
curl http://localhost:3000/saudacao/Batman
```
**Resposta esperada:**
```json
{ "mensagem": "Olá, Batman!" }
```

### ?? 3. Middleware de Autenticação
**Rota protegida:** `GET /protegido`
```sh
curl -H "Authorization: Bearer token_valido" http://localhost:3000/protegido
```
Sem o token:
```sh
curl http://localhost:3000/protegido
```
**Resposta esperada (sem token):**
```json
{ "erro": "Acesso negado. Token não fornecido." }
```

### ?? 4. Listagem de herois
**Rota:** `GET /herois`
```sh
curl http://localhost:3000/herois
```
**Resposta esperada:**
```json
[
  { "id": 1, "nome": "Superman" },
  { "id": 2, "nome": "Batman" }
]
```

### ?? 5. Filtrar herois (Query Params)
**Rota:** `GET /herois?nome=Batman`
```sh
curl "http://localhost:3000/herois?nome=Batman"
```
**Resposta esperada:**
```json
[
  { "id": 2, "nome": "Batman" }
]
```

### ?? 6. Adicionar Novo Herói
**Rota:** `POST /herois`
```sh
curl -X POST http://localhost:3000/herois \
     -H "Content-Type: application/json" \
     -d '{ "nome": "Mulher Maravilha" }'
```
**Resposta esperada:**
```json
{ "id": 3, "nome": "Mulher Maravilha" }
```

### ? 7. Validação de Dados
Tente enviar um POST sem um nome válido:
```sh
curl -X POST http://localhost:3000/herois \
     -H "Content-Type: application/json" \
     -d '{}'
```
**Resposta esperada:**
```json
{ "erro": "O campo 'nome' é obrigatório." }
```

### ?? 8. Testando Tratamento Global de Erros
**Rota:** `GET /erro`
```sh
curl http://localhost:3000/erro
```
**Resposta esperada:**
```json
{ "erro": "Algo deu errado!" }
```

## ?? Tecnologias Utilizadas
- **Node.js** + **Express.js**
- Middleware de autenticação e tratamento de erros
- Manipulação de query params e JSON

## ?? Contribuição
Fique à vontade para contribuir enviando **Pull Requests** ou reportando problemas na aba **Issues**.

## ?? Licença
Este projeto está sob a licença **MIT**. Sinta-se livre para usá-lo e modificá-lo como quiser.

---
**Desenvolvido por [Gabriel Soares](https://github.com/gabriel-fstk)** ??

