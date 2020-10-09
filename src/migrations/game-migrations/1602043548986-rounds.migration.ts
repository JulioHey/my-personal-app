import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class rounds1602043548986 implements MigrationInterface {
    private table = new Table({
        name: "rounds",
        columns: [
            {
                name: "round_id",
                type: "integer",
                isGenerated: true,
                isPrimary: true,
                generationStrategy: "increment",
            },
            {
                name: "round_number",
                type: "integer",
                isNullable: false,
                isUnique: true
            },
            {
                name: "round_date",
                type: "varchar",
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
