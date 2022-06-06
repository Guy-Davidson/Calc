const express = require('express');
const path = require('path');

const app = express();
const calcRoute = express.Router();

let value = 0

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
})

app.get('/value', (req, res) => res.send(value.toString()))

app.use('/calc', calcRoute)

calcRoute.post('/plus', (req, res) => {    
    let digit = parseInt(req.query.digit)
    value += digit
    res.send(value.toString())
})

calcRoute.post('/minus', (req, res) => {    
  let digit = parseInt(req.query.digit)
  value -= digit
  res.send(value.toString())
})

calcRoute.post('/multiply', (req, res) => {    
  let digit = parseInt(req.query.digit)
  value *= digit
  res.send(value.toString())
})

app.use(express.static(path.resolve(__dirname, 'client', 'build')))

app.get('/calculator.html', (req, res) => {  
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))  
})
app.get('/readme.html', (req, res) => {  
  res.sendFile(`${__dirname}/readme.html`)  
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)  
})