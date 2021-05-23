import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationOrderorderMenusItemItems21621787785794 implements MigrationInterface {
    name = 'RelationOrderorderMenusItemItems21621787785794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_order_menus_item_items" ("id" varchar PRIMARY KEY NOT NULL, "quantity" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "orderId" varchar, "itemId" varchar, "menuId" varchar, CONSTRAINT "FK_3d9e0883b1a5ccec7fd3451aaa7" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_order_menus_item_items"("id", "quantity", "created_at", "updated_at", "orderId") SELECT "id", "quantity", "created_at", "updated_at", "orderId" FROM "order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "order_menus_item_items"`);
        await queryRunner.query(`ALTER TABLE "temporary_order_menus_item_items" RENAME TO "order_menus_item_items"`);
        await queryRunner.query(`CREATE TABLE "temporary_order_menus_item_items" ("id" varchar PRIMARY KEY NOT NULL, "quantity" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "orderId" varchar, "itemId" varchar, "menuId" varchar, CONSTRAINT "FK_3d9e0883b1a5ccec7fd3451aaa7" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9956826e3ecdb5cd7420856ce7d" FOREIGN KEY ("itemId") REFERENCES "items" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_60bff579140b50810fef4b2caf7" FOREIGN KEY ("menuId") REFERENCES "menus" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_order_menus_item_items"("id", "quantity", "created_at", "updated_at", "orderId", "itemId", "menuId") SELECT "id", "quantity", "created_at", "updated_at", "orderId", "itemId", "menuId" FROM "order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "order_menus_item_items"`);
        await queryRunner.query(`ALTER TABLE "temporary_order_menus_item_items" RENAME TO "order_menus_item_items"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_menus_item_items" RENAME TO "temporary_order_menus_item_items"`);
        await queryRunner.query(`CREATE TABLE "order_menus_item_items" ("id" varchar PRIMARY KEY NOT NULL, "quantity" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "orderId" varchar, "itemId" varchar, "menuId" varchar, CONSTRAINT "FK_3d9e0883b1a5ccec7fd3451aaa7" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "order_menus_item_items"("id", "quantity", "created_at", "updated_at", "orderId", "itemId", "menuId") SELECT "id", "quantity", "created_at", "updated_at", "orderId", "itemId", "menuId" FROM "temporary_order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "temporary_order_menus_item_items"`);
        await queryRunner.query(`ALTER TABLE "order_menus_item_items" RENAME TO "temporary_order_menus_item_items"`);
        await queryRunner.query(`CREATE TABLE "order_menus_item_items" ("id" varchar PRIMARY KEY NOT NULL, "quantity" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "orderId" varchar, CONSTRAINT "FK_3d9e0883b1a5ccec7fd3451aaa7" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "order_menus_item_items"("id", "quantity", "created_at", "updated_at", "orderId") SELECT "id", "quantity", "created_at", "updated_at", "orderId" FROM "temporary_order_menus_item_items"`);
        await queryRunner.query(`DROP TABLE "temporary_order_menus_item_items"`);
    }

}
