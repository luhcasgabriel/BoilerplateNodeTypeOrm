
import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    OneToMany

} from "typeorm";

import { v4 as uuid } from "uuid";
import { OrderMenu } from "./OrderMenu";

@Entity("orders")
class Order {

    @PrimaryColumn()
    id: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    price: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    discount: number;

    @Column()
    clientName: string

    @Column()
    orderNumber: number

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => OrderMenu, orderMenu => orderMenu.order)
    menus: OrderMenu[]

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }

}

export { Order }