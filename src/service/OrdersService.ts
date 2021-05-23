import { json } from "express";
import { getCustomRepository, Repository } from "typeorm" 
import { Item } from "../entities/Item";
import { Menu } from "../entities/Menu";
import { Order } from "../entities/Order";
import { OrderMenuItemItem } from "../entities/OrderMenuItemItem";
import { OrdersRepository } from "../repositories/OrdersRepository"

interface IOrdersCreate {
    client_name?: string,
    order_number?: number,
    price: number,
    discount: number,
    menu: [Menu]
}

class OrdersService {

    private ordersRepository: Repository<Order>;

    constructor() {
        this.ordersRepository = getCustomRepository(OrdersRepository);
    }

    
    async Create( { client_name, order_number, price, discount, menu } : IOrdersCreate) {

        console.log("-----------------------")
        console.log("parameters")
        console.log(client_name)
        console.log(order_number)
        console.log(price)
        console.log(discount)
        console.log("-----------------------")
        console.log("-----------------------")

        const order = new Order();
        order.client_name = client_name;
        order.order_number = order_number;
        order.discount = discount;
        order.price = price;
        order.ordermenuitem =  new Array();
        const list = [OrderMenuItemItem]

        menu.forEach((menuItem) => {
            
            menuItem.items.forEach((itemMenu) => {

                const menu = new Menu();
                const orderMenuitemItems = new OrderMenuItemItem();

                menu.id = menuItem.id;
                orderMenuitemItems.menu = menu;
                orderMenuitemItems.item = itemMenu;
                orderMenuitemItems.quantity = itemMenu.quantity;
                order.ordermenuitem.push(orderMenuitemItems);
            });

        });

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
        console.log(response)
        console.log("-----------------------")
        console.log("-----------------------")


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