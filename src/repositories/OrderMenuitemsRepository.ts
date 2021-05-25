import { Repository, EntityRepository } from 'typeorm'
import { OrderMenusItemItem } from '../entities/OrderMenusItemItem';

@EntityRepository(OrderMenusItemItem)
class OrderMenuitemsRepository extends Repository<OrderMenusItemItem> {}

export { OrderMenuitemsRepository }
