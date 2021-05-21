import { getCustomRepository, Repository } from "typeorm" /* yarn add typeorm / @types/typeorm -D*/
import { Item } from "../entities/Item";
import { Menu } from "../entities/Menu";
import { Order } from "../entities/Order";
import { OrdersRepository } from "../repositories/OrdersRepository"
import { OrderMenuitemsRepository } from "../repositories/OrderMenuitemsRepository"
import { OrderMenuItem } from "../entities/OrderMenuitem";

interface IMenuCreate {
    client_name?: string;
    order_number?: number;
    price: number;
    discount: number;
    orderItems: [OrderMenuItem];
}

class OrdersService {

    private ordersRepository: Repository<Order>;
    private orderMenuItemsRepository: Repository<OrderMenuItem>;

    constructor() {
        this.ordersRepository = getCustomRepository(OrdersRepository);
        this.orderMenuItemsRepository = getCustomRepository(OrderMenuitemsRepository);
    }

    async Create( { client_name, order_number, price, discount, orderItems } : IMenuCreate) {


 
        const order = new Order();
        order.price = price;
        order.discount = discount;
        order.client_name = client_name;
        order.order_number = order_number;

        await this.ordersRepository.manager.save(order);

        



        console.log("---------------------------------")
        console.log("parametros")
        console.log(client_name)
        console.log(order_number)
        console.log(price)
        console.log(discount)
        console.log(orderItems)

        console.log("---------------------------------")
        console.log("---------------------------------")
        console.log("---------------------------------")
        console.log("---------------------------------")
        console.log("---------------------------------")



        console.log("---------------------------------")
        console.log("order")
        console.log(order)
        console.log("---------------------------------")

        console.log("---------------------------------")
        console.log("---------------------------------")
        console.log("---------------------------------")
        console.log("---------------------------------")
        console.log("---------------------------------")
        orderItems.forEach((orderItem) => {

            // const orderMenuItem = new OrderMenuItem();
            
            //     console.log("---------------------------------")
            //     console.log("orderItem")
            //     console.log(orderItem)
            //     console.log("---------------------------------")

            //     const menu = new Menu();
            //     const item = new Item();
            //     menu.id = orderItem.menu.id
            //     item.id = orderItem.item.id;
            //     item.name = orderItem.item.name;
            //     item.price = orderItem.item.price;
            //     orderMenuItem.quantity = orderItem.quantity;
            //     orderMenuItem.menu = menu;
            //     orderMenuItem.order = order;
            //     orderMenuItem.item = item;
            //     orderMenuItem.menu_id = menu.id;
            //     orderMenuItem.order_id = order.id;
            //     orderMenuItem.item_id = item.id;



            //     console.log("---------------------------------")
            //     console.log("---------------------------------")
            //     console.log("---------------------------------")
            //     console.log("---------------------------------")
            //     console.log("---------------------------------")

            //     console.log("---------------------------------")
            //     console.log("ordermenuItem  oooooooo")
            //     console.log(orderMenuItem)
            //     console.log("---------------------------------")

            //     console.log("---------------------------------")
            //     console.log("---------------------------------")
            //     console.log("MENU_ID")
            //     console.log(orderMenuItem.menu_id)
            //     console.log("ORDER_ID")
            //     console.log(orderMenuItem.order_id)
            //     console.log("ITEM_ID")
            //     console.log(orderMenuItem.item_id)
            //     console.log("---------------------------------")



                // const resultMenuItem = this.ordersRepository.manager.save(orderMenuItem);
                
            const resultMenuItem = this.orderMenuItemsRepository.create({
                item_id: orderItem.item_id, 
                menu_id: orderItem.menu_id, 
                order_id: order.id, 
                quantity: orderItem.quantity
            });

            this.orderMenuItemsRepository.save(resultMenuItem);

                console.log("RESULT")
                console.log(resultMenuItem)
                console.log("---------------------------------")
            });

            




            // listMenuItens.push(menuItem)
        

        return true


    }

    /* TESTE */
    // async findList() {

    //     const menulist = await this.ordersRepository.find({ relations: ["menuitem"]});

    //     return menulist;
    // }

    // async findItemsList() {

    //     const lunchListItems = await this.menuItemRepository.find({ relations: ["menu", "item"] });

    //     return lunchListItems;
    // }

    // async findItemsById(id: string) {

    //     const lunchListItems = await this.menuItemRepository.findOne({menu_id: id}, { relations: ["menu", "item"] });

    //     return lunchListItems;
    // }

}

export { OrdersService } 