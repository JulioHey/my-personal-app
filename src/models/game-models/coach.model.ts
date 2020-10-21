import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Repository } from "typeorm"
import { CoachI } from "../../interfaces/game-interfaces/coach.interface";
import RepoI from "../../interfaces/model.interface";
import { CoachMatchModel } from "./coach-match.model";
import { TeamModel } from "./team.model";

@injectable()
@Entity({name: "coachs"})
export class CoachModel extends BaseEntity implements CoachI {
    @PrimaryGeneratedColumn()
    coach_id: number;

    @Column()
    team_id: number;

    @Column()
    coach_name: string;

    @Column()
    coach_value: number;

    @Column()
    coach_nickname: string;

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