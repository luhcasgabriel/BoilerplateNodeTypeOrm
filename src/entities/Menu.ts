

import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    JoinTable,
    ManyToMany

} from "typeorm";

import { v4 as uuid } from "uuid";
import { Item } from './Item'

@Entity("menus")
class Menu {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToMany(() => Item, { eager: true })
    @JoinTable()
    items: Item[];    

    @UpdateDateColumn()
    updatedAt: Date;

    constructor () {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { Menu }