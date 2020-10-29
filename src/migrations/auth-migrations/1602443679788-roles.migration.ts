import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class roles1602443679788 implements MigrationInterface {
    private table = new Table({
        name: "roles",
        columns: [
            {
                name: 'role_id',
                type: process.env.NODE_ENV === "test" ? "integer" : "uuid",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: process.env.NODE_ENV === "test" ? "increment" : "uuid",
                default: process.env.NODE_ENV === "test" ? "1" : "uuid_generate_v4()"
            },
            {
                name: 'role_name',
                type: 'varchar',
                isUnique: true,
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
