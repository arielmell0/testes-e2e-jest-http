import { createServer } from 'http';

async function handler(request, response) {
    response.end('hello world')
}

export default createServer(handler)