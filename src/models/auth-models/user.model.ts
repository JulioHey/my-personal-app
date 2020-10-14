import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserI } from "../../interfaces/auth-interfaces/user.interface";
import RepoI from "../../interfaces/model.interface";
import { CompetitionModel } from "../app-models/competition.model";
import { FriendModel } from "../app-models/friend.model";
import { UserEscalationModel } from "../app-models/user-escalation.model";
import { UserTeamModel } from "../app-models/user-team.model";
import { PasswordModel } from "./password.model";
import { RoleModel } from "./role.model";


@injectable()
@Entity({name: "users"})
export class UserModel extends BaseEntity implements UserI{
    @PrimaryGeneratedColumn({name: "user_id"})
    userId: string

    @Column({name: "user_name"})
    userName: string;

    @Column({name: "email"})
    userEmail: string;

    @OneToOne(
        () => PasswordModel,
        password => password.userConnection
    )
    passwordConnection: Promise<PasswordModel>;

    
    @OneToOne(
        () => UserTeamModel,
        userTeam => userTeam.userConnection
    )
    teamConnection: Promise<UserTeamModel>;

    @ManyToMany(() => RoleModel)
    @JoinTable({
        name: "user_roles",
        inverseJoinColumns: [{name: 'role_id'}],
        joinColumns: [{ name:'user_id'}],
    })
    roles: RoleModel[];

    @OneToMany(
        () => UserEscalationModel,
        userEscalation => userEscalation.userConnection
    )
    escalationConnection: Promise<UserEscalationModel[]>

    @OneToMany(
        () => FriendModel,
        friend => {friend.friendOneConnection , friend.friendTwoConnection}
    )
    friendConnection: Promise<FriendModel[]>

    @OneToOne(
        () => CompetitionModel,
        competition => competition.ownerConnection
    )
    ownerConnection: Promise<CompetitionModel>
}

@singleton()
export class UserRepo implements RepoI{
    repo: Repository<any> = getRepository(UserModel)
}