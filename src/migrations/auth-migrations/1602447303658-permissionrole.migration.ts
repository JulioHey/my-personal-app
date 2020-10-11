import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class permissionrole1602447303658 implements MigrationInterface {
    private table = new Table({
        name: "permission_roles",
        columns: [
            {
                name: 'role_id',
                type: "uuid"
            },
            {
                name: 'permission_id',
                type: "uuid"
            },
        ]
    });

    private foreignKey1 = new TableForeignKey({
        columnNames: ['permission_id'],
        referencedColumnNames: ['permission_id'],
        referencedTableName: 'permissions',
        name: "fk_permissions_roles",
        onDelete: 'CASCADE',
        onUpdate: "SET NULL",
    });


    private foreignKey2 = new TableForeignKey({
        columnNames: ['role_id'],
        referencedColumnNames: ['role_id'],
        referencedTableName: 'roles',
        name: "fk_roles_permissions",
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
