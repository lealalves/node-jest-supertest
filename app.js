const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.use(express.json())

app.get('/pokemon/:nome?', async (req, res) => {
  const pokeName = req.params.nome
  if(!pokeName){
    return res.sendStatus(404)
  }

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

  if(response.status == 404){
    return res.send({message: 'Pokemon not found'})
  }

  const pokeInfo = await response.json()
  res.send(pokeInfo)
})

module.exports = app