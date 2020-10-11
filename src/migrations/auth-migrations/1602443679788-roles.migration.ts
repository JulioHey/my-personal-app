import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class roles1602443679788 implements MigrationInterface {
    private table = new Table({
        name: "roles",
        columns: [
            {
                name: 'role_id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
            },
            {
                name: 'role_name',
                type: 'varchar'
            },
            {
                name: 'role_description',
                type: 'varchar'
            },
        ]
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }
}
