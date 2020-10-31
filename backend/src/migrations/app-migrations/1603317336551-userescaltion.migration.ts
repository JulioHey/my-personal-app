import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class userescalation1603239921942 implements MigrationInterface {
    private table = new Table({
        name: "user_escalations",
        columns:[
            {
                name:"user_escalation_id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()"
            },
            {
                name: "user_id",
                type: "uuid",
            },
            {
                name: "round_id",
                type: "integer",
            },
            {
                name: "coach_id",
                type: "integer",
            },
            {
                name: "top_laner_id",
                type: "integer",
            },
            {
                name: "jungler_id",
                type: "integer",
            },
            {
                name: "mid_laner_id",
                type: "integer",
            },
            {
                name: "ad_carry_id",
                type: "integer",
            },
            {
                name: "support_id",
                type: "integer",
            },
            {
                name: "first_ban_id",
                type: "integer",
            },
            {
                name: "second_ban_id",
                type: "integer",
            },
            {
                name: "third_ban_id",
                type: "integer",
            },
            {
                name: "user_pontuation",
                type: "decimal",
                precision: 5,
                scale: 2
            },
        ]
    });

    private foreignKey1 = new TableForeignKey({
        columnNames: [ 'user_id' ],
        referencedColumnNames: ['user_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'users',
    });

    private foreignKey2 = new TableForeignKey({
        columnNames: [ 'round_id' ],
        referencedColumnNames: ['round_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'rounds',
    });

    private foreignKey3 = new TableForeignKey({
        columnNames: [ 'coach_id' ],
        referencedColumnNames: ['coach_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'coachs',
    });

    private foreignKey4 = new TableForeignKey({
        columnNames: [ 'top_laner_id' ],
        referencedColumnNames: ['player_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'players',
    })

    private foreignKey5 = new TableForeignKey({
        columnNames: [ 'jungler_id' ],
        referencedColumnNames: ['player_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'players',
    })

    private foreignKey6 = new TableForeignKey({
        columnNames: [ 'mid_laner_id' ],
        referencedColumnNames: ['player_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'players',
    })

    private foreignKey7 = new TableForeignKey({
        columnNames: [ 'ad_carry_id' ],
        referencedColumnNames: ['player_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'players',
    })

    private foreignKey8 = new TableForeignKey({
        columnNames: [ 'support_id' ],
        referencedColumnNames: ['player_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'players',
    })

    private foreignKey9 = new TableForeignKey({
        columnNames: [ 'first_ban_id' ],
        referencedColumnNames: ['champion_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'champions',
    })

    private foreignKey10 = new TableForeignKey({
        columnNames: [ 'second_ban_id' ],
        referencedColumnNames: ['champion_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'champions',
    });
    
    private foreignKey11 = new TableForeignKey({
        columnNames: [ 'third_ban_id' ],
        referencedColumnNames: ['champion_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'champions',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey1);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey2);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey3);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey4);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey5);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey6);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey7);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey8);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey9);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey10);
        await queryRunner.createForeignKey("user_escalations", this.foreignKey11);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey1);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey2);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey3);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey4);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey5);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey6);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey7);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey8);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey9);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey10);
        await queryRunner.dropForeignKey("user_escalations", this.foreignKey11);
    }

}
