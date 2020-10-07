import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, PrimaryGeneratedColumn, Repository } from "typeorm";
import { ChampionI } from "../interfaces/champion.interface";
import RepoI from "../interfaces/model.interface";


@injectable()
@Entity({name: "champions"})
export default class ChampionModel extends BaseEntity implements ChampionI{
    @PrimaryGeneratedColumn({name: "champion_id"})
    championId: number

    @Column({name: "champion_name"})
    championName: string
}

@singleton()
export class ChampionRepo implements RepoI{
    repo: Repository<any> = getRepository(ChampionModel);
}