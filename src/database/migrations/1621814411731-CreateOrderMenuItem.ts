import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrderMenuItem1621814411731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "order_menu_item",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "quantity",
                        type: "numeric"
                    },
                    {
                        name: "price",
                        type: "decimal",
                        isNullable: true
                    },
                    {
                        name: "order_menu_id",
                        type: "uuid",
                    },
                    {
                        name: "item_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKOrderMenuItemItems",
                        referencedTableName: "items",
                        referencedColumnNames: ["id"],
                        columnNames: ["item_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKOrderMenuItemOrderMenu",
                        referencedTableName: "order_menus",
                        referencedColumnNames: ["id"],
                        columnNames: ["order_menu_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"  
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("order_menu_item");
    }

}
