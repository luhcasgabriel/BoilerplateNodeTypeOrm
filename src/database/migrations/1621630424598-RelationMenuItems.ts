import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationMenuItems1621630424598 implements MigrationInterface {
    name = 'RelationMenuItems1621630424598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "menus_items_items" ("menusId" varchar NOT NULL, "itemsId" varchar NOT NULL, PRIMARY KEY ("menusId", "itemsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_97a1ae45f88d48392635588ced" ON "menus_items_items" ("menusId") `);
        await queryRunner.query(`CREATE INDEX "IDX_62065a1e1012f0d6f5c7c2fd33" ON "menus_items_items" ("itemsId") `);
        await queryRunner.query(`CREATE TABLE "temporary_items" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "price" decimal(5,2) NOT NULL DEFAULT (0), "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_items"("id", "name", "price", "created_at", "updated_at") SELECT "id", "name", "price", "created_at", "updated_at" FROM "items"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`ALTER TABLE "temporary_items" RENAME TO "items"`);
        await queryRunner.query(`CREATE TABLE "temporary_menus" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_menus"("id", "name", "created_at", "updated_at") SELECT "id", "name", "created_at", "updated_at" FROM "menus"`);
        await queryRunner.query(`DROP TABLE "menus"`);
        await queryRunner.query(`ALTER TABLE "temporary_menus" RENAME TO "menus"`);
        await queryRunner.query(`DROP INDEX "IDX_97a1ae45f88d48392635588ced"`);
        await queryRunner.query(`DROP INDEX "IDX_62065a1e1012f0d6f5c7c2fd33"`);
        await queryRunner.query(`CREATE TABLE "temporary_menus_items_items" ("menusId" varchar NOT NULL, "itemsId" varchar NOT NULL, CONSTRAINT "FK_97a1ae45f88d48392635588ced4" FOREIGN KEY ("menusId") REFERENCES "menus" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_62065a1e1012f0d6f5c7c2fd336" FOREIGN KEY ("itemsId") REFERENCES "items" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("menusId", "itemsId"))`);
        await queryRunner.query(`INSERT INTO "temporary_menus_items_items"("menusId", "itemsId") SELECT "menusId", "itemsId" FROM "menus_items_items"`);
        await queryRunner.query(`DROP TABLE "menus_items_items"`);
        await queryRunner.query(`ALTER TABLE "temporary_menus_items_items" RENAME TO "menus_items_items"`);
        await queryRunner.query(`CREATE INDEX "IDX_97a1ae45f88d48392635588ced" ON "menus_items_items" ("menusId") `);
        await queryRunner.query(`CREATE INDEX "IDX_62065a1e1012f0d6f5c7c2fd33" ON "menus_items_items" ("itemsId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_62065a1e1012f0d6f5c7c2fd33"`);
        await queryRunner.query(`DROP INDEX "IDX_97a1ae45f88d48392635588ced"`);
        await queryRunner.query(`ALTER TABLE "menus_items_items" RENAME TO "temporary_menus_items_items"`);
        await queryRunner.query(`CREATE TABLE "menus_items_items" ("menusId" varchar NOT NULL, "itemsId" varchar NOT NULL, PRIMARY KEY ("menusId", "itemsId"))`);
        await queryRunner.query(`INSERT INTO "menus_items_items"("menusId", "itemsId") SELECT "menusId", "itemsId" FROM "temporary_menus_items_items"`);
        await queryRunner.query(`DROP TABLE "temporary_menus_items_items"`);
        await queryRunner.query(`CREATE INDEX "IDX_62065a1e1012f0d6f5c7c2fd33" ON "menus_items_items" ("itemsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_97a1ae45f88d48392635588ced" ON "menus_items_items" ("menusId") `);
        await queryRunner.query(`ALTER TABLE "menus" RENAME TO "temporary_menus"`);
        await queryRunner.query(`CREATE TABLE "menus" ("id" uuid PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "menus"("id", "name", "created_at", "updated_at") SELECT "id", "name", "created_at", "updated_at" FROM "temporary_menus"`);
        await queryRunner.query(`DROP TABLE "temporary_menus"`);
        await queryRunner.query(`ALTER TABLE "items" RENAME TO "temporary_items"`);
        await queryRunner.query(`CREATE TABLE "items" ("id" uuid PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "price" decimal NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "items"("id", "name", "price", "created_at", "updated_at") SELECT "id", "name", "price", "created_at", "updated_at" FROM "temporary_items"`);
        await queryRunner.query(`DROP TABLE "temporary_items"`);
        await queryRunner.query(`DROP INDEX "IDX_62065a1e1012f0d6f5c7c2fd33"`);
        await queryRunner.query(`DROP INDEX "IDX_97a1ae45f88d48392635588ced"`);
        await queryRunner.query(`DROP TABLE "menus_items_items"`);
    }

}
