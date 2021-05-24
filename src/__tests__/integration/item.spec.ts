import { getCustomRepository } from "typeorm";
import { Item } from "../../entities/Item";
import { ItemsRepository } from "../../repositories/ItemsRepository";
import request from "supertest";
import { AppController } from "../../app"

const app = new AppController().app;

describe("Items", () => {

    
    it('should search for valid items in the database', async () => {

        // const itemsRepository = getCustomRepository(ItemsRepository);
        
        /*const item = await  itemsRepository.create({ 
            name: , 
            price
        })*/
        
        const response = await request(app).get("/items")
            

    
        expect(response.status).toEqual(200);


    });
})
