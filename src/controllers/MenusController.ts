
import { Request, Response } from "express" 
import { MenusService } from "../service/MenusService"
import { MenuItem } from "../entities/MenuItem";
import { Item } from "../entities/Item";

interface IMenuItems {
    id: string,
    name: string,
    created_at: Date,
    items: [Item]
}

class MenusController {

    private menuList : [IMenuItems];

    async Create(request: Request, response: Response): Promise<Response> {

        const { name, items } = request.body;
        const menuService = new MenusService();
        const menuItem = new MenuItem();

        try {

            const lunch = await menuService.Create({ name, items});
        
            return response.json(lunch);
            
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
    async Find(request: Request, response: Response): Promise<Response> {
        
        const  { id }  = request.params;
        const menuService = new MenusService();

        try {

            if(id) {
                const itemMenu = await menuService.findItemsById(id);
            
                if(!itemMenu) {
                    return response.status(204).json({
                        message: "menu item not found"
                    });
                }
                else {
                    return response.json(itemMenu);
                }
            }
            else {

                const menuList = await menuService.findItemsList();

                return response.json(menuList);
            }

        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async findList(request: Request, response: Response): Promise<Response> {
        const menuService = new MenusService();

        const menu = await menuService.findList();

        return response.json(menu);
    }
}

export { MenusController } 