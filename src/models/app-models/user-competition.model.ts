import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserCompetitionI } from "../../interfaces/app-interfaces/user-competition.interface";
import RepoI from "../../interfaces/model.interface";
import { UserModel } from "../auth-models/user.model";
import { CompetitionModel } from "./competition.model";


@injectable()
@Entity({name: "user_competitions"})
export class UserCompetitionModel extends BaseEntity implements UserCompetitionI{
    @PrimaryGeneratedColumn({name: "user_competitions_id"})
    userCompetitionID: string;

    @Column({name: "competition_id"})
    competitionId: string;

    @Column({name: "user_id"})
    userId: string;

    @ManyToOne(
        () => CompetitionModel,
        competition => competition.userConnection,
        {primary: true}
    )
    @JoinColumn({name: "competition_id"})
    competitionConnection: Promise<CompetitionModel>

    
    @ManyToOne(
        () => UserModel,
        user => user.competitionConnection,
        {primary: true}
    )
    @JoinColumn({name: "user_id"})
    userConnection: Promise<UserModel[]>
}

@singleton()
export class UserCompetitionRepo implements RepoI{
    repo: Repository<any> = getRepository(UserCompetitionModel);
}