import { json } from "express";
import { getCustomRepository, Repository } from "typeorm" 
import { Item } from "../entities/Item";
import { Menu } from "../entities/Menu";
import { MenusRepository } from "../repositories/MenusRepository"

interface IMenuCreate {
    name: string; 
}

interface IMenuCreate2 {
    name: string;
    items: [Item];
}

class MenusService {

    private menuRepository: Repository<Menu>;

    constructor() {
        this.menuRepository = getCustomRepository(MenusRepository);
    }

    
    async Create( { name, items } : IMenuCreate2) {


        const lunchAlreadyExists = await this.menuRepository.findOne( name, { relations: ["items"] });

        if(lunchAlreadyExists) {
            return lunchAlreadyExists;
        }

        const menu = new Menu();
        menu.name = name;
        menu.items = items;
        const lunch = await this.menuRepository.manager.save(menu);

        return lunch;

    }

    async list() {
        const menus = await this.menuRepository.find({ relations: ['items'] })

        return menus;
    }

    async findItemsById(id: string) {

        const lunchListItems = await this.menuRepository.findOne({ id });

        return lunchListItems;
    }

}

export { MenusService } 