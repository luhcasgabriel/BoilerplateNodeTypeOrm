import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationOrderorderMenusItemItems1621704266940 implements MigrationInterface {
    name = 'RelationOrderorderMenusItemItems1621704266940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_order_menus_item_items" ("id" uuid PRIMARY KEY NOT NULL, "quantity" numeric NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "temporary_order_menus_item_items"("id", "quantity", "created_at", "updated_at") SELECT "id", "quantity", "created_at", "updated_at" FROM "order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "order_menus_item_items"`);
        await queryRunner.query(`ALTER TABLE "temporary_order_menus_item_items" RENAME TO "order_menus_item_items"`);
        await queryRunner.query(`CREATE TABLE "temporary_order_menus_item_items" ("id" uuid PRIMARY KEY NOT NULL, "quantity" numeric NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), "orderId" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_order_menus_item_items"("id", "quantity", "created_at", "updated_at") SELECT "id", "quantity", "created_at", "updated_at" FROM "order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "order_menus_item_items"`);
        await queryRunner.query(`ALTER TABLE "temporary_order_menus_item_items" RENAME TO "order_menus_item_items"`);
        await queryRunner.query(`CREATE TABLE "temporary_order_menus_item_items" ("id" varchar PRIMARY KEY NOT NULL, "quantity" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "orderId" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_order_menus_item_items"("id", "quantity", "created_at", "updated_at", "orderId") SELECT "id", "quantity", "created_at", "updated_at", "orderId" FROM "order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "order_menus_item_items"`);
        await queryRunner.query(`ALTER TABLE "temporary_order_menus_item_items" RENAME TO "order_menus_item_items"`);
        await queryRunner.query(`CREATE TABLE "temporary_orders" ("id" varchar PRIMARY KEY NOT NULL, "price" decimal(5,2) NOT NULL DEFAULT (0), "discount" decimal(5,2) NOT NULL DEFAULT (0), "client_name" varchar NOT NULL, "order_number" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_orders"("id", "price", "discount", "client_name", "order_number", "created_at", "updated_at") SELECT "id", "price", "discount", "client_name", "order_number", "created_at", "updated_at" FROM "orders"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`ALTER TABLE "temporary_orders" RENAME TO "orders"`);
        await queryRunner.query(`CREATE TABLE "temporary_order_menus_item_items" ("id" varchar PRIMARY KEY NOT NULL, "quantity" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "orderId" varchar, CONSTRAINT "FK_3d9e0883b1a5ccec7fd3451aaa7" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_order_menus_item_items"("id", "quantity", "created_at", "updated_at", "orderId") SELECT "id", "quantity", "created_at", "updated_at", "orderId" FROM "order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "order_menus_item_items"`);
        await queryRunner.query(`ALTER TABLE "temporary_order_menus_item_items" RENAME TO "order_menus_item_items"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_menus_item_items" RENAME TO "temporary_order_menus_item_items"`);
        await queryRunner.query(`CREATE TABLE "order_menus_item_items" ("id" varchar PRIMARY KEY NOT NULL, "quantity" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "orderId" varchar)`);
        await queryRunner.query(`INSERT INTO "order_menus_item_items"("id", "quantity", "created_at", "updated_at", "orderId") SELECT "id", "quantity", "created_at", "updated_at", "orderId" FROM "temporary_order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "temporary_order_menus_item_items"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME TO "temporary_orders"`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid PRIMARY KEY NOT NULL, "price" decimal, "discount" decimal, "client_name" varchar, "order_number" number, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "orders"("id", "price", "discount", "client_name", "order_number", "created_at", "updated_at") SELECT "id", "price", "discount", "client_name", "order_number", "created_at", "updated_at" FROM "temporary_orders"`);
        await queryRunner.query(`DROP TABLE "temporary_orders"`);
        await queryRunner.query(`ALTER TABLE "order_menus_item_items" RENAME TO "temporary_order_menus_item_items"`);
        await queryRunner.query(`CREATE TABLE "order_menus_item_items" ("id" uuid PRIMARY KEY NOT NULL, "quantity" numeric NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), "orderId" varchar)`);
        await queryRunner.query(`INSERT INTO "order_menus_item_items"("id", "quantity", "created_at", "updated_at", "orderId") SELECT "id", "quantity", "created_at", "updated_at", "orderId" FROM "temporary_order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "temporary_order_menus_item_items"`);
        await queryRunner.query(`ALTER TABLE "order_menus_item_items" RENAME TO "temporary_order_menus_item_items"`);
        await queryRunner.query(`CREATE TABLE "order_menus_item_items" ("id" uuid PRIMARY KEY NOT NULL, "quantity" numeric NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "order_menus_item_items"("id", "quantity", "created_at", "updated_at") SELECT "id", "quantity", "created_at", "updated_at" FROM "temporary_order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "temporary_order_menus_item_items"`);
        await queryRunner.query(`ALTER TABLE "order_menus_item_items" RENAME TO "temporary_order_menus_item_items"`);
        await queryRunner.query(`CREATE TABLE "order_menus_item_items" ("id" uuid NOT NULL, "order_id" uuid NOT NULL, "item_id" uuid NOT NULL, "menu_id" uuid NOT NULL, "price" decimal, "quantity" numeric NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), PRIMARY KEY ("id", "order_id", "item_id", "menu_id"))`);
        await queryRunner.query(`INSERT INTO "order_menus_item_items"("id", "quantity", "created_at", "updated_at") SELECT "id", "quantity", "created_at", "updated_at" FROM "temporary_order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "temporary_order_menus_item_items"`);
    }

}
