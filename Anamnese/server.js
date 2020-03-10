const express = require('express')

const app = express()

const baseDir = `${__dirname}/www/`

app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = 5000

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))

