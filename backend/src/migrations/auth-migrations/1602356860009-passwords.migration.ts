import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : "env"
});


export class passwords1602356860009 implements MigrationInterface {
    private table = new Table({
        name: "passwords",
        columns:[
            {
                name: "user_id",
                type: process.env.NODE_ENV === "test" ? "integer" : "uuid",
                isPrimary: true,
            },
            {
                name: "user_password",
                type:"varchar"
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
        await queryRunner.createTable(this.table)
        await queryRunner.createForeignKey("passwords", this.foreignKey)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table)
        await queryRunner.dropForeignKey("passwords", this.foreignKey)
    }
}
