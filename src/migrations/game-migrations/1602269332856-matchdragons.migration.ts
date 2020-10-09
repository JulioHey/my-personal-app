import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class matchdragons1602269332856 implements MigrationInterface {
    private table = new Table({
        name: "match_dragons",
        columns:[
            {
                name: "match_id",
                type: "integer",
                isPrimary: true
            },
            {
                name: "first_dragon",
                type: "enum",
                isNullable: false,
                enum: ["wind", "fire", "mountain", "ocean"]
            },
            {
                name: "second_dragon",
                type: "enum",
                isNullable: false,
                enum: ["wind", "fire", "mountain", "ocean"]
            },
            {
                name: "soul_dragon",
                type: "enum",
                isNullable: false,
                enum: ["wind", "fire", "mountain", "ocean"]
            }
        ]
    });

    private foreignKey = new TableForeignKey({
        columnNames: [ 'match_id' ],
        referencedColumnNames: ['match_id'],
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        referencedTableName: 'matches',
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey("match_dragons", this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKey("match_dragons", this.foreignKey);
    }

}
