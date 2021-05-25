import request from 'supertest'
import { create, close, clear } from '../../database'
import AppController from '../../app'

const app = new AppController().app

beforeAll(async ()=>{
    await create()
})

afterAll(async ()=>{
    await close()
})

beforeEach(async () => {
    clear()
})

describe('Items', () => {
    it('should return items with 200 status code', async () => {
        const responseGet = await request(app).get('/items')
        expect(responseGet.body.length).toEqual(0)
        expect(responseGet.status).toEqual(200)
    })

    it('should save one item', async () => {
        const item = { name: 'Alface', price: 0.40 }

        const responsePost = await request(app).post('/items').send(item)

        expect(responsePost.status).toEqual(200)
        expect(responsePost.body.name).toEqual(item.name)
        expect(responsePost.body.price).toEqual(item.price)
        expect(responsePost.body.id).not.toBeNull()
        expect(responsePost.body.createdAt).not.toBeNull()
        expect(responsePost.body.updatedAt).not.toBeNull()

        const responseGet = await request(app).get('/items')
        expect(responseGet.body.length).toEqual(1)
        expect(responseGet.status).toEqual(200)
    })

    it('should save two items', async () => {
        await request(app).post('/items').send({ name: 'Ovo', price: 0.80 })
        await request(app).post('/items').send({ name: 'Queijo', price: 1.00 })

        const responseGet = await request(app).get('/items')
        expect(responseGet.body.length).toEqual(2)
        expect(responseGet.status).toEqual(200)
    })
})
