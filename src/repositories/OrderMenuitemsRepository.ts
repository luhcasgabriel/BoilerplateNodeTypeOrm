import { Repository, EntityRepository } from "typeorm";
import { OrderMenuItemItem } from "../entities/OrderMenuItemItem";

@EntityRepository(OrderMenuItemItem)
class OrderMenuitemsRepository extends Repository<OrderMenuItemItem> {

}

export { OrderMenuitemsRepository }