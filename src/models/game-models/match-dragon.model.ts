import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, OneToOne, PrimaryColumn, Repository } from "typeorm";
import { DragonType, MatchDragonsI } from "../../interfaces/game-interfaces/match-dragon.interface";
import RepoI from "../../interfaces/model.interface";
import { MatchModel } from "./match.model";

@injectable()
@Entity({name: "match_dragons"})
export class MatchDragonModel extends BaseEntity implements MatchDragonsI{
    @PrimaryColumn({name: "match_id"})
    matchId: number;

    @Column({name: "first_dragon"})
    firstDragon: DragonType;

    @Column({name: "second_dragon"})
    secondDragon: DragonType;

    @Column({name: "soul_dragon"})
    soulDragon: DragonType;

    @OneToOne(
        () => MatchModel,
        match => match.dragonConnection,
        {primary: true}
    )
    @JoinColumn({name: "match_id"})
    matchConnection: Promise<MatchModel>
}

@singleton()
export class MatchDragonRepo implements RepoI{
    repo: Repository<any> = getRepository(MatchDragonModel)
}