
import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    OneToMany,
    JoinTable,

} from "typeorm";

import { v4 as uuid } from "uuid";
import { OrderMenuItemItem } from "./OrderMenuItemItem";

@Entity("orders")
class Order{

    @PrimaryColumn()
    id: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    price: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    discount: number;

    @Column()
    client_name: string;

    @Column()
    order_number: number;

    @OneToMany(() => OrderMenuItemItem, ordermenuitem => ordermenuitem.order, {eager: true})
    @JoinTable()
    ordermenuitem: OrderMenuItemItem[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Order }