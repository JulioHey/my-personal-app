import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class useruser1602629905350 implements MigrationInterface {
    private table = new Table({
        name: "friends",
        columns:[
            {
                name: "user_one_id",
                type: "uuid",
            },
            {
                name: "user_two_id",
                type: "uuid",
            },
        ]
    });

    private foreignKey1 = new TableForeignKey({
        columnNames: [ 'user_one_id' ],
        referencedColumnNames: ['user_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'users',
    });
    
    private foreignKey2 = new TableForeignKey({
        columnNames: [ 'user_two_id' ],
        referencedColumnNames: ['user_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'users',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("friends", this.foreignKey1);
        await queryRunner.createForeignKey("friends", this.foreignKey2);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("friends", this.foreignKey1);
        await queryRunner.dropForeignKey("friends", this.foreignKey2);
    }

}
