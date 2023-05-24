const Emitter = require('events')

const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
  console.log('Сообщение: ' + data)
  console.log('Второй параметр : ' + second)
})

const MESSAGE = process.env.message || ''

if (MESSAGE) {
  emitter.emit('message', MESSAGE, 123)
} else {
  emitter.emit('message', 'ну указали сообщение')
}