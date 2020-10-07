import {
    injectable,
    singleton
} from 'tsyringe';
import { RoundI } from "../interfaces/round.interface";
import {getRepository, Entity, PrimaryGeneratedColumn, Column, Repository, BaseEntity} from 'typeorm';
import RepoI from '../interfaces/model.interface';

@injectable()
@Entity({name: "rounds"})
export default class RoundModel extends BaseEntity implements RoundI{
    @PrimaryGeneratedColumn({name: "round_id"})
    roundId: number

    @Column({name: "round_name"})
    roundNumber: number

}

@singleton()
export class RoundRepo implements RepoI{
    repo: Repository<any> = getRepository(RoundModel);
}

