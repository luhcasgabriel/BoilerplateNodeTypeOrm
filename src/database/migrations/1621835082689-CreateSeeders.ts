import {MigrationInterface, QueryRunner} from "typeorm";
import { Seeder } from "../seeders/Seeders"
 
export class CreateSeeders1621835082689 implements MigrationInterface {

    private seed : Seeder;
    
    constructor() {
        this.seed = new Seeder();
    }
    

    public async up(queryRunner: QueryRunner): Promise<void> {

        await this.seed.Up();

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await this.seed.Down();
    }

}
