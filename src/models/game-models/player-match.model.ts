import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { PlayerMatchI } from "../../interfaces/game-interfaces/player-match.interface";
import RepoI from "../../interfaces/model.interface";
import ChampionModel from "./champion.model";
import { MatchModel } from "./match.model";
import PlayerModel from "./player.model";


@injectable()
@Entity({name: "player_matches"})
export class PlayerMatchModel extends BaseEntity implements PlayerMatchI{
    @PrimaryGeneratedColumn({name: "player_match_id"})
    playerMatchId: number;

    @Column({name: "player_id"})
    playerId: number;

    @Column({name: "match_id"})
    matchId: number;
 
    @Column({name: "champion_id"})
    championId: number;

    @Column({name: "player_points"})
    playerPoints: number;

    @ManyToOne(
        () => PlayerModel,
        player => player.matchConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'player_id' })
    playerConnection: Promise<PlayerModel>;

    @ManyToOne(
        () => ChampionModel,
        champion => champion.pickConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'player_id' })
    championConnection: Promise<ChampionModel>;

    
    @ManyToOne(
        () => MatchModel,
        match => match.playerConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'player_id' })
    matchConnection: Promise<MatchModel>;
}

@singleton()
export class PlayerMatchRepo implements RepoI{
    repo: Repository<any> = getRepository(PlayerMatchModel)
}