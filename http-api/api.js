import http from 'http';
import cors from 'cors';

// Host e Porta
const hostname = 'localhost';
const port = 3000;

// Servidor com Endpoints da API
const server = http.createServer((request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST'); 
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Rota para a página Home
    if (request.method === 'GET' && request.url === '/') {
        response.statusCode = 200; // OK

        response.setHeader('Content-Type', 'text/json');
        response.json({message: 'Hello World!!! '})
        // response.end('<h2>Home</h2>');

    // Rota para a página Sobre
    } else if (request.method === 'GET' && request.url === '/sobre') {
        response.statusCode = 200; // OK

        response.setHeader('Content-Type', 'text/html');
        response.end('<h2>Sobre</h2>');
    
    // Rota para a página Cadastro de Usuário
    } else if (request.method === 'POST' && request.url === '/cadastro-usuario') {
        response.statusCode = 200; // OK
        response.setHeader('Content-Type', 'text/html');
        response.end('<h2>Cadastro de Usuário</h2>');
    
    } else {
        response.statusCode = 404;  // Not Found (página não encontrada)
        response.setHeader('Content-Type', 'text/html');
        response.end('<h2>404 - Página não encontrada</h2>');
    }
});

server.listen(port, hostname, () => {
    // console.log(`Servidor rodando em http://localhost:3000/`);
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
