import { Entity, PrimaryColumn, ManyToOne, Column } from "typeorm";
import { OrderMenu } from "./OrderMenu";
import { Item } from "./Item";

Entity({name: 'order_menu_item'})
export class OrderMenuItem {
  @PrimaryColumn()
  id: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Item)
  item: Item

  @ManyToOne(() => OrderMenu)
  orderMenu: OrderMenu
}