import { Repository, EntityRepository } from 'typeorm'
import { Menu } from '../entities/Menu'

@EntityRepository(Menu)
class MenusRepository extends Repository<Menu> {}

export { MenusRepository }
