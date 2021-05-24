import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1621699948801 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "price",
                        type: "decimal",
                        isNullable: true
                    },
                    {
                        name: "discount",
                        type: "decimal",
                        isNullable: true
                    },
                    {
                        name: "client_name",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "order_number",
                        type: "number",
                        isNullable: true
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
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders");
    }

}
