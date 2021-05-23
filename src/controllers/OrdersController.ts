
import { Request, Response } from "express" 
import { OrdersService } from "../service/OrdersService"
import { OrderMenusItemItem } from "../entities/OrderMenusItemItem";
import { Menu } from "../entities/Menu";

interface IOrdersCreate {
    client_name?: string,
    order_number?: number,
    price: number,
    discount: number,
    menu: [Menu]
}

class OrdersController {

    private menuList : [IOrdersCreate];

    async Create(request: Request, response: Response): Promise<Response> {

        
        const { client_name, order_number, price, discount, menu } : IOrdersCreate = request.body;
        const ordersService = new OrdersService();

        try {

            const lunch = await ordersService.Create({ client_name, order_number, price, discount, menu });
        
            return response.json(lunch);
            
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
    async Find(request: Request, response: Response): Promise<Response> {

        const  { id }  = request.params;
        const orderService = new OrdersService();

        try {

            const order = await orderService.findItemsById(id);
            
            if(!order) {
                return response.status(204).json({
                    message: "menu item not found"
                });
            }
            else {
                return response.json(order);
            }
            
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async List(request: Request, response: Response): Promise<Response> {

        const orderService = new OrdersService();

        try {
 
            const orders = await orderService.list();

            return response.json(orders);
            
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { OrdersController } 