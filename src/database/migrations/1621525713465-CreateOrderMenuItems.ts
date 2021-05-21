import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrderMenuItems1621525713465 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "ordermenuitems",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "order_id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "item_id",
                        type: "uuid"
                    },
                    {
                        name: "menu_id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "price",
                        type: "decimal",
                        isNullable: true
                    },
                    {
                        name: "quantity",
                        type: "numeric"
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
                        name: "FKOrderItems",
                        referencedTableName: "items",
                        referencedColumnNames: ["id"],
                        columnNames: ["item_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKOrderMenu",
                        referencedTableName: "menus",
                        referencedColumnNames: ["id"],
                        columnNames: ["menu_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"  
                    },
                    {
                        name: "FKOrder",
                        referencedTableName: "orders",
                        referencedColumnNames: ["id"],
                        columnNames: ["order_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"  
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("ordermenuitems");

    }

}
