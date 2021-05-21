import { MenuItem } from "../entities/MenuItem";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(MenuItem)
class MenuItemsRepository extends Repository<MenuItem> {



}

export { MenuItemsRepository }