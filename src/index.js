const express = require('express');
const { v4: uuidv4 } = require ("uuid"); // Importando a lib uuid para gerar ids randomicos (v4)

const app = express(); 

// Middleware
app.use(express.json());

const customers = []; // Criando uma array para armazenar as contas 

/* Criando uma rota para conta */
app.post("/account", (request, response) => {
    const { cpf, name } = request.body;

    const customerAlreadyExists = customers.some(
        (customer) => customer.cpf === cpf // Verificando se já existe um CPF no array returnado True ou False
); 

    if(customerAlreadyExists){ // Se a verificaçaõ for verdadeira, retorna o status code 400 com uma msg de erro
        return response.status(400).json({error: "Customer already exists! "})
    }


    // Adicionando os dados da conta na array
    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    //Retornando status 201 como resposta
    return response.status(201).send();

});

app.listen(3333);