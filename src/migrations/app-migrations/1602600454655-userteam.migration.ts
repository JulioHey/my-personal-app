import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class userteam1602600454655 implements MigrationInterface {
    private table = new Table({
        name: "user_teams",
        columns:[
            {
                name: "user_id",
                type: "uuid",
                isPrimary: true
            },
            {
                name: "user_team_name",
                type: "varchar"
            },
            {
                name: "user_team_coach_name",
                type: "varchar"
            },
            {
                name: "user_team_patrimony",
                type: "integer"
            },
        ]
    });


    private foreignKey = new TableForeignKey({
        columnNames: [ 'user_id' ],
        referencedColumnNames: ['user_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'users',
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("user_teams", this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("user_teams", this.foreignKey);
    }

}
