import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class coachMatchs1603239921941 implements MigrationInterface {
    private table = new Table({
        name: "coach_matchs",
        columns: [
            {
                name: "coach_match_id",
                type: "integer",
                isGenerated: true,
                isPrimary: true,
                generationStrategy: "increment",
            },
            {
                name: 'coach_id',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'round_id',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'match_id',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'coach_value',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'coach_pontuation',
                type: 'integer',
                isNullable: false,
            },
        ]
    });

    private foreignKey1 = new TableForeignKey({
        columnNames: [ 'coach_id' ],
        referencedColumnNames: ['coach_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'coachs',
    });

    private foreignKey2 = new TableForeignKey({
        columnNames: [ 'round_id' ],
        referencedColumnNames: ['round_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'rounds',
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
        await queryRunner.createForeignKey("coach_matchs", this.foreignKey1);
        await queryRunner.createForeignKey("coach_matchs", this.foreignKey2);
        await queryRunner.createForeignKey("coach_matchs", this.foreignKey3);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("coach_matchs", this.foreignKey1);
        await queryRunner.createForeignKey("coach_matchs", this.foreignKey2);
        await queryRunner.createForeignKey("coach_matchs", this.foreignKey3);
    }

}
