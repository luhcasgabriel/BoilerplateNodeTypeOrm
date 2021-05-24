import { Entity, PrimaryColumn, ManyToOne, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { OrderMenu } from "./OrderMenu";
import { Item } from "./Item";

@Entity({name: 'order_menu_items'})
export class OrderMenuItem {
  @PrimaryColumn()
  id: string;

  @Column()
  quantity: number;

  @Column()
  price: number

  @Column({ type: 'varchar', name: 'order_menu_id' })
  orderMenuId: string

  @ManyToOne(() => Item)
  item: Item

  @ManyToOne(() => OrderMenu)
  orderMenu: OrderMenu

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}