
import { Request, Response } from "express" 
import { OrdersService } from "../service/OrdersService"
import { OrderMenuItemItem } from "../entities/OrderMenuItemItem";
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
    /*async Find(request: Request, response: Response): Promise<Response> {

        const  { id }  = request.params;
        const menuService = new MenusService();

        try {

            const itemMenu = await menuService.findItemsById(id);
            
            if(!itemMenu) {
                return response.status(204).json({
                    message: "menu item not found"
                });
            }
            else {
                return response.json(itemMenu);
            }
            
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async List(request: Request, response: Response): Promise<Response> {

        const menuService = new MenusService();

        try {
 
            const menuList = await menuService.list();

            return response.json(menuList);
            
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }*/
}

export { OrdersController } 