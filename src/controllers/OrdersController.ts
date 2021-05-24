
import { Request, Response } from "express" 
import { OrdersService } from "../service/OrdersService"
import { OrderMenu } from "../entities/OrderMenu";

interface IOrdersCreate {
    clientName?: string,
    orderNumber?: number,
    price: number,
    discount: number,
    orderMenus: [OrderMenu]
}

class OrdersController {

    private menuList : [IOrdersCreate];

    async Create(request: Request, response: Response): Promise<Response> {

        
        const { clientName, orderNumber, price, discount, orderMenus } : IOrdersCreate = request.body;
        const ordersService = new OrdersService();

        try {

            const lunch = await ordersService.Create({ clientName, orderNumber, price, discount, orderMenus });
        
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