import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class teamdragons1603239921944 implements MigrationInterface {
    private table = new Table({
        name: "team_dragons",
        columns: [
            {
                name: "team_match_id",
                type: "integer",
                isPrimary: true,
            },
            {
                name: "first_dragon",
                type: "boolean",
                isNullable: false,
            },
            {
                name: "second_dragon",
                type: "boolean",
                isNullable: false,
            },
            {
                name: "soul_dragon",
                type: "integer",
                isNullable: false,
            },
            {
                name: "ancient_dragon",
                type: "integer",
                isNullable: false,
            },
        ]
    });

    private foreignKey = new TableForeignKey({
        columnNames: [ 'team_match_id' ],
        referencedColumnNames: ['team_match_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'team_matches',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("team_dragons", this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("team_dragons", this.foreignKey);
    }

}
