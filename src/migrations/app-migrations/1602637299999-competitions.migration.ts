import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class competitions1602637299999 implements MigrationInterface {
    private table = new Table({
        name: "competitions",
        columns: [
            {
                name: "competition_id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()"
            },
            {
                name: "competition_name",
                type: "varchar",
            },
            {
                name: "competition_owner",
                type: "uuid",
            },
        ]
    });

    private foreignKey = new TableForeignKey({
        columnNames: [ 'competition_owner' ],
        referencedColumnNames: ['user_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'users',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("competitions", this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("competitions", this.foreignKey);
    }

}
