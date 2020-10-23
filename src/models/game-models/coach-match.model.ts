import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { CoachMatchI } from "../../interfaces/game-interfaces/coach-match.interface";
import RepoI from "../../interfaces/model.interface";
import { CoachModel } from "./coach.model";
import { RoundModel } from "./round.model";
import { TeamMatchModel } from "./team-match.model";


@injectable()
@Entity({name: "coach_matchs"})
export class CoachMatchModel extends BaseEntity implements CoachMatchI{
    @PrimaryGeneratedColumn({name: "coach_match_id"})
    coachMatchId: number;

    @Column({name: "coach_id"})
    coachId: number;

    @Column({name: "round_id"})
    roundId: number;

    @Column({name: "team_match_id"})
    teamMatchId: number;

    @Column({name: "coach_value"})
    coachValue: number;

    @Column({name: "coach_pontuation"})
    coachPontuation: number;

    @ManyToOne(
        () => CoachModel,
        coach => coach.matchConnection,
        {primary: true}
    )
    @JoinColumn({name: "coach_id"})
    coachConnection: Promise<CoachModel>


    @ManyToOne(
        () => RoundModel,
        round => round.coachConnection,
        {primary: true}
    )
    @JoinColumn({name: "round_id"})
    roundConnection: Promise<RoundModel>

    @ManyToOne(
        () => TeamMatchModel,
        match => match.coachConnection,
        {primary: true}
    )
    @JoinColumn({name: "team_match_id"})
    matchConnection: Promise<TeamMatchModel>
}

@singleton()
export class CoachMatchRepo implements RepoI{
    repo: Repository<any> = getRepository(CoachMatchModel)
}