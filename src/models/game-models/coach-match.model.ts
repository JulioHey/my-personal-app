import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { CoachMatchI } from "../../interfaces/game-interfaces/coach-match.interface";
import RepoI from "../../interfaces/model.interface";
import { CoachModel } from "./coach.model";
import { MatchModel } from "./match.model";
import { RoundModel } from "./round.model";


@injectable()
@Entity({name: "coach_matchs"})
export class CoachMatchModel extends BaseEntity implements CoachMatchI{
    @PrimaryGeneratedColumn()
    coach_match_id: number;

    @Column()
    coach_id: number;

    @Column()
    round_id: number;

    @Column()
    match_id: number;

    @Column()
    coach_value: number;

    @Column()
    coach_pontuation: number;

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
        () => MatchModel,
        match => match.coachConnection,
        {primary: true}
    )
    @JoinColumn({name: "match_id"})
    matchConnection: Promise<MatchModel>
}

@singleton()
export class CoachMatchRepo implements RepoI{
    repo: Repository<any> = getRepository(CoachMatchRepo)
}