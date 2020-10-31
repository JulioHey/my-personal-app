import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Repository } from "typeorm"
import { CoachI } from "../../interfaces/game-interfaces/coach.interface";
import RepoI from "../../interfaces/model.interface";
import { CoachMatchModel } from "./coach-match.model";
import { TeamModel } from "./team.model";

@injectable()
@Entity({name: "coachs"})
export class CoachModel extends BaseEntity implements CoachI {
    @PrimaryGeneratedColumn({name: "coach_id"})
    coachId: number;

    @Column({name: "team_id"})
    teamId: number;

    @Column({name: "coach_name"})
    coachName: string;

    @Column({name: "coach_value"})
    coachValue: number;

    @Column({name: "coach_nickname"})
    coachNickname: string;

    @ManyToOne(
        () => TeamModel,
        team => team.coachConnection,
        {primary: true}
    )
    @JoinColumn({name: "team_id"})
    teamConnection: Promise<TeamModel>

    @OneToMany(
        () => CoachMatchModel,
        coachMatch => coachMatch.coachConnection
    )
    matchConnection: Promise<CoachMatchModel[]>
}

@singleton()
export class CoachRepo implements RepoI {
    repo: Repository<any> = getRepository(CoachModel);
}