

import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToMany } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { OrderMenusItemItem } from './OrderMenusItemItem'

@Entity('items')
class Item {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    price: number

    quantity: number

    @OneToMany(() => OrderMenusItemItem, orderMenuitem => orderMenuitem.item)
    ordermenuitem: OrderMenusItemItem[]

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

export { Item }
