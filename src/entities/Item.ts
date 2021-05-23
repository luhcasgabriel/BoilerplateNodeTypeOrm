

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
import { Menu } from "./Menu";
import { OrderMenusItemItem } from "./OrderMenusItemItem";

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

    @OneToMany(() => OrderMenusItemItem, orderMenuitem => orderMenuitem.item)
    ordermenuitem: OrderMenusItemItem[]

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Item }