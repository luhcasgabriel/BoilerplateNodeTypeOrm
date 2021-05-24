import {MigrationInterface, QueryRunner, Table, getConnection} from "typeorm";
import { Item } from "../../entities/Item";
import { v4 as uuid } from "uuid";

export class CreateItems1621286804739 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "items",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "price",
                        type: "decimal"
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

        await queryRunner.dropTable("items");
    }

}
