import {
    injectable,
    singleton
} from 'tsyringe';
import { RoundI } from "../../interfaces/game-interfaces/round.interface";
import {getRepository, Entity, PrimaryGeneratedColumn, Column, Repository, BaseEntity, OneToMany} from 'typeorm';
import RepoI from '../../interfaces/model.interface';
import { MatchModel } from './match.model';
import { UserEscalationModel } from '../app-models/user-escalation.model';
import { TeamMatchModel } from './team-match.model';
import { PlayerMatchModel } from './player-match.model';
import { CoachMatchModel } from './coach-match.model';

@injectable()
@Entity({name: "rounds"})
export class RoundModel extends BaseEntity implements RoundI{
    @PrimaryGeneratedColumn({name: "round_id"})
    roundId: number

    @Column({name: "round_number"})
    roundNumber: number

    @Column({name: "round_date"})
    roundDate: string

    @OneToMany(
        () => MatchModel,
        match => match.roundConnection
    )
    matchConnection: Promise<MatchModel[]>

    
    @OneToMany(
        () => UserEscalationModel,
        escalation => escalation.roundConnection
    )
    escalationConnection: Promise<UserEscalationModel[]>

    @OneToMany(
        () => TeamMatchModel,
        teamMatch => teamMatch.roundConnection
    )
    teamConnection: Promise<TeamMatchModel[]>

    @OneToMany(
        () => PlayerMatchModel,
        playerMatch => playerMatch.roundConnection
    )
    playerConnection: Promise<PlayerMatchModel[]>

    @OneToMany(
        () => CoachMatchModel,
        coachMatch => coachMatch.roundConnection
    )
    coachConnection: Promise<CoachMatchModel[]>

}

@singleton()
export class RoundRepo implements RepoI{
    repo: Repository<any> = getRepository(RoundModel);
}

