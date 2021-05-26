import request from 'supertest'
import { create, close, clear } from '../../database'
import { alfaceItem, ovoItem, queijoItem } from './payload/items'
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

/* Integrated testing Items */
describe('Items', () => {
    it('should return items with 200 status code', async () => {
        const responseGet = await request(app).get('/items')
        expect(responseGet.status).toEqual(200)
    })

    it('should save one item', async () => {
        const responsePost = await request(app).post('/items').send(alfaceItem)

        expect(responsePost.status).toEqual(200)
        expect(responsePost.body.name).toEqual(alfaceItem.name)
        expect(responsePost.body.price).toEqual(alfaceItem.price)
        expect(responsePost.body.id).not.toBeNull()
        expect(responsePost.body.createdAt).not.toBeNull()
        expect(responsePost.body.updatedAt).not.toBeNull()

        const responseGet = await request(app).get('/items')
        expect(responseGet.status).toEqual(200)
    })

    it('should save two items', async () => {
        await request(app).post('/items').send(ovoItem)
        await request(app).post('/items').send(queijoItem)

        const responseGet = await request(app).get('/items')
        expect(responseGet.status).toEqual(200)
    })
})
