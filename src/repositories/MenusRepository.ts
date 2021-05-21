import { Menu } from "../entities/Menu";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Menu)
class MenusRepository extends Repository<Menu> {



}

export { MenusRepository }