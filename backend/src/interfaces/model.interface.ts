import { BaseEntity, EntityOptions, EntitySchema, Repository } from "typeorm";

export interface ModelI extends EntityOptions{
}

export default interface RepoI{
    repo: Repository<any>
}