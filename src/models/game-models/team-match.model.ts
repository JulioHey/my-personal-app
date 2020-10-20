import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { TeamMatchI, Status } from "../../interfaces/game-interfaces/team-match.interface";
import RepoI from "../../interfaces/model.interface";
import {ChampionModel} from "./champion.model";
import { MatchModel } from "./match.model";
import { TeamDragonModel } from "./team-dragon.model";
import { TeamStatusModel } from "./team-status.model";
import {TeamModel} from "./team.model";


@injectable()
@Entity({name: "team_matches"})
class TeamMatchModel extends BaseEntity implements TeamMatchI{
    @PrimaryGeneratedColumn({name: "team_match_id"})
    teamMatchId: number;

    @Column({name: "team_id"})
    teamId: number;

    @Column({name: "match_id"})
    matchId: number;

    @Column({name: "first_ban_id"})
    firstBan: number;

    @Column({name: "second_ban_id"})
    secondBan: number;

    @Column({name: "third_ban_id"})
    thirdBan: number;

    @Column({
        name: "match_status",
        enum: Status,
        default: [Status.future]
    })
    matchStatus: Status;

    @ManyToOne(
        () => TeamModel,
        team => team.matchConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'team_id' })
    teamConnection: Promise<TeamModel>;

    @ManyToOne(
        () => MatchModel,
        match => match.teamConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'match_id' })
    matchConnection: Promise<MatchModel>;

    @ManyToOne(
        () => ChampionModel,
        champion => champion.firstBanConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'first_ban_id' })
    firstBanConnection: Promise<ChampionModel>;

    @ManyToOne(
        () => ChampionModel,
        champion => champion.secondBanConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'second_ban_id' })
    secondBanConnection: Promise<ChampionModel>;

    @ManyToOne(
        () => ChampionModel,
        champion => champion.thirdBanConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'third_ban_id' })
    thirdBanConnection: Promise<ChampionModel>;

    @OneToOne(
        () => TeamStatusModel,
        teamStatus => teamStatus.teamConnection
    )
    statusConnection: Promise<TeamStatusModel>

    @OneToOne(
        () => TeamDragonModel,
        teamStatus => teamStatus.teamConnection
    )
    dragonConnection: Promise<TeamDragonModel>
}

@singleton()
class TeamMatchRepo implements RepoI{
    repo: Repository<any> = getRepository(TeamMatchModel)
}

export {TeamMatchModel, TeamMatchRepo}