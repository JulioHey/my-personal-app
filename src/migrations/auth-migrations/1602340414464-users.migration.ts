import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1602340414464 implements MigrationInterface {
    private table = new Table({
        name: "users",
        columns:[
            {
                name: "user_id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()"
            },
            {
                name: "email",
                type:"varchar"
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
