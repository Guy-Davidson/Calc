const express = require('express');
const path = require('path');

const app = express();

let value = 0

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/value', (req, res) => res.send(value.toString()))

app.post('/plus', (req, res) => {    
    let digit = parseInt(req.query.digit)
    value += digit
    res.send(value.toString())
})

app.post('/minus', (req, res) => {    
  let digit = parseInt(req.query.digit)
  value -= digit
  res.send(value.toString())
})

app.post('/multiply', (req, res) => {    
  let digit = parseInt(req.query.digit)
  value *= digit
  res.send(value.toString())
})

app.use(express.static(path.resolve(__dirname, 'client', 'build')))
app.get('/calculator.html', (req, res) => {  
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))  
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)  
}) 

const handleError = (err) => {
    console.log(err);
}