import { getCustomRepository, Repository } from 'typeorm'
import { OrdersRepository } from '../repositories/OrdersRepository'
import { Item } from '../entities/Item'
import { Menu } from '../entities/Menu'
import { Order } from '../entities/Order'
import { OrderMenusItemItem } from '../entities/OrderMenusItemItem'
import { IOrdersCreate } from '../interfaces/IOrdersCreate'

class OrdersService {
    private ordersRepository: Repository<Order>

    constructor () {
        this.ordersRepository = getCustomRepository(OrdersRepository)
    }

    async create ({ clientName, orderNumber, price, discount, menu } : IOrdersCreate) {
        const order = new Order()
        order.clientName = clientName
        order.orderNumber = orderNumber
        order.discount = discount
        order.price = price
        order.ordermenuitem = new Array()

            console.log(order.price)
            console.log(order.discount)
        const response = await this.ordersRepository.manager.save(order)

        menu.forEach((menuItem) => {
            menuItem.items.forEach((itemMenu) => {

                const menu = new Menu();
                const item = new Item();
                const orderMenuitemItems = new OrderMenusItemItem();

                menu.id = menuItem.id
                orderMenuitemItems.menu = menu
                item.id = itemMenu.id
                orderMenuitemItems.item = item
                orderMenuitemItems.quantity = itemMenu.quantity
                orderMenuitemItems.order = order

                this.ordersRepository.manager.save(orderMenuitemItems)
            })
        })

        return response
    }

    
    async list () {
        return await this.ordersRepository.find()
    }

    async findItemsById (id: string) {
        return await this.ordersRepository.findOne({ id })
    }
}

export { OrdersService }
