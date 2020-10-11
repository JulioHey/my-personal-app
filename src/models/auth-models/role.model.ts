import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, PrimaryGeneratedColumn, Repository } from "typeorm";
import { RoleI } from "../../interfaces/auth-interfaces/role.interface";
import RepoI from "../../interfaces/model.interface";


@injectable()
@Entity({name: "roles"})
export class RoleModel extends BaseEntity implements RoleI{
    @PrimaryGeneratedColumn({name: "role_id"})
    roleId: string;

    @Column({name: "role_name"})
    roleName: string;

    @Column({name: "role_description"})
    roleDescription: string;
}

@singleton()
export class RoleRepo implements RepoI{
    repo: Repository<any> = getRepository(RoleModel);
}