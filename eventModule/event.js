//Event Emitter 
const events = require('events')
const { EventEmitter } = require('stream')

const ev = new EventEmitter()

// On - executa sempre ouvindo
// once -  executa uma única vez
ev.on('saySomething', (message) => {

    console.log("Evento ligado", message)


})
// Emitir evento
ev.emit('saySomething', "Paramentro na message" )
