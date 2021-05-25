import { getConnection } from "typeorm";
import { Menu } from "../../entities/Menu";
import { v4 as uuid } from "uuid";






class OrderSeeder {

    private  list = [
        { id: "81d8c4a7-8956-483d-b81d-88d37c140f02", name: "X-Bacon"    , created_at: "now()", updated_at: "now()"},
        { id: "409dc803-ae9c-4097-b48a-aaf9a0ec28dc", name: "X-Burger"   , created_at: "now()", updated_at: "now()"},
        { id: "28ab5afd-73e9-43eb-a38a-a04bf6bc0cc8", name: "X-Egg"      , created_at: "now()", updated_at: "now()"},
        { id: "744fc79a-03b0-4e74-b7a4-b5155069f4c5", name: "X-Egg Bacon", created_at: "now()", updated_at: "now()"},
        
    ] 


    async CreateOrderSeeder() {
      
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into("orders")
        .values(this.list)
        .execute();

    }

    
    async DropOrderSeeder() {

        this.list.forEach((item) => {

             getConnection()
            .createQueryBuilder()
            .delete()
            .from("orders")
            .where("name = :name", { name: item.name})
            .execute();
        });
        
    }

}

export { OrderSeeder }