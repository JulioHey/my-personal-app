import {
    injectable,
    singleton
} from 'tsyringe';
import { TeamI } from "../interfaces/team.interface";
import {getRepository, Entity, PrimaryGeneratedColumn, Column, Repository, BaseEntity} from 'typeorm';
import RepoI from '../interfaces/model.interface';

@injectable()
@Entity({name: "teams"})
export default class TeamModel extends BaseEntity implements TeamI{
    @PrimaryGeneratedColumn({name: "team_id"})
    teamId: number

    @Column({name: "team_name"})
    teamName: string

}

@singleton()
export class TeamRepo implements RepoI{
    repo: Repository<any> = getRepository(TeamModel);
}

