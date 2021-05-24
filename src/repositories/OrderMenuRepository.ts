import { Repository, EntityRepository } from "typeorm";
import { OrderMenu } from "../entities/OrderMenu";

@EntityRepository(OrderMenu)
class OrderMenuRepository extends Repository<OrderMenu> {
}

export { OrderMenuRepository }