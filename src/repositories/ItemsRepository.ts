import { Item } from "../entities/Item";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Item)
class ItemsRepository extends Repository<Item> {



}

export { ItemsRepository }