# ?? API Express.js - Liga da Justi�a

Esta API desenvolvida com **Express.js** implementa diversas funcionalidades como rotas GET, POST, middlewares, tratamento de erros e manipula��o de dados com herois da **Liga da Justi�a**.

## ?? Requisitos
Antes de iniciar, voc� precisar� ter instalado:
- **Node.js** (>= v18)
- **npm** ou **yarn**

## ?? Instala��o

1. Clone o reposit�rio:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd nome-do-projeto
   ```
3. Instale as depend�ncias:
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
Por padr�o, a API estar� dispon�vel em **http://localhost:3000**

---

## ?? Endpoints e Testes
Aqui est�o os endpoints dispon�veis e como test�-los usando **cURL** (alternativamente, voc� pode usar o **Postman** ou **Insomnia**):

### ?? 1. Boas-Vindas
**Rota:** `GET /`
```sh
curl http://localhost:3000/
```
**Resposta esperada:**
```json
{ "mensagem": "Bem-vindo � API da Liga da Justi�a!" }
```

### ????? 2. Sauda��o Personalizada
**Rota:** `GET /saudacao/:nome`
```sh
curl http://localhost:3000/saudacao/Batman
```
**Resposta esperada:**
```json
{ "mensagem": "Ol�, Batman!" }
```

### ?? 3. Middleware de Autentica��o
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
{ "erro": "Acesso negado. Token n�o fornecido." }
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

### ?? 6. Adicionar Novo Her�i
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

### ? 7. Valida��o de Dados
Tente enviar um POST sem um nome v�lido:
```sh
curl -X POST http://localhost:3000/herois \
     -H "Content-Type: application/json" \
     -d '{}'
```
**Resposta esperada:**
```json
{ "erro": "O campo 'nome' � obrigat�rio." }
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
- Middleware de autentica��o e tratamento de erros
- Manipula��o de query params e JSON

## ?? Contribui��o
Fique � vontade para contribuir enviando **Pull Requests** ou reportando problemas na aba **Issues**.

## ?? Licen�a
Este projeto est� sob a licen�a **MIT**. Sinta-se livre para us�-lo e modific�-lo como quiser.

---
**Desenvolvido por [Gabriel Soares](https://github.com/gabriel-fstk)** ??

