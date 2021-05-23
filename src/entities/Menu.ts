

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
import { OrderMenuItemItem } from "./OrderMenuItemItem";

@Entity("menus")
class Menu{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => Item, {eager: true})
    @JoinTable()
    items: Item[];    

    @OneToMany(() => OrderMenuItemItem, ordermenuitem => ordermenuitem.menu)
    ordermenuitem: OrderMenuItemItem[]

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Menu }