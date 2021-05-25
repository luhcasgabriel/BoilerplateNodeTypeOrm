import { Repository, EntityRepository } from 'typeorm'
import { Item } from '../entities/Item'

@EntityRepository(Item)
class ItemsRepository extends Repository<Item> {}

export { ItemsRepository }
