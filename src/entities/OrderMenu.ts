import { Entity, PrimaryColumn, ManyToOne, OneToMany, Column, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { Order } from "./Order";
import { OrderMenuItem } from "./OrderMenuItem";

Entity({name: 'order_menu'})
export class OrderMenu {
  @PrimaryColumn()
  id: string

  @Column({ type: 'varchar', name: 'order_id' })
  orderId: string

  @Column({ name: 'name_menu' })
  nameMenu: string

  @ManyToOne(() => Order, order => order.orderMenus)
  @JoinColumn({ name: 'order_id' })
  order: Order

  @OneToMany(() => OrderMenuItem, orderMenuItem => orderMenuItem.orderMenu)
  items: OrderMenuItem[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
