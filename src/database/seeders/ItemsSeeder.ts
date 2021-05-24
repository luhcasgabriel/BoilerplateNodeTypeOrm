import { getConnection } from "typeorm";
import { Item } from "../../entities/Item";
import { v4 as uuid } from "uuid";






class ItemsSeeder {

    async CreateItemsSeeder() {
      
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Item)
        .values([
            { id: uuid(), name: "teste1", price:  3.0}, 
            { id: uuid(), name: "teste2", price: 2.0 },
            { id: uuid(), name: "teste3", price: 2.0 }
        ])
        .execute();



    }

    

    async DropItemsSeeder() {

        const list = [
            "teste1",
            "teste2",
            "teste3",
        ]

        list.forEach((item) => {

             getConnection()
            .createQueryBuilder()
            .delete()
            .from(Item)
            .where("name = :name", { name: item})
            .execute();
        });
        
    }

}

export { ItemsSeeder }