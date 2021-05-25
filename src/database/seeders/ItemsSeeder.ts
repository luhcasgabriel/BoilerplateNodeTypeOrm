import { getConnection } from "typeorm";
import { Item } from "../../entities/Item";
import { v4 as uuid } from "uuid";






class ItemsSeeder {

    private  list = [
        { id: "41acfc3f-47bd-4a13-9090-6799d18bde0f", name: "Alface", price:  0.4},
        { id: "db911c5b-26e3-4f31-9c7e-2d800eb58ed3", name: "Bacon", price:  2.0},
        { id: "10287eb6-d6d4-4035-95cf-7365b830b9a7", name: "Hambúrguer de carne", price:  3.0},
        { id: "36ece12a-91e2-4e5c-b83b-478f2ddd6453", name: "Ovo", price:  0.8},
        { id: "4f4e166a-339e-42fe-af5c-1ba1860b9be8", name: "Queijo", price:  1.5},
    ] 

    async CreateItemsSeeder() {
      
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Item)
        .values(this.list)
        .execute();
    }

    
    async DropItemsSeeder() {

        this.list.forEach((item) => {

             getConnection()
            .createQueryBuilder()
            .delete()
            .from(Item)
            .where("id = :id", { id: item.id})
            .execute();
        });
        
    }

}

export { ItemsSeeder }