import {
    injectable,
    singleton
} from 'tsyringe';
import { TeamI } from "../interfaces/team.interface";
import {getRepository, Entity, PrimaryGeneratedColumn, Column, Repository, BaseEntity, OneToMany, JoinColumn} from 'typeorm';
import RepoI from '../interfaces/model.interface';
import PlayerModel from './player.model';

@injectable()
@Entity({name: "teams"})
export default class TeamModel extends BaseEntity implements TeamI{
    @PrimaryGeneratedColumn({name: "team_id"})
    teamId: number

    @Column({name: "team_name"})
    teamName: string
    
    @OneToMany(
        () => PlayerModel,
        player => player.teamConnection
    )
    playerConnection: Promise<PlayerModel[]>
}

@singleton()
export class TeamRepo implements RepoI{
    repo: Repository<any> = getRepository(TeamModel);
}

