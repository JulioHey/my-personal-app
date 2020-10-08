import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import RepoI from "../interfaces/model.interface";
import { PlayerI } from "../interfaces/player.interfaces";
import TeamModel from "./team.model";


@injectable()
@Entity({name: "players"})
export default class PlayerModel extends BaseEntity implements PlayerI{
    @PrimaryGeneratedColumn({name: "player_id"})
    playerId: number;

    @Column({name: "player_name"})
    playerName: string;

    @Column({name: "playerTeam_id"})
    playerTeamId: number;

    @Column({name: "player_position"})
    playerPosition: string;

    @ManyToOne(
        () => TeamModel,
        team => team.playerConnection,
        { primary: true },
    )
    @JoinColumn({  name: 'playerTeam_id' })
    teamConnection: Promise<TeamModel>;
}

@singleton()
export class PlayerRepo implements RepoI{
    repo: Repository<any> = getRepository(PlayerModel);
}