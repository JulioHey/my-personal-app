import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, OneToOne, PrimaryColumn, Repository } from "typeorm";
import { DragonType } from "../../interfaces/game-interfaces/match-dragon.interface";
import { TeamDragonI } from "../../interfaces/game-interfaces/team-dragon.interface";
import RepoI from "../../interfaces/model.interface";
import { TeamMatchModel } from "./team-match.model";


@injectable()
@Entity({name: "team_dragons"})
export class TeamDragonModel extends BaseEntity implements TeamDragonI{
    @PrimaryColumn({name: "team_match_id"})
    teamMatchId: number;

    @Column({name: "first_dragon"})
    firstDragon: DragonType;

    @Column({name: "second_dragon"})
    secondDragon: DragonType;

    @Column({name: "last_dragon"})
    soulDragon: DragonType;

    @Column({name: "ancient_dragon"})
    ancientDragon: number;

    @OneToOne(
        () => TeamMatchModel,
        teamMatch => teamMatch.dragonConnection,
        {primary: true}
    )
    @JoinColumn({name: "team_match_id"})
    teamConnection: Promise<TeamMatchModel>
}

@singleton()
export class TeamDragonRepo implements RepoI{
    repo: Repository<any> = getRepository(TeamDragonModel)
}