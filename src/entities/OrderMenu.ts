import { Entity, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";
import { Order } from "./Order";
import { OrderMenuItem } from "./OrderMenuItems";

Entity({name: 'order_menu'})
export class OrderMenu {
  @PrimaryColumn()
  id: string

  @ManyToOne(() => Order, order => order.menus)
  order: Order

  @OneToMany(() => OrderMenuItem, orderMenuItem => orderMenuItem.orderMenu)
  items: OrderMenuItem[]
}