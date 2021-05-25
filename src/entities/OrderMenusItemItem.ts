
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Item } from './Item'
import { Menu } from './Menu'
import { Order } from './Order'

@Entity('order_menus_item_items')
class OrderMenusItemItem {

    @PrimaryColumn()
    id: string

    @Column()
    quantity: number

    @ManyToOne(() => Item, item => item.ordermenuitem, { eager: true })
    item: Item

    @ManyToOne(() => Menu, menuitem => menuitem.ordermenuitem, { eager: true })
    menu: Menu

    @ManyToOne(() => Order, order => order.ordermenuitem)
    order: Order

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    constructor () {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { OrderMenusItemItem }
