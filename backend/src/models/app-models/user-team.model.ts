import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, OneToOne, PrimaryColumn, Repository } from "typeorm";
import { UserTeamI } from "../../interfaces/app-interfaces/user-team.interface";
import RepoI from "../../interfaces/model.interface";
import { UserModel } from "../auth-models/user.model";


@injectable()
@Entity({name: "user_teams"})
export class UserTeamModel extends BaseEntity implements UserTeamI {
    @PrimaryColumn({name: "user_id"})
    userId: string;

    @Column({name: "user_team_name"})
    userTeamName: string;

    @Column({name: "user_team_coach_name"})
    userTeamCoachName: string;
    
    @Column({name: "user_team_patrimony"})
    userTeamPatrimony: number;

    @OneToOne(
        () => UserModel,
        user => user.teamConnection,
        {primary: true}
    )
    @JoinColumn({name: "user_id"})
    userConnection: Promise<UserModel>

};

@singleton()
export class UserTeamRepo implements RepoI {
    repo: Repository<any> = getRepository(UserTeamModel);
};