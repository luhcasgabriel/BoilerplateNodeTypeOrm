import { getCustomRepository, Repository } from 'typeorm'
import { MenusRepository } from '../repositories/MenusRepository'
import { Menu } from '../entities/Menu'
import { IMenuCreate } from '../interfaces/IMenuCreate'

class MenusService {
    private menuRepository: Repository<Menu>

    constructor () {
        this.menuRepository = getCustomRepository(MenusRepository)
    }
    
    async create ({ name, items } : IMenuCreate) {
        const lunchAlreadyExists = await this.menuRepository.findOne( name, { relations: ['items'] })

        if(lunchAlreadyExists) {
            return lunchAlreadyExists;
        }

        const menu = new Menu()
        menu.name = name
        menu.items = items
        const lunch = await this.menuRepository.manager.save(menu)

        return lunch;
    }

    async list () {
        return await this.menuRepository.find({ relations: ['items'] })
    }

    async findItemsById (id: string) {
        return await this.menuRepository.findOne({ id })
    }
}

export { MenusService }
