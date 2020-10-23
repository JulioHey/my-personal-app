import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class teammatch1603239921943 implements MigrationInterface {
    
    
    private table = new Table({
        name: "team_matches",
        columns:[
            {
                name: "team_match_id",
                type: "integer",
                isGenerated: true,
                generationStrategy: "increment",
                isPrimary: true,
            },
            {
                name: "team_id",
                type: "integer",
                isNullable: false,
            },
            {
                name: "match_id",
                type: "integer",
                isNullable: false,
            },
            {
                name: "round_id",
                type: "integer",
                isNullable: false,
            },
            {
                name: "coach_id",
                type: "integer",
                isNullable: false,
            },            
            {  
                name: "first_ban_id",
                type: "integer",
                isNullable: false,
            },
            {
                name: "second_ban_id",
                type: "integer",
                isNullable: false,
            },
            {
                name: "third_ban_id",
                type: "integer",
                isNullable: false,
            },
            {
                name: "match_status",
                type: "enum",
                isNullable: false,
                enum: ["win", "lost", "future", "inGame"],
            }
        ]
    })

    private foreignKey1 = new TableForeignKey({
        columnNames: [ 'team_id' ],
        referencedColumnNames: ['team_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'teams',
    });

    private foreignKey2 = new TableForeignKey({
        columnNames: [ 'match_id' ],
        referencedColumnNames: ['match_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'matches',
    });

    private foreignKey3 = new TableForeignKey({
        columnNames: [ 'first_ban_id' ],
        referencedColumnNames: ['champion_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'champions',
    });

    private foreignKey4 = new TableForeignKey({
        columnNames: [ 'second_ban_id' ],
        referencedColumnNames: ['champion_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'champions',
    });

    private foreignKey5 = new TableForeignKey({
        columnNames: [ 'third_ban_id' ],
        referencedColumnNames: ['champion_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'champions',
    });

    
    private foreignKey6 = new TableForeignKey({
        columnNames: [ 'round_id' ],
        referencedColumnNames: ['round_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'rounds',
    });

    private foreignKey7 = new TableForeignKey({
        columnNames: [ 'coach_id' ],
        referencedColumnNames: ['coach_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'coachs',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey('team_matches', this.foreignKey1);
        await queryRunner.createForeignKey('team_matches', this.foreignKey2);
        await queryRunner.createForeignKey('team_matches', this.foreignKey3);
        await queryRunner.createForeignKey('team_matches', this.foreignKey4);
        await queryRunner.createForeignKey('team_matches', this.foreignKey5);
        await queryRunner.createForeignKey('team_matches', this.foreignKey6);
        await queryRunner.createForeignKey('team_matches', this.foreignKey7);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey('team_matches', this.foreignKey1);
        await queryRunner.dropForeignKey('team_matches', this.foreignKey2);
        await queryRunner.dropForeignKey('team_matches', this.foreignKey3);
        await queryRunner.dropForeignKey('team_matches', this.foreignKey4);
        await queryRunner.dropForeignKey('team_matches', this.foreignKey5);
        await queryRunner.dropForeignKey('team_matches', this.foreignKey6);
        await queryRunner.dropForeignKey('team_matches', this.foreignKey7);
    }

}
