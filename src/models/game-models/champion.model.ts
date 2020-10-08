import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, OneToMany, PrimaryGeneratedColumn, Repository } from "typeorm";
import { ChampionI } from "../../interfaces/game-interfaces/champion.interface";
import RepoI from "../../interfaces/model.interface";
import { PlayerMatchModel } from "./player-match.model";
import { TeamMatchModel } from "./team-match.model";


@injectable()
@Entity({name: "champions"})
export default class ChampionModel extends BaseEntity implements ChampionI{
    @PrimaryGeneratedColumn({name: "champion_id"})
    championId: number

    @Column({name: "champion_name"})
    championName: string

    @OneToMany(
        () => PlayerMatchModel,
        playerMatch => playerMatch.championConnection
    )
    pickConnection: Promise<PlayerMatchModel[]>

    @OneToMany(
        () => TeamMatchModel,
        playerMatch => playerMatch.firstBanConnection
    )
    firstBanConnection: Promise<TeamMatchModel[]>

    @OneToMany(
        () => TeamMatchModel,
        playerMatch => playerMatch.secondBanConnection
    )
    secondBanConnection: Promise<TeamMatchModel[]>

    @OneToMany(
        () => TeamMatchModel,
        playerMatch => playerMatch.thirdBanConnection
    )
    thirdBanConnection: Promise<TeamMatchModel[]>
}

@singleton()
export class ChampionRepo implements RepoI{
    repo: Repository<any> = getRepository(ChampionModel);
}