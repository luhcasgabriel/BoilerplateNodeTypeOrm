import { json } from "express";
import { getCustomRepository, Repository } from "typeorm" 
import { Menu } from "../entities/Menu";
import { Order } from "../entities/Order";
import { OrdersRepository } from "../repositories/OrdersRepository"
import { OrderMenu } from "../entities/OrderMenu";
import { Item } from "../entities/Item";

interface IOrdersCreate {
    clientName?: string,
    orderNumber?: number,
    price: number,
    discount: number,
    menus: [OrderMenu]
}

class OrdersService {

    private ordersRepository: Repository<Order>;

    constructor() {
        this.ordersRepository = getCustomRepository(OrdersRepository);
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
        const response = await this.ordersRepository.manager.save(order);

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