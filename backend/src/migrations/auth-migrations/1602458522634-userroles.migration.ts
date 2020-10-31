import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class userroles1602458522634 implements MigrationInterface {
    private table = new Table({
        name: "user_roles",
                columns: [
                    {
                        name: "role_id",
                        type: "uuid",
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                ]
    });

    private foreignKey1 = new TableForeignKey({
        columnNames: ['role_id'],
        referencedColumnNames: ['role_id'],
        referencedTableName: 'roles',
        name: "fk_roles_users",
        onDelete: 'CASCADE',
        onUpdate: "SET NULL",
    });

    private foreignKey2 = new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['user_id'],
        referencedTableName: 'users',
        name: "fk_users_roles",
        onDelete: 'CASCADE',
        onUpdate: "SET NULL",
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("user_roles", this.foreignKey1);
        await queryRunner.createForeignKey("user_roles", this.foreignKey2);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("user_roles", this.foreignKey1);
        await queryRunner.dropForeignKey("user_roles", this.foreignKey2);
    }

}
