import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class champions1602107864785 implements MigrationInterface {
    private table = new Table({
        name: "champions",
        columns: [
            {
                name: "champion_id",
                type: "integer",
                isGenerated: true,
                isPrimary: true,
                generationStrategy: "increment",
            },
            {
                name: "champion_name",
                type: "varchar",
                isNullable: false,
                isUnique: true
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
