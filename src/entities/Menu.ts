

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

    // @OneToMany(() => OrderMenuItem, ordermenuitem => ordermenuitem.menu)
    // ordermenuitem: OrderMenuItem[]

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Menu }