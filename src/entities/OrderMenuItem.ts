import { Entity, PrimaryColumn, ManyToOne, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { OrderMenu } from "./OrderMenu";
import { Item } from "./Item";
import { v4 as uuid } from "uuid";

@Entity({name: 'order_menu_item'})
class OrderMenuItem {
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

  constructor() {
    if(!this.id) {
        this.id = uuid()
    }
  }
}

export { OrderMenuItem }
