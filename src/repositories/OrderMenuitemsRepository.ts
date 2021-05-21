import { Repository, EntityRepository } from "typeorm";
import { OrderMenuItem } from "../entities/OrderMenuitem";

@EntityRepository(OrderMenuItem)
class OrderMenuitemsRepository extends Repository<OrderMenuItem> {



}

export { OrderMenuitemsRepository }