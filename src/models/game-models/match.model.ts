import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { MatchI } from "../../interfaces/game-interfaces/match.interface";
import RepoI from "../../interfaces/model.interface";
import { CoachMatchModel } from "./coach-match.model";
import { MatchDragonModel } from "./match-dragon.model";
import { PlayerMatchModel } from "./player-match.model";
import {RoundModel} from "./round.model";
import { TeamMatchModel } from "./team-match.model";
import {TeamModel} from "./team.model";


@injectable()
@Entity({name: "matches"})
export class MatchModel extends BaseEntity implements MatchI{
    @PrimaryGeneratedColumn({name: "match_id"})
    matchId: number;

    @Column({name: "blueSideTeam_id"})
    blueSideTeam: number;

    @Column({name: "redSideTeam_id"})
    redSideTeam: number;

    @Column({name: "round_id"})
    roundId: number;

    @Column({name: "match_position" })
    matchPosition: number

    @ManyToOne(
        () => TeamModel,
        team => team.matchBlueConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'blueSideTeam_id' })
    blueTeamConnection: Promise<TeamModel>;

    @ManyToOne(
        () => TeamModel,
        team => team.matchRedConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'blueSideTeam_id' })
    redTeamConnection: Promise<TeamModel>;

    @ManyToOne(
        () => RoundModel,
        round => round.matchConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'round_id' })
    roundConnection: Promise<RoundModel>;

    @OneToMany(
        () => PlayerMatchModel,
        playerMatch => playerMatch.matchConnection
    )
    playerConnection: Promise<PlayerMatchModel[]>

    @OneToMany(
        () => TeamMatchModel,
        teamMatch => teamMatch.matchConnection
    )
    teamConnection: Promise<TeamMatchModel[]>

    @OneToOne(
        () => MatchDragonModel,
        matchDragon => matchDragon.matchConnection
    )
    dragonConnection: Promise<MatchDragonModel>


    @OneToMany(
        () => CoachMatchModel,
        coachMatch => coachMatch.matchConnection
    )
    coachConnection: Promise<CoachMatchModel[]>
}

@singleton()
export class MatchRepo implements RepoI{
    repo: Repository<any> = getRepository(MatchModel)
}