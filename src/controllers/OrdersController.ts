
import { Request, Response } from 'express'
import { PromotionsController } from './PromotionsController'
import { OrdersService } from '../service/OrdersService'
import { IOrdersCreate } from '../interfaces/IOrdersCreate'
import { Order } from '../entities/Order';
import { Menu } from '../entities/Menu';
import { Item } from '../entities/Item';
import { OrderMenusItemItem } from '../entities/OrderMenusItemItem';

class OrdersController {
    async create (request: Request, response: Response): Promise<Response> {
        const { clientName, orderNumber, price, discount, menu } : IOrdersCreate = request.body;

        const promotionController = new PromotionsController();

        try {

            const {order, listMenu } = promotionController.calculation({ clientName, orderNumber, price, discount, menu });

            console.log(order.price)
            console.log(order.discount)
           
            const lunch = await (new OrdersService()).create({ clientName, orderNumber, price: order.price, discount :order.discount, menu : listMenu });
            
            return response.json(lunch);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    async find (request: Request, response: Response): Promise<Response> {
        const  { id }  = request.params;

        try {
            const order = await (new OrdersService()).findItemsById(id);

            if (order) {
                return response.json(order);
            }

            return response.status(204).json({ message: 'Menu item not found' });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    async list (request: Request, response: Response): Promise<Response> {
        try {
            const orders = await (new OrdersService()).list();
            return response.json(orders);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    
        
}
export { OrdersController }
