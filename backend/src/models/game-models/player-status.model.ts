import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, OneToOne, PrimaryColumn, Repository } from "typeorm";
import { PlayerStatusI } from "../../interfaces/game-interfaces/player-status.interface";
import RepoI from "../../interfaces/model.interface";
import { PlayerMatchModel } from "./player-match.model";


@injectable()
@Entity({name: "player_status"})
export class PlayerStatusModel extends BaseEntity implements PlayerStatusI{
    @PrimaryColumn({name: "player_match_id"})
    playerMatchId: number;

    @Column({name: "player_kills"})
    playerKills: number;

    @Column({name: "player_deaths"})
    playerDeaths: number;

    @Column({name: "player_assists"})
    playerAssists: number;

    @Column({name: "player_minions"})
    playerMinions: number;

    @Column({name: "player_vision"})
    playerVision: number;

    @Column({name: "player_gold"})
    playerGold: number;

    @OneToOne(
        () => PlayerMatchModel,
        playerMatch => playerMatch.statusConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'player_match_id' })
    playerConnection: Promise<PlayerMatchModel>;
}

@singleton()
export class PlayerStatusRepo implements RepoI{
    repo: Repository<any> = getRepository(PlayerStatusModel)
}