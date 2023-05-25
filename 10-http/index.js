const http = require('http');
const EventEmitter = require('events')
const PORT = 3000;
const emitter = new EventEmitter();
// const server = http.createServer((req, res) => {
//     // res.writeHead(200, {
//     //     'Content-type': 'text/html; charset=utf-8'
//     // })
//     res.writeHead(200, {
//             'Content-type': 'application/json'
//         })
//     if (req.url === '/users') {
//         return res.end(JSON.stringify([
//             {id: 1, name: 'Ihor'}
//         ]))
//     }
//     if (req.url === '/posts') {
//         return res.end('Posts')
//     }
//     return res.end('Home')
//
// })

class Router {
    constructor() {
        // endpoints = {
        //     '/users': {
        //         'GET': handler1,
        //         'POST': handler2,
        //         'DELETE': handler3,
        //     }
        // }

        this.endpoints = {}
    }

    request(method = 'GET', path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path];

        if (endpoint[method]) {
            throw new Error(`[${method}] по адресу ${path} уже есть`)
        }
        endpoint[method] = handler
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            handler(req, res)
        })
    }

    get(path, handler) {
        this.request('GET', path,handler)
    }
    post(path, handler) {
        this.request('POST', path,handler)
    }
    put(path, handler) {
        this.request('PUT', path,handler)
    }
    delete(path, handler) {
        this.request('DELETE', path,handler)
    }
}

const router = new Router();

router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS')
})

router.get('/posts', (req, res) => {
    res.end('YOU SEND REQUEST TO /POSTS')
})

const server = http.createServer((req, res) => {
    const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
    // return res.end('Home')
    if (!emitted) {
        res.end()
    }
})

server.listen(PORT, () => console.log('server started on PORT = ', PORT))