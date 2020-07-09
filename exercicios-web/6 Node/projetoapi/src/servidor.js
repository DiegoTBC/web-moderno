// cada aplicação usa uma porta
const porta = 3003

const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//* A requisição passaria por aqui primeiro
//* Se o next() for tirado, a requisição não terá exito
//* pois essa função nao envia/retorna nada
/*app.get('/produtos', (req, res, next) => {
    console.log('MIddleware 1')
    next()
})*/

//* Outra forma de colocar um middleware na requisição
//* Esse middleware será atendido para TODAS as requisições
//* Todas as requisições passarão por ele
//* Não precisa indicar um endereço
/*app.use((req, res, next) => {
    console.log("Passou pelo metodo USE")
    //res.send({nome: "Notebook", preco: 123.45})
    next()
 })*/

app.use(bodyParser.urlencoded({extended: true}))

 //Metodo get = obtem alguma informação do servidor
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Convete para JSON
})

// Os dois pontos indicam a passagem de um parametro na url
app.get('/produtos/:id', (req, res, next) => {
    //o parametro vem da requisição
    // req.params é o local onde ficam os parametros colocados na url
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        // req.body = pega as infos do corpo da requisição
        nome: req.body.nome,
        preco: req.body.preco   
    })
    res.send(produto) //converte para json
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        // req.body = pega as infos do corpo da requisição
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco   
    })
    res.send(produto) //converte para json
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //converte para json
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})