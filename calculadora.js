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
  const peso = parseFloat(req.body.weight)
  const altura = parseFloat(req.body.height)

  if (peso && altura) {
    const imc = peso / Math.pow(altura, 2)
    res.send(`IMC (kg/m²): ${imc}`)
  } else {
    console.log('Por favor, preencha todos os campos.')
    res.redirect('/')
  }
})

app.listen(porta, () => {
  console.log(`Servidor ouvindo na porta ${porta}.`)
})
