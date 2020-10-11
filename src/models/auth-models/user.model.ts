import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, OneToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserI } from "../../interfaces/auth-interfaces/user.interface";
import RepoI from "../../interfaces/model.interface";
import { PasswordModel } from "./password.model";


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
    passwordConnection: Promise<PasswordModel>
}

@singleton()
export class UserRepo implements RepoI{
    repo: Repository<any> = getRepository(UserModel)
}