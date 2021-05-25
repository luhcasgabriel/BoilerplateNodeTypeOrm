import { Repository, EntityRepository } from 'typeorm'
import { Order } from '../entities/Order'

@EntityRepository(Order)
class OrdersRepository extends Repository<Order> {}

export { OrdersRepository }
