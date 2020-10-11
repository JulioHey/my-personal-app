import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, OneToOne, PrimaryColumn, Repository } from "typeorm";
import { PasswordI } from "../../interfaces/auth-interfaces/password.interface";
import RepoI from "../../interfaces/model.interface";
import { UserModel } from "./user.model";


@injectable()
@Entity({name: "passwords"})
export class PasswordModel extends BaseEntity implements PasswordI{
    @PrimaryColumn({name: "user_id"})
    userId: string;

    @Column({name: "user_password"})
    password: string;

    @OneToOne(
        () => UserModel,
        user => user.passwordConnection,
        {primary: true}
    )
    @JoinColumn({name: "user_id"})
    userConnection: Promise<UserModel>
}

@singleton()
export class PasswordRepo implements RepoI{
    repo: Repository<any> = getRepository(PasswordModel)
}