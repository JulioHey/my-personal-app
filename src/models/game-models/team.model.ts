import {
    injectable,
    singleton
} from 'tsyringe';
import { TeamI } from "../../interfaces/game-interfaces/team.interface";
import {getRepository, Entity, PrimaryGeneratedColumn, Column, Repository, BaseEntity, OneToMany, JoinColumn} from 'typeorm';
import RepoI from '../../interfaces/model.interface';
import {PlayerModel} from './player.model';
import { MatchModel } from './match.model';
import { TeamMatchModel } from './team-match.model';

@injectable()
@Entity({name: "teams"})
export class TeamModel extends BaseEntity implements TeamI{
    @PrimaryGeneratedColumn({name: "team_id"})
    teamId: number

    @Column({name: "team_name"})
    teamName: string

    @Column({name:"team_position"})
    teamPosition: number
    
    @OneToMany(
        () => PlayerModel,
        player => player.teamConnection
    )
    playerConnection: Promise<PlayerModel[]>

    @OneToMany(
        () => MatchModel,
        match => match.blueTeamConnection
    )
    matchBlueConnection: Promise<MatchModel[]>

    @OneToMany(
        () => MatchModel,
        match => match.redTeamConnection
    )
    matchRedConnection: Promise<MatchModel[]>

    @OneToMany(
        () => TeamMatchModel,
        teamMatch => teamMatch.teamConnection
    )
    matchConnection: Promise<TeamMatchModel[]>
}

@singleton()
export class TeamRepo implements RepoI{
    repo: Repository<any> = getRepository(TeamModel);
}

