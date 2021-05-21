import { getCustomRepository, Repository } from "typeorm" /* yarn add typeorm / @types/typeorm -D*/
import { Item } from "../entities/Item";
import { ItemsRepository } from "../repositories/ItemsRepository"

interface IItemsCreate {
    name: string; 
    price: number;
}

class ItemsService {

    private itemsRepository: Repository<Item>;

    constructor() {
        this.itemsRepository = getCustomRepository(ItemsRepository);
    }

    async Create( { name, price} : IItemsCreate) {


        const itemAlreadyExists = await this.itemsRepository.findOne({ name });

        if(itemAlreadyExists) {
            return itemAlreadyExists;
        }

        const item = this.itemsRepository.create({ 
            name, 
            price
        })

        await this.itemsRepository.save(item);

        return item;

    }


    async findByName(name: string) {

        const item = await this.itemsRepository.findOne({ name });

        return item;
    }

    async findList() {

        const items = await this.itemsRepository.find();

        return items;
    }

}

export { ItemsService } 