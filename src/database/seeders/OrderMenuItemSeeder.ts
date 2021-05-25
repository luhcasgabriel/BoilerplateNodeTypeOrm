import { getConnection } from "typeorm";
import { Menu } from "../../entities/Menu";
import { v4 as uuid } from "uuid";






class MenuItemSeeder {

    private  list = [
        { id: "81d8c4a7-8956-483d-b81d-88d37c140f02", name: "X-Bacon",     items: [{id: "db911c5b-26e3-4f31-9c7e-2d800eb58ed3"}, {id: "10287eb6-d6d4-4035-95cf-7365b830b9a7"}, {id: "4f4e166a-339e-42fe-af5c-1ba1860b9be8"}]},
        { id: "409dc803-ae9c-4097-b48a-aaf9a0ec28dc", name: "X-Burger",    items: [{id: "10287eb6-d6d4-4035-95cf-7365b830b9a7"}, {id: "4f4e166a-339e-42fe-af5c-1ba1860b9be8"}]},
        { id: "28ab5afd-73e9-43eb-a38a-a04bf6bc0cc8", name: "X-Egg",       items: [{id: "36ece12a-91e2-4e5c-b83b-478f2ddd6453"}, {id: "10287eb6-d6d4-4035-95cf-7365b830b9a7"}, {id: "4f4e166a-339e-42fe-af5c-1ba1860b9be8"}]},
        { id: "744fc79a-03b0-4e74-b7a4-b5155069f4c5", name: "X-Egg Bacon", items: [{id: "36ece12a-91e2-4e5c-b83b-478f2ddd6453"}, {id: "db911c5b-26e3-4f31-9c7e-2d800eb58ed3"}, {id: "10287eb6-d6d4-4035-95cf-7365b830b9a7"},, {id: "4f4e166a-339e-42fe-af5c-1ba1860b9be8"}]},
        
    ] 


    async CreateMenuItemSeeder() {
      
        this.list.forEach((menu) => {
            menu.items.forEach((item) => {
                 getConnection()
                .createQueryBuilder()
                .insert()
                .into("Menus_items_items")
                .values({menusId: menu.id, itemsId: item.id })
                .execute();
            });
        });

    }

    
    async DropMenuItemSeeder() {

        this.list.forEach((menu) => {
            menu.items.forEach((item) => {
                getConnection()
                .createQueryBuilder()
                .delete()
                .from("Menus_items_items")
                .where("id = :id", { id: item.id})
                .execute();
            });
        });
        
    }

}

export { MenuItemSeeder }