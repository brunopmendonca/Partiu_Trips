const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const models = require('./models')
//const { default: Gastos } = require("./src/Gastos")

//const { all } = require("sequelize/types/lib/operators")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let user = models.User
let viagem = models.Viagem
let gasto = models.Gasto

app.post("/cadastro", async (req, res) => {

    let response = await user.findOne({
        where: { name: req.body.name, password: req.body.password }
    })

    // console.log(response)

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

app.post("/login", async (req, res) => {

    let response = await user.findOne({
        where: { name: req.body.name, password: req.body.password }
    })

    res.send(JSON.stringify(response))

})

app.post('/viagens', async (req, res) => {
    // console.log(req.body)
    let update = await user.findByPk(req.body.id, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response.Viagems))
        res.send(JSON.stringify(response.Viagems))
    })

})

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

app.post('/gasto', async (req, res) => {

    let update = await viagem.findByPk(req.body.id, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response.Gastos))
        res.send(JSON.stringify(response.Gastos))
    })

})

app.post('/gastoTotal', async (req, res) => {

    let update = await viagem.findByPk(req.body.id, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response.Gastos))
        res.send(JSON.stringify(response.Gastos.reduce((total, preco) => preco.valor + total, 0)))
    })

})

app.post('/restart', async (req, res) => {

    let update = await viagem.findByPk(req.body.id, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response.Gastos))
        res.send(JSON.stringify(response.Gastos))
    })

})

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



// app.post('/gasto', async (req, res) => {

//     let update = await viagem.findByPk(15, { include: [{ all: true }] }).then((response) => {
//        // console.log(JSON.stringify(response.Gastos))
//         res.send(JSON.stringify(response))
//     })



// })



let port = process.env.PORT || 3000

app.listen(port, (req, res) => {
    console.log("servidor rodando")
})


    //  console.log(req.body)

    // let create = await gasto.create({
    //     viagemId: req.body.id,
    //     lista: req.body.lista,
    //     valor: req.body.valor,
    //     quantidade: req.body.quantidade,
    //     createdAt: "1",
    //     updatedAt: "1"

    // })





// app.post("/cadastro", async (req, res) => {

//     let create = await user.create({
//         name: req.body.name,
//         password: req.body.password,
//         createdAt: "1",
//         updatedAt: "1"

//     })
//     res.send("servidor rodando")

//     console.log(req.body.name)

// })















// app.get('/create', async (req, res) => {
//     let create = await user.create({
//         name: "bruCesar",
//         password: "fghi",
//         createdAt: "1",
//         updatedAt: "1"

//     })
//     res.send("servidor rodando")
// })

// app.get('/read', async (req, res) => {
//     let read = await user.findAll()
//     console.log(read)
// })

// app.get('/update', async (req, res) => {
//     let update = await user.findByPk(1, {
//         include: [{ all: true }]
//     }).then((response) => {
//         console.log(response.Viagems[0])
//     })

// })