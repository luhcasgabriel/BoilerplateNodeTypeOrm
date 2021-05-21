

import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,

} from "typeorm";

import { v4 as uuid } from "uuid";
import { Item } from "./Item";
import { Menu } from "./Menu";
import { OrderMenuItem } from "./OrderMenuitem";

@Entity("menuitems")
class MenuItem{

    @PrimaryColumn()
    id: string;

    // @ManyToOne(() => Item)


    @JoinColumn({name: "item_id"})
    @ManyToOne(() => Item, item => item.menuitem)
    item: Item;

    @Column()
    item_id: string;

    @JoinColumn({name: "menu_id"})
    @ManyToOne(() => Menu, menu => menu.menuitem)
    menu: Menu;

    @Column()
    menu_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { MenuItem }