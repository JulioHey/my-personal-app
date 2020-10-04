import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTeam1601842929092 implements MigrationInterface {
    private table = new Table({
        name: 'teams',
        columns: [
            {
                name: 'team_id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
            },
            {
                name: 'team_name',
                type: 'varchar',
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
