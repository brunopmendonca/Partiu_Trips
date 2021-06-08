const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const models = require('./models')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let user = models.User
let viagem = models.Viagem
let gasto = models.Gasto

// ***********************************************************************************//

// logar usuario
app.post("/login", async (req, res) => {


    console.log(req.body)

    let response = await user.findOne({
        where: { name: req.body.name, password: req.body.password }
    })

    console.log(response)
    res.send(JSON.stringify(response))
    // res.write("nada")



})


// Cadastrar usuario 
app.post("/verificarUsuario", async (req, res) => {

    let response = await user.findOne({
        where: { name: req.body.name }
    })

    if (response == null) {
        res.send(JSON.stringify("usuario Cadastrado"))
    } else (
        res.send(JSON.stringify("Nome de usuario ja existe"))
    )

})


// ***********************************************************************************//

// Cadastrar usuario 
app.post("/cadastro", async (req, res) => {

    let response = await user.findOne({
        where: { name: req.body.name, password: req.body.password }
    })

    if (response == null) {
        res.send(JSON.stringify("cadastro feito com sucesso"))
        let create = user.create({
            name: req.body.name,
            password: req.body.password,
            createdAt: "1",
            updatedAt: "1"

        })

    } else (
        res.send(JSON.stringify("ja possui cadastro"))
    )

})

// ***********************************************************************************//

// mostrar viagens
app.post('/viagens', async (req, res) => {
    // console.log(req.body)
    let update = await user.findByPk(req.body.id, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response.Viagems))
        res.send(JSON.stringify(response.Viagems))
    })

})

// ***********************************************************************************//

// cadastrar nova viagem
app.post('/lista', async (req, res) => {

    console.log(req.body)

    let create = viagem.create({
        ida: req.body.ida,
        volta: req.body.volta,
        imagem: req.body.imagem,
        userId: req.body.user,
        lugar: req.body.lugar,
        createdAt: "1",
        updatedAt: "1"

    })

    let update = await user.findByPk(req.body.user, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response))
        res.send(JSON.stringify(response))
    })



})

// ***********************************************************************************//

// Mostrar gastos
app.post('/gasto', async (req, res) => {

    let update = await viagem.findByPk(req.body.id, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response.Gastos))
        res.send(JSON.stringify(response.Gastos))
    })

})

// ***********************************************************************************//

// Mostrar toatal de gastos
app.post('/gastoTotal', async (req, res) => {

    let update = await viagem.findByPk(req.body.id, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response.Gastos))
        res.send(JSON.stringify(response.Gastos.reduce((total, preco) => preco.valor + total, 0)))
    })

})

// ***********************************************************************************//

// Restart da pagina e carregar informaçoes atualizadas.
app.post('/restart', async (req, res) => {

    let update = await viagem.findByPk(req.body.id, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response.Gastos))
        res.send(JSON.stringify(response.Gastos))
    })

})

// ***********************************************************************************//

// cadastrar novos gastos
app.post('/enviarGasto', async (req, res) => {

    console.log(req.body)

    let create = await gasto.create({

        lista: req.body.lista,
        viagemId: req.body.viagemId,
        valor: req.body.valor,
        quantidade: req.body.quantidade,
        valorInicial: req.body.valorInicial,

    })

    let update = await viagem.findByPk(req.body.viagemId, { include: [{ all: true }] }).then((response) => {

        console.log(JSON.stringify(response.Gastos))
        res.send(JSON.stringify(response.Gastos))
    })

})

// ***********************************************************************************//

// Deletar gastos
app.post('/deletarGasto', async (req, res) => {
    console.log(req.body)
    let deletar = await gasto.destroy({
        where: { id: req.body.id }
    })

    let update = await viagem.findByPk(req.body.viagemId, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response.Gastos))
        res.send(JSON.stringify(response.Gastos))
    })

})

// ***********************************************************************************//

// adicionar quantidade do produto --- botao +
app.post('/adicionarQuantidade', async (req, res) => {
    console.log(req.body)
    let update = await gasto.findAll({
        where: { viagemId: req.body.viagemId }
    }).then((response) => {
        let indexId = response.findIndex(a => {
            return a.id == req.body.id
        })
        response[indexId].quantidade = response[indexId].quantidade + 1
        response[indexId].valor = response[indexId].valorInicial * response[indexId].quantidade
        response[indexId].save()
        res.send(JSON.stringify(response))


    })


})

// ***********************************************************************************//

// Subtrair quantidade do produto --- botão -
app.post('/retirarQuantidade', async (req, res) => {
    console.log(req.body)
    let update = await gasto.findAll({
        where: { viagemId: req.body.viagemId }
    }).then((response) => {
        let indexId = response.findIndex(a => {
            return a.id == req.body.id
        })

        if (response[indexId].quantidade > 1 || [indexId].quantidade == 1) {

            response[indexId].quantidade = response[indexId].quantidade - 1
            response[indexId].valor = response[indexId].valorInicial * response[indexId].quantidade
            response[indexId].save()
            res.send(JSON.stringify(response))

        }

    })


})

// ***********************************************************************************//

// Mudar Senha 
app.post('/TrocarSenha', async (req, res) => {
    console.log(req.body)

    let update = await user.findOne({
        where: { name: req.body.name }
    }).then((response) => {
        response.password = req.body.password
        response.save()
    })

})

// ***********************************************************************************//



let port = process.env.PORT

app.listen(port, (req, res) => {
    console.log("servidor rodando")
    // res.write("funcionando")

})

