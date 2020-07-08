const fs = require('fs')

const caminho = __dirname + '/teste.csv'

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err) throw err
    console.log(conteudo)
})