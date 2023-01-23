const { Telegraf } = require('telegraf');
const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const port = 3000
const bot = new Telegraf("5873394409:AAGFCi1dYL8peZhx8idXElxJ-7mkQvcBrIk");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
// parse application/json
app.use(bodyParser.json())

app.post("/contact", (req, res) => {
    const { message, name, phone } = req.body;
    console.log(req.body)
    bot.telegram.sendMessage("1215214465", `Name: ${name}\n Message:${message} \n Phone: ${phone}   `, {
        parse_mode: "HTML"
    })
    res.redirect("/")
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})