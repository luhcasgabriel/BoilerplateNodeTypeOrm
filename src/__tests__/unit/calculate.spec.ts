import request from 'supertest'
import { create, close, clear } from '../../database'
import AppController from '../../app'
import { OrdersController } from "../../controllers/OrdersController"
import { Promotion } from '../../entities/Promotion'
import { order } from "./payload/orders"
import { IOrdersCreate } from "../../interfaces/IOrdersCreate"
import { Menu } from '../../entities/Menu'

// const app = new AppController().app

// beforeAll(async ()=>{
//     await create()
// })

// afterAll(async ()=>{
//     await close()
// })

// beforeEach(async () => {
//     clear()
// })

describe('Calculate value total with promotion', () => {
   /* it('should return order list with value order', async () => {
        
        const orderController = new OrdersController();
        const menuEntity = new Menu();


        orderController.calculation({price : order.price , discount: order.discount, menu: []);
        expect(responseGet.body.length).toEqual(0)
        expect(responseGet.status).toEqual(200)
    })*/

})
