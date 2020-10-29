import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinTable, ManyToMany, PrimaryGeneratedColumn, Repository } from "typeorm";
import { RoleI } from "../../interfaces/auth-interfaces/role.interface";
import RepoI from "../../interfaces/model.interface";
import { PermissionModel } from "./permission.model";


@injectable()
@Entity({name: "roles"})
export class RoleModel extends BaseEntity implements RoleI{
    @PrimaryGeneratedColumn({name: "role_id"})
    roleId: number | string;

    @Column({name: "role_name"})
    roleName: string;

    @Column({name: "role_description"})
    roleDescription: string;

    @ManyToMany(() => PermissionModel)
    @JoinTable({
        name: "permission_roles",
        joinColumns: [{ name:'role_id'}],
        inverseJoinColumns: [{name: 'permission_id'}]
    })
    permission: PermissionModel[];
}

@singleton()
export class RoleRepo implements RepoI{
    repo: Repository<any> = getRepository(RoleModel);
}