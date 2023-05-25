const http = require('http')
const EventEmitter = require('events')
module.exports = class Application {
  constructor() {
    this.emitter = new EventEmitter()
    this.server = this._createServer()
    this.middlewares = []
  }

  listen(port, callback) {
    this.server.listen(port, callback)
  }
  use(middleware) {
    console.log('Check1', middleware)
    this.middlewares.push(middleware)
    console.log('Check2', this.middlewares)

  }
  addRouter(router) {
    Object.keys(router.endpoints).forEach(path => {
      const endpoint = router.endpoints[path];
      Object.keys(endpoint).forEach((method) => {
        this.emitter.on(this._getRouterMask(path, method), (req, res) => {
          const handler = endpoint[method];
          handler(req, res)
        })
      })
    })
  }
  _createServer() {
    return http.createServer((req, res) => {
      let body = ""

      req.on("data", (chunk) => {
        body += chunk
      })
      req.on("end", () => {
        if (body) {
          req.body = JSON.parse(body)

        }
        this.middlewares.forEach(middleware => middleware(req, res))
        const emitted = this.emitter.emit(this._getRouterMask(req.pathname, req.method), req, res)
        // return res.end('Home')
        if (!emitted) {
          res.end()
        }
      })

    })
  }

  _getRouterMask(path, method) {
    return `[${path}]:[${method}]`
  }
}