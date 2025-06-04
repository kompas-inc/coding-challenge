import http from 'http';
import { app } from './app';


async function main() {
    console.log('Server starting...');
    const server = http.createServer(app);
    server.setTimeout(120000);

    const port = process.env.PORT || 3001;
    server.listen(port, () => console.log(`Server: listening on port ${port}`));
}

main();
