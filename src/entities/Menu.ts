

import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, JoinTable, ManyToMany, OneToMany } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Item } from './Item'
import { OrderMenusItemItem } from './OrderMenusItemItem'
import { Promotion } from "./Promotion"

@Entity('menus')
class Menu {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @ManyToMany(() => Item)
    @JoinTable()
    items: Item[]

    @OneToMany(() => OrderMenusItemItem, ordermenuitem => ordermenuitem.menu)
    ordermenuitem: OrderMenusItemItem[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    promotions: Promotion[]

    constructor () {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Menu }
