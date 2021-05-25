import { Router } from 'express'
import { ItemsController } from './controllers/ItemsController'
import { MenusController } from './controllers/MenusController'
import { OrdersController } from './controllers/OrdersController'

const routes = Router()

const itemsController = new ItemsController()
const menuController = new MenusController()
const ordersController = new OrdersController()

/* items */
routes.post("/items" , itemsController.create)
routes.get("/items"  , itemsController.find)

/* menu - lunch */
routes.post("/menu", menuController.create)
routes.get("/menu" , menuController.list)
routes.get("/menu/:id", menuController.find)

/* orders */
routes.post("/orders" , ordersController.create)
routes.get("/orders" , ordersController.list)
routes.get("/orders/:id", ordersController.find)

export default routes
