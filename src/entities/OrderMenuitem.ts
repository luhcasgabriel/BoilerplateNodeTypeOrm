

import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,

} from "typeorm";

import { v4 as uuid } from "uuid";
import { Item } from "./Item";
import { Menu } from "./Menu";
import { Order } from "./Order";

@Entity("ordermenuitems")
class OrderMenuItem{

    @PrimaryColumn()
    id: string;

    @Column()
    item_id: string;

    @Column()
    menu_id: string;

    @Column()
    quantity: number;

    @Column()
    order_id: string;

    @JoinColumn({name: "item_id"})
    @ManyToOne(() => Item, item => item.ordermenuitem)
    item: Item;

    @JoinColumn({name: "menu_id"})
    @ManyToOne(() => Menu, menuitem => menuitem.ordermenuitem)
    menu: Menu;

    @JoinColumn({name: "order_id"})
    @ManyToOne(() => Order, order => order.ordermenuitem)
    order: Order;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { OrderMenuItem }