import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class match1602182256845 implements MigrationInterface {
    private table = new Table({
        name: 'matches',
        columns: [
            {
                name: 'match_id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'blueSideTeam_id',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'redSideTeam_id',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'round_id',
                type: 'integer',
                isNullable: false,
            },
        ]
    });

    private foreignKey1 = new TableForeignKey({
        columnNames: [ 'blueSideTeam_id' ],
        referencedColumnNames: ['team_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'teams',
    })

    private foreignKey2 = new TableForeignKey({
        columnNames: [ 'redSideTeam_id' ],
        referencedColumnNames: ['team_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'teams',
    })

    private foreignKey3 = new TableForeignKey({
        columnNames: [ 'round_id' ],
        referencedColumnNames: ['round_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'rounds',
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey('matches', this.foreignKey1);
        await queryRunner.createForeignKey('matches', this.foreignKey2);
        await queryRunner.createForeignKey('matches', this.foreignKey3);   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey('matches', this.foreignKey1);
        await queryRunner.dropForeignKey('matches', this.foreignKey2);
        await queryRunner.dropForeignKey('matches', this.foreignKey3);}
}
