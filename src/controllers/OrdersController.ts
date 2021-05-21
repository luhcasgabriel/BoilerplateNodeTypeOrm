
import { Request, Response } from "express" 
import { MenusService } from "../service/MenusService"
import { Menu } from "../entities/Menu";
import { OrdersService } from "../service/OrdersService";
import { OrderMenuItem } from "../entities/OrderMenuitem";

interface IOrderCreate {
    client_name?: string;
    order_number?: number;
    price: number;
    discount: number;
    orderItems: [OrderMenuItem];
}

class OrdersController {


    async Create(request: Request, response: Response): Promise<Response> {

        const { client_name, order_number, price, discount, orderItems } : IOrderCreate = request.body;
        const orderService = new OrdersService();

        try {

            const order = await orderService.Create({ client_name, order_number, price, discount, orderItems});
        
            return response.json(order);
            
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
    async Find(request: Request, response: Response): Promise<Response> {

        return response.json({});
        
        // const  { id }  = request.params;
        // const menuService = new MenusService();

        // try {

        //     if(id) {
        //         const itemMenu = await menuService.findItemsById(id);
            
        //         if(!itemMenu) {
        //             return response.status(204).json({
        //                 message: "menu item not found"
        //             });
        //         }
        //         else {
        //             return response.json(itemMenu);
        //         }
        //     }
        //     else {

        //         const menuList = await menuService.findItemsList();

        //         return response.json(menuList);
        //     }

        // } catch (error) {
        //     return response.status(400).json({
        //         message: error.message
        //     });
        // }
    }

    async findList(request: Request, response: Response): Promise<Response> {
        const menuService = new MenusService();

        const menu = await menuService.findList();

        return response.json(menu);
    }
}

export { OrdersController } 