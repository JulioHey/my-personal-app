import {MigrationInterface, QueryRunner, Table} from "typeorm";

require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : "env"
});

export class permissions1602442859833 implements MigrationInterface {
    private table = new Table ({
        name: "permissions",
        columns: [
            {
                name: "permission_id",
                type: process.env.NODE_ENV === "test" ? "integer" : "uuid",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: process.env.NODE_ENV === "test" ? "increment" : "uuid",
                default: process.env.NODE_ENV === "test" ? "1" : "uuid_generate_v4()"
            },
            {
                name: "permission_name",
                type: "varchar",
                isUnique: true
            },
            {
                name: "permission_description",
                type: "varchar",
                isUnique: true
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
