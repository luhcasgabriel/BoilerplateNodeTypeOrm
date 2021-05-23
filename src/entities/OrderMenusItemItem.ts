
import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    JoinTable,

} from "typeorm";

import { v4 as uuid } from "uuid";
import { Item } from "./Item";
import { Menu } from "./Menu";
import { Order } from "./Order";

@Entity("order_menus_item_items")
class OrderMenusItemItem{

    @PrimaryColumn()
    id: string;

    @Column()
    quantity: number;

    @ManyToOne(() => Item, item => item.ordermenuitem, {eager: true})
    item: Item;

    @ManyToOne(() => Menu, menuitem => menuitem.ordermenuitem, {eager: true})
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

export { OrderMenusItemItem }