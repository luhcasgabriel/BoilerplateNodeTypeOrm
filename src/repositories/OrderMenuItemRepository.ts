import { Repository, EntityRepository } from "typeorm";
import { OrderMenuItem } from "../entities/OrderMenuItem";

@EntityRepository(OrderMenuItem)
class OrderMenuItemRepository extends Repository<OrderMenuItem> {
}

export { OrderMenuItemRepository }