const http = require('http');
const port = 3000; // Порт, на якому буде працювати сервер

// Створення HTTP-сервера
const server = http.createServer((req, res) => {
 res.statusCode = 200; // Код стану HTTP-відповіді
 res.end('Hello world!!!'); // Відправка відповіді
});

// Прослуховування порту та адреси сервера
server.listen(port, () => {
 console.log(`server start at http://localhost:${port}/`);
});
