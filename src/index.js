const express = require('express');
const { v4: uuidv4 } = require ("uuid"); // Importando a lib uuid para gerar ids randomicos (v4)

const app = express(); 

// Middleware
app.use(express.json());

const customers = []; // Criando uma array para armazenar as contas 

/* Criando uma rota para conta */
app.post("/account", (request, response) => {
    const { cpf, name } = request.body;
    const id = uuidv4();

    // Adicionando os dados da conta na array
    customers.push({
        cpf,
        name,
        id,
        statement: []
    });

    //Retornando status 201 como resposta
    return response.status(201).send();

});

app.listen(3333);