
import { Request, Response } from 'express'
import { PromotionsController } from './PromotionsController'
import { OrdersService } from '../service/OrdersService'
import { IOrdersCreate } from '../interfaces/IOrdersCreate'

class OrdersController {
    async create (request: Request, response: Response): Promise<Response> {
        const { clientName, orderNumber, price, discount, menu } : IOrdersCreate = request.body

        try {
            const lunch = await (new OrdersService()).create({ clientName, orderNumber, price, discount, menu })
            this.calculation({ price, discount, menu })
            return response.json(lunch)
        } catch (error) {
            return response.status(400).json({ message: error.message })
        }
    }

    async find (request: Request, response: Response): Promise<Response> {
        const  { id }  = request.params

        try {
            const order = await (new OrdersService()).findItemsById(id)

            if (order) {
                return response.json(order)
            }

            return response.status(204).json({ message: 'Menu item not found' })
        } catch (error) {
            return response.status(400).json({ message: error.message })
        }
    }

    async list (request: Request, response: Response): Promise<Response> {
        try {
            const orders = await (new OrdersService()).list()
            return response.json(orders)
        } catch (error) {
            return response.status(400).json({ message: error.message })
        }
    }

    calculation ({ price, discount, menu } : IOrdersCreate ) {
        const promotionController = new PromotionsController()
        menu.forEach((menuItem) => {
            menuItem.items.forEach((item) => {
                const priceItem = item.price
                item.price *= priceItem
                discount = 0
                price += item.price
            })
        })

        promotionController.promotion({ price, discount, menu })
    }
}

export { OrdersController }
