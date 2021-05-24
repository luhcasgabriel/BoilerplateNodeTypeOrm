import { Timestamp } from "typeorm";
import { Item } from "../entities/Item";




describe("first", () => {


    it('it shound be ok', () => {

        const item = new Item();
        item.name = 'calabreza';
    
        expect(item.name).toEqual('calabreza');
    });
})
