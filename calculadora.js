const express = require('express')
const path = require('path')
const porta = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/bmiCalculator.html'))
})

app.post('/', (req, res) => {
  let peso = parseFloat(req.body.weight)
  let altura = parseFloat(req.body.height)
  let imc = peso / Math.pow(altura, 2)
  res.send(`IMC (kg/m²): ${imc}`)
})

app.listen(porta, () => {
  console.log(`Servidor ouvindo na porta ${porta}.`);
})