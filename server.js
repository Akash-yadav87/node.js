
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <html>
        <head>
            <title>Node.js Server</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    background: #eef2ff;
                    padding: 80px;
                }
                .box {
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                }
                h1 { color: #174ea6; }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>Welcome to Node.js Server!</h1>
                <p>Server is running successfully.</p>
            </div>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
