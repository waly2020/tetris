const http = require('http');
const fs = require('fs');
const path = require('path');

function start_html_server() {
    const hostname = '0.0.0.0';
    const port = 8080;

    const server = http.createServer(function(request, response) {
  
        const url = request.url === '/' ? '/index.html' : request.url;
        const filePath = path.join(__dirname, url);

        fs.readFile(filePath, (err, content) => {
            if (err) {
                response.writeHead(404);
                response.end();
            } else {
                response.writeHead(200, { 'Content-Type': getContentType(filePath) });
                response.write(content);
                response.end();
            }
        });
    }).listen(port, hostname, () => {
        console.log(`Server running at http://localhost:8080`);
    });
}

// Démarrer le serveur
start_html_server();

// Fonction pour déterminer le type de contenu en fonction de l'extension du fichier
function getContentType(filePath) {
    const extname = path.extname(filePath);
    
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/*';
        case '.jpg':
            return 'image/*';
        case '.wav':
            return 'audio/*';
        case '.mp3':
            return 'audio/*';
        default:
            return 'application/octet-stream';
    }
}
