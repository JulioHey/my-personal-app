import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class permissions1602442859833 implements MigrationInterface {
    private table = new Table ({
        name: "permissions",
        columns: [
            {
                name: "permission_id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()",
            },
            {
                name: "permission_name",
                type: "varchar",
            },
            {
                name: "permission_description",
                type: "varchar",
            },
        ]
    })
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }

}
