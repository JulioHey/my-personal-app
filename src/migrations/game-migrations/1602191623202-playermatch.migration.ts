import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class playermatch1602191623202 implements MigrationInterface {
    private table = new Table({
        name: "player_matches",
        columns: [
            {
                name: "player_match_id",
                type: "integer",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: "player_id",
                type: "integer",
                isNullable: false
            },
            {
                name: "match_id",
                type: "integer",
                isNullable: false
            },
            {
                name: "champion_id",
                type: "integer",
                isNullable: false
            },
            {
                name: "player_points",
                type: "integer",
                isNullable: false
            }
        ]
    });

    private foreignKey1 = new TableForeignKey({
        columnNames: [ 'player_id' ],
        referencedColumnNames: ['player_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'players',
    });

    private foreignKey2 = new TableForeignKey({
        columnNames: [ 'champion_id' ],
        referencedColumnNames: ['champion_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'champions',
    });

    private foreignKey3 = new TableForeignKey({
        columnNames: [ 'match_id' ],
        referencedColumnNames: ['match_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'matches',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey('player_matches', this.foreignKey1);
        await queryRunner.createForeignKey('player_matches', this.foreignKey2);
        await queryRunner.createForeignKey('player_matches', this.foreignKey3);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey('player_matches', this.foreignKey1);
        await queryRunner.dropForeignKey('player_matches', this.foreignKey2);
        await queryRunner.dropForeignKey('player_matches', this.foreignKey3);
    }

}
