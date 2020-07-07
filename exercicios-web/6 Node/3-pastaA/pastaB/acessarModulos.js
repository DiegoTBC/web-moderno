const moduloA = require('../../1-moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao') // vai na pasta pasta node_modules, procura a pasta saudação
console.log(saudacao.ola) // e o arquivo index.js

const c = require('./pastaC')
console.log(c.ola2)

// Quando for modulos internos não precisa informar o caminho relativo
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)