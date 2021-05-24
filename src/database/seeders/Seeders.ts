import { ItemsSeeder } from "../seeders/ItemsSeeder"



class Seeder {

    private itemSeed : ItemsSeeder;
    
    constructor() {
        this.itemSeed = new ItemsSeeder();
    }


    async Up() {
      
        await this.itemSeed.CreateItemsSeeder();
       
    }

    async Down() {
      
        await this.itemSeed.DropItemsSeeder();
        
    }

}

export { Seeder }