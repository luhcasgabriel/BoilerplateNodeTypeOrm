

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

@Entity("items")
class Item{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    price: number;

    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => MenuItem, menuItem => menuItem.menu)
    menuitem: MenuItem[]

    @OneToMany(() => OrderMenuItem, orderMenuitem => orderMenuitem.item)
    ordermenuitem: OrderMenuItem[]

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Item }