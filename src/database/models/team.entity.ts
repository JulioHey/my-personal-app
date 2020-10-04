import {
    BaseEntity, 
    Column, 
    Entity, 
    PrimaryGeneratedColumn
} from "typeorm";

@Entity({name: "teams"})
export default class Team extends BaseEntity {
    @PrimaryGeneratedColumn({name: "team_id"})
    teamId: number;

    @Column({name: "team_name"})
    teamName: string;
}
