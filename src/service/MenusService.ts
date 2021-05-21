import { json } from "express";
import { Connection, getCustomRepository, Repository } from "typeorm" /* yarn add typeorm / @types/typeorm -D*/
import { Item } from "../entities/Item";
import { Menu } from "../entities/Menu";
import { MenuItem } from "../entities/MenuItem";
import { MenuItemsRepository } from "../repositories/MenuItemsRepository";
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
    private menuItemRepository: Repository<MenuItem>;

    constructor() {
        this.menuRepository = getCustomRepository(MenusRepository);
        this.menuItemRepository = getCustomRepository(MenuItemsRepository);
    }

    
    async Create( { name, items } : IMenuCreate2) {


        const lunchAlreadyExists = await this.menuRepository.findOne({ name }, {relations: ["menuitem"]});

        if(lunchAlreadyExists) {
            return lunchAlreadyExists;
        }


        const menu = new Menu();
        let listMenuItens  = []
        menu.name = name;
        const lunch = await this.menuRepository.manager.save(menu);

        items.forEach((item) => {
            const menuItem = new MenuItem();

            menuItem.item_id = item.id;
            menuItem.menu = menu;
            const resultMenuItem = this.menuRepository.manager.save(menuItem);

            listMenuItens.push(menuItem)
        });

        return <JSON><unknown>{
            "name": menu.name,
            "id": menu.id,
            "items": listMenuItens
        }

    }

    /* TESTE */
    async findList() {

        const menulist = await this.menuRepository.find({ relations: ["menuitem"]});

        return menulist;
    }

    async findItemsList() {

        const lunchListItems = await this.menuItemRepository.find({ relations: ["menu", "item"] });

        return lunchListItems;
    }

    async findItemsById(id: string) {

        const lunchListItems = await this.menuItemRepository.findOne({menu_id: id}, { relations: ["menu", "item"] });

        return lunchListItems;
    }

}

export { MenusService } 