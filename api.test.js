jest.mock('node-fetch')

const fetch = require('node-fetch')
const { searchPoke } = require('./api')

describe('Pokemon API', () => {
  it('should call fetch function one time', async () => {

    const pokemon = {
      id: 1,
      name: 'fake1',
      sprites: {other: {'official-artwork': {front_default: 'picture'}}},
      types: ['earth']
    }

    fetch.mockReturnValue(Promise.resolve({json: () => Promise.resolve(pokemon)}))

    const pokeInfo = await searchPoke('pikachu')

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/pikachu")
    expect(pokeInfo.name).toBeDefined()
  });
})