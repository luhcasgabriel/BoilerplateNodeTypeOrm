import { Repository, EntityRepository } from "typeorm";
import { OrderMenuItem } from "../entities/OrderMenuItem";

@EntityRepository(OrderMenuItem)
class OrderMenuitemsRepository extends Repository<OrderMenuItem> {

}

export { OrderMenuitemsRepository }