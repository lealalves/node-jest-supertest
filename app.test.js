const request = require('supertest')
const app = require('./app')

describe('Pokemon API', () => {
  describe('GET /pokemon', () => {
    it('should return error when pokemon name params as empty', async () => {
      const response = await request(app).get('/pokemon')
  
      expect(response.statusCode).toBe(404)
    })

    it('should return error message when pokemon name is wrong', async () => {
      const response = await request(app).get('/pokemon/pika')

      expect(response.body).toEqual({message: 'Pokemon not found'})
    })

    it('should return an json with pokemon info', async () => {
      const response = await request(app).get('/pokemon/mewtwo')

      expect(response.body.name).toBeDefined()
    })
  })
})