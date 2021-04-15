const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const models = require('./models')

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

app.get('/update', async (req, res) => {
    let update = await user.findByPk(1).then((response) => {
        response.name = "brubuno2"
        response.save()
        console.log(JSON.stringify(response))
    })

})



let port = process.env.PORT || 3000

app.listen(port, (req, res) => {
    console.log("servidor rodando")
})






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