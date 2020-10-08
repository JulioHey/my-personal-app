import {
    injectable,
    singleton
} from 'tsyringe';
import { RoundI } from "../../interfaces/game-interfaces/round.interface";
import {getRepository, Entity, PrimaryGeneratedColumn, Column, Repository, BaseEntity, OneToMany} from 'typeorm';
import RepoI from '../../interfaces/model.interface';
import { MatchModel } from './match.model';

@injectable()
@Entity({name: "rounds"})
export default class RoundModel extends BaseEntity implements RoundI{
    @PrimaryGeneratedColumn({name: "round_id"})
    roundId: number

    @Column({name: "round_name"})
    roundNumber: number

    @OneToMany(
        () => MatchModel,
        match => match.roundConnection
    )
    matchConnection: Promise<MatchModel[]>

}

@singleton()
export class RoundRepo implements RepoI{
    repo: Repository<any> = getRepository(RoundModel);
}

