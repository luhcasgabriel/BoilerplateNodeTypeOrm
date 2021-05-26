
import { Request, Response } from 'express'
import { PromotionsController } from './PromotionsController'
import { OrdersService } from '../service/OrdersService'
import { IOrdersCreate } from '../interfaces/IOrdersCreate'


class OrdersController {

    /* Create order method */
    async create (request: Request, response: Response): Promise<Response> {
        const { clientName, orderNumber, price, discount, menu } : IOrdersCreate = request.body;

        const promotionController = new PromotionsController();

        try {

            /* calls order calculation method and promotions discount  */
            const {order, listMenu } = promotionController.calculation({ clientName, orderNumber, price, discount, menu });

            /* calls create order service method  */
            const lunch = await (new OrdersService()).create({ clientName, orderNumber, price: order.price, discount :order.discount, menu : listMenu });
            
            return response.json(lunch);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    /* find order method */
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

    /* list order method */
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
