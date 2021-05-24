import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationOrderMenu1621817007575 implements MigrationInterface {
    name = 'RelationOrderMenu1621817007575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order_menu_item" ("id" varchar PRIMARY KEY NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL, "order_menu_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "itemId" varchar, "orderMenuId" varchar)`);
        await queryRunner.query(`CREATE TABLE "order_menu" ("id" varchar PRIMARY KEY NOT NULL, "name_menu" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "orderId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_orders" ("id" varchar PRIMARY KEY NOT NULL, "price" decimal(5,2) NOT NULL DEFAULT (0), "discount" decimal(5,2) NOT NULL DEFAULT (0), "client_name" varchar NOT NULL, "order_number" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_orders"("id", "price", "discount", "client_name", "order_number", "created_at", "updated_at") SELECT "id", "price", "discount", "client_name", "order_number", "created_at", "updated_at" FROM "orders"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`ALTER TABLE "temporary_orders" RENAME TO "orders"`);
        await queryRunner.query(`CREATE TABLE "temporary_order_menu_item" ("id" varchar PRIMARY KEY NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL, "order_menu_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "itemId" varchar, "orderMenuId" varchar, CONSTRAINT "FK_61a1a357d6bc4ba5ebc2ef93143" FOREIGN KEY ("itemId") REFERENCES "items" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_1616b31543b191155fc934824c2" FOREIGN KEY ("orderMenuId") REFERENCES "order_menu" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_order_menu_item"("id", "quantity", "price", "order_menu_id", "created_at", "updated_at", "itemId", "orderMenuId") SELECT "id", "quantity", "price", "order_menu_id", "created_at", "updated_at", "itemId", "orderMenuId" FROM "order_menu_item"`);
        await queryRunner.query(`DROP TABLE "order_menu_item"`);
        await queryRunner.query(`ALTER TABLE "temporary_order_menu_item" RENAME TO "order_menu_item"`);
        await queryRunner.query(`CREATE TABLE "temporary_order_menu" ("id" varchar PRIMARY KEY NOT NULL, "name_menu" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "orderId" varchar, CONSTRAINT "FK_afd0cd94d5d5fa03f2f960dd203" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_order_menu"("id", "name_menu", "created_at", "updated_at", "orderId") SELECT "id", "name_menu", "created_at", "updated_at", "orderId" FROM "order_menu"`);
        await queryRunner.query(`DROP TABLE "order_menu"`);
        await queryRunner.query(`ALTER TABLE "temporary_order_menu" RENAME TO "order_menu"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_menu" RENAME TO "temporary_order_menu"`);
        await queryRunner.query(`CREATE TABLE "order_menu" ("id" varchar PRIMARY KEY NOT NULL, "name_menu" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "orderId" varchar)`);
        await queryRunner.query(`INSERT INTO "order_menu"("id", "name_menu", "created_at", "updated_at", "orderId") SELECT "id", "name_menu", "created_at", "updated_at", "orderId" FROM "temporary_order_menu"`);
        await queryRunner.query(`DROP TABLE "temporary_order_menu"`);
        await queryRunner.query(`ALTER TABLE "order_menu_item" RENAME TO "temporary_order_menu_item"`);
        await queryRunner.query(`CREATE TABLE "order_menu_item" ("id" varchar PRIMARY KEY NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL, "order_menu_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "itemId" varchar, "orderMenuId" varchar)`);
        await queryRunner.query(`INSERT INTO "order_menu_item"("id", "quantity", "price", "order_menu_id", "created_at", "updated_at", "itemId", "orderMenuId") SELECT "id", "quantity", "price", "order_menu_id", "created_at", "updated_at", "itemId", "orderMenuId" FROM "temporary_order_menu_item"`);
        await queryRunner.query(`DROP TABLE "temporary_order_menu_item"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME TO "temporary_orders"`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid PRIMARY KEY NOT NULL, "price" decimal, "discount" decimal, "client_name" varchar, "order_number" number, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "orders"("id", "price", "discount", "client_name", "order_number", "created_at", "updated_at") SELECT "id", "price", "discount", "client_name", "order_number", "created_at", "updated_at" FROM "temporary_orders"`);
        await queryRunner.query(`DROP TABLE "temporary_orders"`);
        await queryRunner.query(`DROP TABLE "order_menu"`);
        await queryRunner.query(`DROP TABLE "order_menu_item"`);
    }

}
