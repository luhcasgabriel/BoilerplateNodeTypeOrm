import { getCustomRepository, Repository } from 'typeorm'
import { ItemsRepository } from '../repositories/ItemsRepository'
import { Item } from '../entities/Item'
import { IItemsCreate } from '../interfaces/IItemsCreate'

class ItemsService {
    private itemsRepository: Repository<Item>;

    constructor () {
        this.itemsRepository = getCustomRepository(ItemsRepository)
    }

    async create ({ name, price } : IItemsCreate) {
        const itemAlreadyExists = await this.itemsRepository.findOne({ name })

        if (itemAlreadyExists) {
            return itemAlreadyExists
        }

        const item = this.itemsRepository.create({ name, price })
        await this.itemsRepository.save(item)
        return item
    }


    async findByName (name: string) {
        return await this.itemsRepository.findOne({ name })
    }

    async findList () {
        return await this.itemsRepository.find()
    }
}

export { ItemsService }
