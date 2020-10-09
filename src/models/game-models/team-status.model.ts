import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, OneToOne, PrimaryColumn, Repository } from "typeorm";
import { TeamStatusI } from "../../interfaces/game-interfaces/team-status.interface";
import RepoI from "../../interfaces/model.interface";
import { TeamMatchModel } from "./team-match.model";


@injectable()
@Entity({name: "team_status"})
export class TeamStatusModel extends BaseEntity implements TeamStatusI{
    @PrimaryColumn({name: "team_match_id"})
    teamMatchId: number;

    @Column({name: "team_towers"})
    teamTowers: number;

    @Column({name: "team_barricades"})
    teamBarricades: number;

    @Column({name: "team_barons"})
    teamBarons: number;

    @OneToOne(
        () => TeamMatchModel,
        teamMatch => teamMatch.statusConnection,
        {primary: true}
    )
    @JoinColumn({name: "team_match_id"})
    teamConnection: Promise<TeamMatchModel>
}

@singleton()
export class TeamStatusRepo implements RepoI{
    repo: Repository<any> = getRepository(TeamStatusModel);
};
