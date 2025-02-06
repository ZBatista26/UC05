
//Importando o express
const express = require('express');

// Inmportar a biblioteca dotenv
const dotenv = require('dotenv');

//criando as variaveis de aambiente
dotenv.config();

// criando um objeto chamado app
const aplicativo = express()

//Criando uma porta
const port = process.env.PORTA

// Meio termo - middlewarse
aplicativo.use(express.json())

// pegar - get
// postar - post
// atualizar - put
// Deletar - Delete 

const banco_dados = [];

// Rota de (listar) os proddutos 
aplicativo.get('/produtos', (req, res) => {
  res.json(banco_dados)
})

// Rota de (postagem) os produtos
aplicativo.post('/produtos', (req, res) => {
    const{id, nome, preco} = req.body; // passando na reqquisição o id, nome e preço

    const novoProduto = {id, nome, preco}; //  adicionando a variavel novoProduto os dados que enviei no body(corpo)

    banco_dados.push(novoProduto) // adicionando ao array banco_dados

    res.status(201).json({mensage: "Produto criado com sucesso"}) // adicionando uma resposta de sucesso se o recurso ou o produto for criado 
  })

aplicativo.listen(port, () => {
  console.log(`Seervidor rodando em http://localhost:${port}`)
})