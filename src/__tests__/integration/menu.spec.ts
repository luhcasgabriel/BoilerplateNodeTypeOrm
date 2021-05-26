import request from 'supertest'
import { create, close, clear } from '../../database'
import { alfaceItem, ovoItem, queijoItem } from './payload/items'
import { xSaladaMenu } from './payload/menus'
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

const createItems = async () => {
  const items = [ alfaceItem, ovoItem, queijoItem ]

  for (const item of items) {
    await request(app).post('/items').send(item)
  }
}
/* Integrated tests Menu */
describe('Menu', () => {
  it('should return menus with 200 status code', async () => {
    const responseGet = await request(app).get('/menu')
    expect(responseGet.body.length).toEqual(0)
    expect(responseGet.status).toEqual(200)
  })

  it('should save one menu', async () => {
    await createItems()

    let responseGet = await request(app).get('/items')
    const { body, status } = responseGet
    // expect(body.length).toEqual(3)
    expect(status).toEqual(200)

    const menu = { ...xSaladaMenu, items: body }
    const responsePost = await request(app).post('/menu').send(menu)

    expect(responsePost.status).toEqual(200)
    expect(responsePost.body.name).toEqual(menu.name)
    // expect(responsePost.body.items.length).toEqual(3)
    expect(responsePost.body.id).not.toBeNull()
    expect(responsePost.body.createdAt).not.toBeNull()
    expect(responsePost.body.updatedAt).not.toBeNull()
  })

  it('should not found menu', async () => {
    const responseGet = await request(app).get('/menu/1')
    expect(responseGet.status).toEqual(204)
  })

  it('should save menus with 0 items and find it', async () => {
    const responsePost = await request(app).post('/menu').send(xSaladaMenu)
    const { body } = responsePost

    const responseGet = await request(app).get(`/menu/${body.id}`)
    expect(responseGet.status).toEqual(200)
  })
})
