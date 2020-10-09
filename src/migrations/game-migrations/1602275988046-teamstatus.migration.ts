import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class teamstatus1602275988046 implements MigrationInterface {
    private table = new Table({
        name: "team_status",
        columns:[
            {
                name: "team_match_id",
                type: "integer",
                isPrimary: true,
            },
            {
                name: "team_towers",
                type: "integer",
                isNullable: false,
            },
            {
                name: "team_barricades",
                type: "integer",
                isNullable: false,
            },
            {
                name: "team_barons",
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
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("team_status", this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("team_status", this.foreignKey);
    }

}
