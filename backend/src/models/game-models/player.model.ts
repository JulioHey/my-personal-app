import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Repository } from "typeorm";
import RepoI from "../../interfaces/model.interface";
import { PlayerI } from "../../interfaces/game-interfaces/player.interface";
import {TeamModel} from "./team.model";
import { PlayerMatchModel } from "./player-match.model";
import { UserEscalationModel } from "../app-models/user-escalation.model";


@injectable()
@Entity({name: "players"})
export class PlayerModel extends BaseEntity implements PlayerI{
    @PrimaryGeneratedColumn({name: "player_id"})
    playerId: number;

    @Column({name: "player_name"})
    playerName: string;

    @Column({name: "playerTeam_id"})
    playerTeamId: number;

    @Column({name: "player_position"})
    playerPosition: string;

    @Column({name: "player_nickname"})
    playerNickname: string;

    @Column({name: "player_value"})
    playerValue: number;

    @ManyToOne(
        () => TeamModel,
        team => team.playerConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'playerTeam_id' })
    teamConnection: Promise<TeamModel>;

    @OneToMany(
        () => PlayerMatchModel,
        playerMatch => playerMatch.playerConnection
    )
    matchConnection: Promise<PlayerMatchModel[]>

    
    @OneToMany(
        () => UserEscalationModel,
        userEscalation => userEscalation.coachConnection
    )
    coachConnection: Promise<UserEscalationModel[]>

    @OneToMany(
        () => UserEscalationModel,
        userEscalation => userEscalation.topLanerConnection
    )
    topLanerConnection: Promise<UserEscalationModel[]>

    @OneToMany(
        () => UserEscalationModel,
        userEscalation => userEscalation.junglerConnection
    )
    junglerConnection: Promise<UserEscalationModel[]>

    @OneToMany(
        () => UserEscalationModel,
        userEscalation => userEscalation.midLanerConnection
    )
    midLanerConnection: Promise<UserEscalationModel[]>

    @OneToMany(
        () => UserEscalationModel,
        userEscalation => userEscalation.adCarryConnection
    )
    adCarryConnection: Promise<UserEscalationModel[]>

    @OneToMany(
        () => UserEscalationModel,
        userEscalation => userEscalation.supportConnection
    )
    supportConnection: Promise<UserEscalationModel[]>
}

@singleton()
export class PlayerRepo implements RepoI{
    repo: Repository<any> = getRepository(PlayerModel);
}