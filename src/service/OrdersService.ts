import { json } from "express";
import { getCustomRepository, Repository } from "typeorm" 
import { Item } from "../entities/Item";
import { Menu } from "../entities/Menu";
import { Order } from "../entities/Order";
import { OrderMenusItemItem } from "../entities/OrderMenusItemItem";
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
        console.log(menu)
        console.log("-----------------------")
        console.log("-----------------------")

        const order = new Order();
        order.client_name = client_name;
        order.order_number = order_number;
        order.discount = discount;
        order.price = price;
        order.ordermenuitem =  new Array();
        const list = [OrderMenusItemItem]

        menu.forEach((menuItem) => {
            
            menuItem.items.forEach((itemMenu) => {

                const menu = new Menu();
                const item = new Item();
                const orderMenuitemItems = new OrderMenusItemItem();

                menu.id = menuItem.id;
                orderMenuitemItems.menu = menu;
                item.id = itemMenu.id;
                orderMenuitemItems.item = item;
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

    
    async list() {
        const orders = await this.ordersRepository.find();

        return orders;
    }

    async findItemsById(id: string) {

        const order = await this.ordersRepository.findOne({ id });

        return order;
    }

}

export { OrdersService } 