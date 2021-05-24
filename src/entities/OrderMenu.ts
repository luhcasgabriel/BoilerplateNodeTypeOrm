import { Entity, PrimaryColumn, ManyToOne, OneToMany, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Order } from "./Order";
import { OrderMenuItem } from "./OrderMenuItem";
import { v4 as uuid } from "uuid";

@Entity({ name: 'order_menu' })
class OrderMenu {
  @PrimaryColumn()
  id: string

  @Column({ name: 'name_menu' })
  nameMenu: string

  @ManyToOne(() => Order, order => order.menus)
  order: Order

  @OneToMany(() => OrderMenuItem, orderMenuItem => orderMenuItem.orderMenu)
  items: OrderMenuItem[]

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

export { OrderMenu }
