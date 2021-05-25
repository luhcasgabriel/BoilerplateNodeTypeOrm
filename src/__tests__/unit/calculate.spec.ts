import { OrdersController } from "../../controllers/OrdersController"
import { order } from "./payload/orders"
import { Menu } from '../../entities/Menu'
import { menuXBacon } from './payload/orders'

describe('Calculate value total with promotion', () => {
   it('should return order list with value order', async () => {
    const menus: Menu[] = []
    menus.push(menuXBacon);

    (new OrdersController()).calculation({ price: order.price , discount: order.discount, menu: menus })
    expect(200).toEqual(200)
    })
})
