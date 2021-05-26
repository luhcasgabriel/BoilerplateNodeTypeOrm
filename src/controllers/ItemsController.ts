
import { Request, Response } from 'express'
import { ItemsService } from '../service/ItemsService'

class ItemsController {

    /* Create Items Method */
    async create (request: Request, response: Response): Promise<Response> {
        const { name, price } = request.body

        try {
            const item = await (new ItemsService()).create({ name, price })
            return response.json(item)
        } catch (error) {
            return response.status(400).json({ message: error.message })
        }
    }

    /* Find Items Method */
    async find (request: Request, response: Response): Promise<Response> {
        const { name } = request.query

        try {
            if (name) {
                const item = await (new ItemsService()).findByName(name.toString())

                if (item) {
                    return response.json(item)
                }
                
                return response.status(204).json({ message: 'Item not found' })
            }

            const item = await (new ItemsService()).findList()
            return response.json(item)
        } catch (error) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export { ItemsController }
