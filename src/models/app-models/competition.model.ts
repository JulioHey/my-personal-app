import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, OneToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { CompetitionI } from "../../interfaces/app-interfaces/competition.interface";
import RepoI from "../../interfaces/model.interface";
import { UserModel } from "../auth-models/user.model";


@injectable()
@Entity({name: "competitions"})
export class CompetitionModel extends BaseEntity implements CompetitionI{
    @PrimaryGeneratedColumn({name: "competition_id"})
    competitionId: string;

    @Column({name: "competition_name"})
    competitionName: string;

    @Column({name: "competition_owner"})
    competitionOwner: string;

    @OneToOne(
        () => UserModel,
        user => user.ownerConnection,
        {primary: true}
    )
    @JoinColumn({name: "competition_owner"})
    ownerConnection: Promise<UserModel>
}

@singleton()
export class CompetitionRepo implements RepoI{
    repo: Repository<any> = getRepository(CompetitionModel);
}