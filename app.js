const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, resposta) => {
  resposta.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Seervidor roddando na porta 3000 ${port}`)
})