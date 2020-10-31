import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, PrimaryColumn, Repository } from "typeorm";
import { FriendI } from "../../interfaces/app-interfaces/friend.interface";
import RepoI from "../../interfaces/model.interface";
import { UserModel } from "../auth-models/user.model";


@injectable()
@Entity({name: "friends"})
export class FriendModel extends BaseEntity implements FriendI{
    @PrimaryColumn({name: "user_one_id"})
    userOne: string;

    @Column({name: "user_two_id"})
    userTwo: string;

    @ManyToOne(
        () => UserModel,
        user => user.friendConnection,
        {primary: true}
    )
    @JoinColumn({name: "user_one_id"})
    friendOneConnection: Promise<UserModel>

    
    @ManyToOne(
        () => UserModel,
        user => user.friendConnection,
        {primary: true}
    )
    @JoinColumn({name: "user_two_id"})
    friendTwoConnection: Promise<UserModel>
}

@singleton()
export class FriendRepo implements RepoI {
    repo: Repository<any> = getRepository(FriendModel);
}