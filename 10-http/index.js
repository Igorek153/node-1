const http = require('http');
const EventEmitter = require('events')
const PORT = 3333;
const emitter = new EventEmitter();
const Router = require('../framework/Router')
const Application = require('../framework/Application')
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


const app = new Application();
const router = new Router();

router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS')
})
console.log('router', router)
router.get('/posts', (req, res) => {
    res.end('YOU SEND REQUEST TO /POSTS')
})
app.addRouter(router)

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))