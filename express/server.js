// http://localhost:3000
// http://localhost:3000/

// Forma antiga - Common js
// const express = require('express');

// Forma atualizada - ModuleES
import express from "express";
const app = express();

const hostname = "127.0.0.1" // localhost

const porta = 3000;

app.get('/', (request, response) => {
    response.send('Hello world, express!');
    response.status(200);
});

app.listen(porta, hostname, () => {
    console.log("O servidor está rodando: http://localhost:3000");
    
});




