const fetch = require('node-fetch')

module.exports = {
	searchPoke: async (pokeName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)  
    if(response.status !== 404){
      const data = await response.json()
      return data
    }
    return null
	}
}