import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : "env"
});

export class permissionrole1602447303658 implements MigrationInterface {
    private table = new Table({
        name: "permission_roles",
        columns: [
            {
                name: "permission_role_id",
                type: (process.env.NODE_ENV === "test" ? "integer" : "uuid"),
                isPrimary: true,
                isGenerated: true,
                generationStrategy: (process.env.NODE_ENV === "test" ? "increment" : "uuid"),
                default: (process.env.NODE_ENV === "test" ? "1" : "uuid_generate_v4()")
            },
            {
                name: 'role_id',
                type: (process.env.NODE_ENV === "test" ? "integer" : "uuid"),
            },
            {
                name: 'permission_id',
                type: (process.env.NODE_ENV === "test" ? "integer" : "uuid"),
            },
        ]
    });

    private foreignKey1 = new TableForeignKey({
        columnNames: ['permission_id'],
        referencedColumnNames: ['permission_id'],
        referencedTableName: 'permissions',
        onDelete: 'CASCADE',
        onUpdate: "SET NULL",
    });


    private foreignKey2 = new TableForeignKey({
        columnNames: ['role_id'],
        referencedColumnNames: ['role_id'],
        referencedTableName: 'roles',
        onDelete: 'CASCADE',
        onUpdate: "SET NULL",
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey('permission_roles', this.foreignKey1);
        await queryRunner.createForeignKey('permission_roles', this.foreignKey2);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey('permission_roles', this.foreignKey1);
        await queryRunner.dropForeignKey('permission_roles', this.foreignKey2);
    }
}
