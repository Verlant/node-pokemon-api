const express = require('express')
let pokemons = require("./mock-pokemon")
const helper = require('./helper')

const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello again, Express ! 👋'))

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = "Un pokémon a bien été trouvé."
    // La méthode res.json(content.json) ajoute automatique l'en-tête de type MIME : 'Content-Type': 'application/json'
    // res.header('Content-Type', 'application/json')
    res.json(helper.success(message, pokemon))
})

app.get('/api/pokemons', (req, res) => {
    const message= "Les pokémons ont bien été trouvés."
    res.json(helper.success(message, pokemons))
})


app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))