import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class players1602118335502 implements MigrationInterface {
    private table = new Table({
        name: 'players',
        columns: [
            {
                name: 'player_id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'playerTeam_id',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'player_name',
                type: 'varchar',
                length: '40',
                isNullable: false,
            },
            {
                name: 'player_position',
                type: 'varchar',
                length: '10',
                isNullable: false,
            },
            {
                name: 'player_value',
                type: 'float',
                isNullable: false,
            },
            {
                name: 'player_nickname',
                type: 'varchar',
                isNullable: false,
            },
        ]
    });

    private foreignKey = new TableForeignKey({
        columnNames: [ 'playerTeam_id' ],
        referencedColumnNames: ['team_id'],
        onDelete: 'CASCADE',
        referencedTableName: 'teams',
    })
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey('players', this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.dropForeignKey("players", this.foreignKey)
    }


}
