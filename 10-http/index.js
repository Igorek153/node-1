const PORT = 3333;
const Application = require('../framework/Application')
const userRouter = require('../src/user-router')
const parseUrl = require('../framework/parseurl')
const parseJson = require('../framework/parseJson')

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

app.use(parseJson)
app.use(parseUrl('http:/localhost:3333'))
app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))