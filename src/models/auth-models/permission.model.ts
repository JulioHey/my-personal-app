import { injectable, singleton } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, PrimaryGeneratedColumn, Repository } from "typeorm";
import { PermissionI } from "../../interfaces/auth-interfaces/permission.interface";
import RepoI from "../../interfaces/model.interface";


@injectable()
@Entity({name: "permissions"})
export class PermissionModel extends BaseEntity implements PermissionI{
    @PrimaryGeneratedColumn({name: "permission_id"})
    permissionId: string;

    @Column({name: "permission_name"})
    permissionName: string;

    @Column({name: "permission_description"})
    permissionDescription: string;
}

@singleton()
export class PermissionRepo implements RepoI{
    repo: Repository<any> = getRepository(PermissionModel);
}