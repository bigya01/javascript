import http from 'http';
import fs from 'fs';
import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;

const filepath = path.join(__dirname, 'post-lists.json');

// Create HTTP server
const server = http.createServer((req, res) => {
    const id = req.url.split('/')[1];

    // Handle root URL
    if (req.url === '/') {
        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read file' }));
                return;
            }

            // Parse JSON and send response
            const posts = JSON.parse(data);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(posts));
        });
    } 
    // Handle specific post request
    else if (id) {
        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read file' }));
                return;
            }

            const posts = JSON.parse(data);
            const post = posts.find(p => p._id === id);
            if (post) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(post));
            } 
        });
    } 
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
