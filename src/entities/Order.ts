
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

    @Column({ name: 'client_name' })
    clientName: string

    @Column({ name: 'order_number' })
    orderNumber: number

    @OneToMany(() => OrderMenu, orderMenu => orderMenu.order)
    menus: OrderMenu[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }

}

export { Order }