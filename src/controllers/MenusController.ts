
import { Request, Response } from 'express'
import { MenusService } from '../service/MenusService'

class MenusController {

    /* Create menu method */
    async create (request: Request, response: Response): Promise<Response> {
        const { name, items } = request.body

        try {
            const menu = await (new MenusService()).create({ name, items })
            return response.json(menu)
        } catch (error) {
            return response.status(400).json({ message: error.message })
        }
    }

    /* Find menu method */
    async find (request: Request, response: Response): Promise<Response> {
        const  { id }  = request.params

        try {
            const itemMenu = await (new MenusService()).findItemsById(id)

            if (itemMenu) {
                return response.json(itemMenu)
            }

            return response.status(204).json({ message: 'Menu item not found' })
        } catch (error) {
            return response.status(400).json({ message: error.message })
        }
    }

    /* Method list menu */
    async list (request: Request, response: Response): Promise<Response> {
        try {
            const list = await (new MenusService()).list()
            return response.json(list)
        } catch (error) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export { MenusController }
