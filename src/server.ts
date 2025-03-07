
import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const server = http.createServer((req, res) => {
    const imagePath = path.join(__dirname, '/images/veryhappydog.jpg'); // Replace with your image path

    fs.readFile(imagePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Image not found');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'image/jpeg' }); // Change the content type based on your image format
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});