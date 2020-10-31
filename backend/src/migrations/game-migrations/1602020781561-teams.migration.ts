import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class teams1602020781561 implements MigrationInterface {
    private table = new Table({
        name: "teams",
        columns: [
            {
                name: "team_id",
                type: "integer",
                isGenerated: true,
                isPrimary: true,
                generationStrategy: "increment",
            },
            {
                name: "team_name",
                type: "varchar",
                isNullable: false,
                isUnique: true
            },
            {
                name: "team_position",
                type: "integer",
                isNullable: false,
            }
        ]                 
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }

}
