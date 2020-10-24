import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class userCompetitions1602640131747 implements MigrationInterface {
    private table = new Table({
        name: "user_competitions",
        columns: [
            {
                name: "user_competitions_id",
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
                name: "competition_id",
                type: "uuid",
            },
            {
                name: "user_competition_pontuation",
                type: "decimal",
                precision: 6,
                scale: 2
            }
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
        columnNames: [ 'competition_id' ],
        referencedColumnNames: ['competition_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'competitions',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("user_competitions", this.foreignKey1);
        await queryRunner.createForeignKey("user_competitions", this.foreignKey2);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("user_competitions", this.foreignKey1);
        await queryRunner.dropForeignKey("user_competitions", this.foreignKey2);
    }

}
