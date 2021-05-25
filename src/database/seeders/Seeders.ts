import { ItemsSeeder } from "../seeders/ItemsSeeder"
import { MenuSeeder } from "../seeders/MenuSeeder"
import { MenuItemSeeder } from "../seeders/MenuItemSeeder"



class Seeder {

    private itemSeed : ItemsSeeder;
    private menuSeed : MenuSeeder;
    private menuItemSeed : MenuItemSeeder;
    
    constructor() {
        this.itemSeed = new ItemsSeeder();
        this.menuSeed = new MenuSeeder();
        this.menuItemSeed = new MenuItemSeeder();
    }


    async Up() {
      
        await this.itemSeed.CreateItemsSeeder();
        await this.menuSeed.CreateMenuSeeder();
        await this.menuItemSeed.CreateMenuItemSeeder();
       
    }

    async Down() {
      
        await this.itemSeed.DropItemsSeeder();
        await this.menuSeed.DropMenuSeeder();
        await this.menuItemSeed.DropMenuItemSeeder();

        
    }

}

export { Seeder }