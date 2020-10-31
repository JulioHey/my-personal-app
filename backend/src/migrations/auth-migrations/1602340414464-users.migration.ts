import {MigrationInterface, QueryRunner, Table} from "typeorm";

require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : "env"
});


export class users1602340414464 implements MigrationInterface {
    private table = new Table({
        name: "users",
        columns:[
            {
                name: "user_id",
                type: process.env.NODE_ENV === "test" ? "integer" : "uuid",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: process.env.NODE_ENV === "test" ? "increment" : "uuid",
                default: process.env.NODE_ENV === "test" ? "1" : "uuid_generate_v4()"
            },
            {
                name: "email",
                type:"varchar",
                isUnique: true,
            },
            {
                name: "user_name",
                type:"varchar"
            }
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table)
    }

}
