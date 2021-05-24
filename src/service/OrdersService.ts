import { getCustomRepository, Repository } from "typeorm" 
import { Order } from "../entities/Order";
import { OrdersRepository } from "../repositories/OrdersRepository"
import { OrderMenuRepository } from "../repositories/OrderMenuRepository"
import { OrderMenuItemRepository } from "../repositories/OrderMenuItemRepository"
import { OrderMenu } from "../entities/OrderMenu";
import { OrderMenuItem } from "../entities/OrderMenuItem";
import { Item } from "../entities/Item";

interface IOrdersCreate {
    clientName?: string,
    orderNumber?: number,
    price: number,
    discount: number,
    menus: [OrderMenu]
}

class OrdersService {

    private ordersRepository: Repository<Order>
    private orderMenuRepository: Repository<OrderMenu>
    private orderMenuItemRepository: Repository<OrderMenuItem>

    constructor() {
        this.ordersRepository = getCustomRepository(OrdersRepository)
        this.orderMenuRepository = getCustomRepository(OrderMenuRepository)
        this.orderMenuItemRepository = getCustomRepository(OrderMenuItemRepository)
    }

    
    async Create( { clientName, orderNumber, price, discount, menus } : IOrdersCreate) {

        console.log("-----------------------")
        console.log("parameters")
        console.log(clientName)
        console.log(orderNumber)
        console.log(price)
        console.log(discount)
        console.log("-----------------------")
        console.log("-----------------------")

        const order = new Order();
        order.clientName = clientName;
        order.orderNumber = orderNumber;
        order.discount = discount;
        order.price = price;
        order.menus =  menus

        console.log("------------menus-----------")
        console.log(menus)

        let response

        try {
            response = await this.ordersRepository.manager.save(order)
        } catch (err) {
            console.log('erro save order')
            console.log(err)
        }

        // menus.map((menu) => {
        //     menu.order = order
        // })

        try {
            menus.map(async (menu) => {
                let m = new OrderMenu()
                console.log('menu')
                m.order = new Order()
                m.order.id = order.id
                m.nameMenu = menu.nameMenu
                console.log(m)
                m = await this.orderMenuRepository.manager.save(m)

                menu.items.map(async (item) => {
                    const omi = new OrderMenuItem()
                    omi.orderMenu = new OrderMenu()
                    omi.orderMenu.id = m.id
                    omi.item = new Item()
                    omi.item.id = item.id
                    omi.quantity = item.quantity
                    omi.price = item.price
                    console.log('order menu item')
                    console.log(omi)
                    await this.orderMenuItemRepository.manager.save(omi)
                })
            })
        } catch (err) {
            console.log('erro save menus')
            console.log(err)
        }


        // const itemsList: Item[] = new Array()

        // await this.ordersRepository.manager.save(order);

        // menus.forEach((menu: OrderMenu) => {
            
        //     menu.items.forEach((item) => {

        //         const orderMenu = new OrderMenu()
        //         orderMenu.order = order
        //         orderMenu.items = menu.items

        //         const menu = new Menu();
        //         const orderMenuitemItems = new OrderMenuItemItem();

        //         menu.id = menuItem.id;
        //         orderMenuitemItems.menu = menu;
        //         orderMenuitemItems.item = itemMenu;
        //         orderMenuitemItems.quantity = itemMenu.quantity;
        //         order.menus.push(orderMenu);
        //     });

        // });

        console.log("-----------------------")
        console.log("order antes save")
        console.log(order)

        console.log("-----------------------")
        console.log("-----------------------")
        // const response = await this.ordersRepository.manager.save(order);

        console.log("-----------------------")
        console.log("order pos save")
        console.log(order)

        console.log("-----------------------")
        console.log("-----------------------")
        console.log("-----------------------")
        console.log("rseponse")
        // console.log(response)
        console.log("-----------------------")
        console.log("-----------------------")

        // return order;

        return response;

    }

    /*
    async list() {
        const menus = await this.menuRepository.find({ relations: ['items'] })

        return menus;
    }

    async findItemsById(id: string) {

        const lunchListItems = await this.menuRepository.findOne({ id });

        return lunchListItems;
    }
*/
}

export { OrdersService } 