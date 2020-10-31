import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { PermissionRoleI } from "../../interfaces/auth-interfaces/permission-role.interfacet";
import RepoI from "../../interfaces/model.interface";
import { PermissionModel } from "./permission.model";
import { RoleModel } from "./role.model";


@injectable()
@Entity({name: "permission_roles"})
export class PermissionRoleModel extends BaseEntity implements PermissionRoleI {
    @PrimaryGeneratedColumn({name: "permission_role_id"})
    permissionRoleId: string | number

    @Column({name: "permission_id"})
    permissionId: string | number

    @Column({name: "role_id"})
    roleId: string | number
    
    @ManyToOne(
        () => PermissionModel,
        permission => permission.roleConnection,
        {primary: true}
    )
    @JoinColumn({name: "permission_id"})
    permissionConnection: Promise<PermissionModel[]>;

    
    @ManyToOne(
        () => RoleModel,
        role => role.permissionConnection,
        {primary: true}
    )
    @JoinColumn({name: "role_id"})
    roleConnection: Promise<RoleModel[]>;
}

@singleton()
export class PermissionRoleRepo implements RepoI{
    repo: Repository<any> = getRepository(PermissionRoleModel);
}