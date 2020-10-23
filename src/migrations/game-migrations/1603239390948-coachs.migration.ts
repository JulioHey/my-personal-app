import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class coachs1603239390948 implements MigrationInterface {
    private table = new Table({
        name: "coachs",
        columns: [
            {
                name: "coach_id",
                type: "integer",
                isGenerated: true,
                isPrimary: true,
                generationStrategy: "increment",
            },
            {
                name: 'team_id',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'coach_value',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'coach_name',
                type: 'varchar',
                isNullable: false,
            },
            {
                name: 'coach_nickname',
                type: 'varchar',
                isNullable: false,
            },
        ]
    });

    private foreignKey = new TableForeignKey({
        columnNames: [ 'team_id' ],
        referencedColumnNames: ['team_id'],
        onDelete: 'CASCADE',
        referencedTableName: 'teams',
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("coachs", this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("coachs", this.foreignKey);
    }

}
