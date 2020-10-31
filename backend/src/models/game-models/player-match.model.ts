import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { PlayerMatchI } from "../../interfaces/game-interfaces/player-match.interface";
import RepoI from "../../interfaces/model.interface";
import {ChampionModel} from "./champion.model";
import { MatchModel } from "./match.model";
import { PlayerStatusModel } from "./player-status.model";
import {PlayerModel} from "./player.model";
import { RoundModel } from "./round.model";


@injectable()
@Entity({name: "player_matches"})
export class PlayerMatchModel extends BaseEntity implements PlayerMatchI{
    @PrimaryGeneratedColumn({name: "player_match_id"})
    playerMatchId: number;

    @Column({name: "player_id"})
    playerId: number;

    @Column({name: "match_id"})
    matchId: number;

    @Column({name: "round_id"})
    roundId: number;
 
    @Column({name: "champion_id"})
    championId: number;

    @Column({name: "player_points"})
    playerPoints: number;

    
    @Column({name: "player_value"})
    playerValue: number;

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
    @JoinColumn({  name: 'champion_id' })
    championConnection: Promise<ChampionModel>;

    
    @ManyToOne(
        () => MatchModel,
        match => match.playerConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'match_id' })
    matchConnection: Promise<MatchModel>;

    @ManyToOne(
        () => RoundModel,
        round => round.playerConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'round_id' })
    roundConnection: Promise<RoundModel>;

    @OneToOne(
        () => PlayerStatusModel,
        match => match.playerConnection,
        { primary: true },
    )
    statusConnection: Promise<PlayerStatusModel>;
}

@singleton()
export class PlayerMatchRepo implements RepoI{
    repo: Repository<any> = getRepository(PlayerMatchModel)
}