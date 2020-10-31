import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class playerstatus1602257804116 implements MigrationInterface {
    private table = new Table({
        name: "player_status",
        columns: [
            {
                name: "player_match_id",
                type: "integer",
                isPrimary: true,
            },
            {
                name: "player_kills",
                type: "integer",
                isNullable: false,
            },
            {
                name: "player_deaths",
                type: "integer",
                isNullable: false,
            },
            {
                name: "player_assists",
                type: "integer",
                isNullable: false,
            },
            {
                name: "player_minions",
                type: "integer",
                isNullable: false,
            },
            {
                name: "player_vision",
                type: "integer",
                isNullable: false,
            },
            {
                name: "player_gold",
                type: "integer",
                isNullable: false,
            }
        ]
    });

    private foreignKey = new TableForeignKey({
        columnNames: [ 'player_match_id' ],
        referencedColumnNames: ['player_match_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'player_matches',
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("player_status", this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("player_status", this.foreignKey);
    }

}
