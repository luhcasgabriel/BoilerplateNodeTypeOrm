
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

@Entity("order_menus_item_items")
class OrderMenuItemItem{

    @PrimaryColumn()
    id: string;

    @Column()
    quantity: number;

    @ManyToOne(() => Item, item => item.ordermenuitem)
    item: Item;

    @ManyToOne(() => Menu, menuitem => menuitem.ordermenuitem)
    menu: Menu;

    // @JoinColumn({name: "order_id"})
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

export { OrderMenuItemItem }