

import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    JoinTable,
    ManyToMany,
    OneToMany,

} from "typeorm";

import { v4 as uuid } from "uuid";
import { Item } from './Item'
import { OrderMenusItemItem } from "./OrderMenusItemItem";

@Entity("menus")
class Menu{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => Item)
    @JoinTable()
    items: Item[];    

    @OneToMany(() => OrderMenusItemItem, ordermenuitem => ordermenuitem.menu)
    ordermenuitem: OrderMenusItemItem[]

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Menu }