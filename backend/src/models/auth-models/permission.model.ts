import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, OneToMany, PrimaryGeneratedColumn, Repository } from "typeorm";
import { PermissionI } from "../../interfaces/auth-interfaces/permission.interface";
import RepoI from "../../interfaces/model.interface";
import { PermissionRoleModel } from "./permission-role.model";


@injectable()
@Entity({name: "permissions"})
export class PermissionModel extends BaseEntity implements PermissionI{
    @PrimaryGeneratedColumn({name: "permission_id"})
    permissionId: string | number;

    @Column({name: "permission_name"})
    permissionName: string;

    @Column({name: "permission_description"})
    permissionDescription: string;

    @OneToMany(
        () => PermissionRoleModel,
        permissionRole => permissionRole.permissionConnection
    )
    roleConnection: Promise<PermissionRoleModel[]>;
}

@singleton()
export class PermissionRepo implements RepoI{
    repo: Repository<any> = getRepository(PermissionModel);
}