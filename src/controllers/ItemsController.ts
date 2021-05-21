
import { Request, Response } from "express" 
import { ItemsService } from "../service/ItemsService"

class ItemsController {


    async Create(request: Request, response: Response): Promise<Response> {

        const { name, price } = request.body;
        const itemsService = new ItemsService();

        try {

            const item = await itemsService.Create({name, price});
            return response.json(item);
            
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }

    }

    async Find(request: Request, response: Response): Promise<Response> {

        const  name  = request.query.name;
        const itemsService = new ItemsService();

        try {

            if(name) {
                const item = await itemsService.findByName(name.toString());
            
                if(!item) {
                    return response.status(204).json({
                        message: "item not found"
                    });
                }
                else {
                    return response.json(item);
                }
            }
            else {
                const item = await itemsService.findList();
                return response.json(item);
            }

        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { ItemsController } 