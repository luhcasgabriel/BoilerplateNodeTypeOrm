import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMenuItems1621311174302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "menus_items_items",
                columns: [
                    {
                        name: "item_id",
                        type: "uuid",
                    },
                    {
                        name: "menu_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKItems",
                        referencedTableName: "items",
                        referencedColumnNames: ["id"],
                        columnNames: ["item_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKIMenus",
                        referencedTableName: "menus",
                        referencedColumnNames: ["id"],
                        columnNames: ["menu_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"  
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("menus_items_items");

    }

}
