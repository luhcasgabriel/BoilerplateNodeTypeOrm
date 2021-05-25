import request from 'supertest'
import AppController from '../../app'

const app = new AppController().app

describe('Items', () => {
    it('should search for valid items in the database', async () => {
        const response = await request(app).get('/items')
        expect(response.status).toEqual(200)
    })
})
