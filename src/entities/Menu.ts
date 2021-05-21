

import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    OneToMany,

} from "typeorm";

import { v4 as uuid } from "uuid";
import { MenuItem } from "./MenuItem";
import { OrderMenuItem } from "./OrderMenuitem";

@Entity("menus")
class Menu{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => MenuItem, menuItem => menuItem.menu)
    menuitem: MenuItem[]
    
    @OneToMany(() => OrderMenuItem, ordermenuitem => ordermenuitem.menu)
    ordermenuitem: OrderMenuItem[]

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Menu }