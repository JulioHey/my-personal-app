import { DeepPartial } from "typeorm";
import { PrimaryExpression } from "typescript";
import RepoI from "../interfaces/model.interface";


export default class BaseService<T>{
    model: RepoI
    constructor(RepoI?: RepoI){
        this.model = RepoI
    }

    post = async (data: T) => {
        const checkedData = await this.checkConstrains(data);

        const {error} = checkedData;

        if(error) {
            return {Error: "You are violating some constrains of this schema, check the data again"}
        }

        const resource = await this.model.repo.create(checkedData)
        await this.model.repo.save(resource)
        return resource
    }

    get = async (filters = {}): Promise<T[]> =>{
        const resource = await this.model.repo.find(filters) as T[]
        return resource
    }

    getById = async (entityId: string, relations?: string[]): Promise<T|object> => {
        const resource = await this.model.repo.findOne(entityId, {relations: relations}) as T
        if(resource === undefined) {
            return ({ message: "No entity found"})
        }
        return resource
    }

    remove = async (entityId: string) => {
        const entityToBeRemoved = await this.model.repo.findOne(entityId) as T

        const resource = await this.model.repo.remove(entityToBeRemoved);
        return resource;
    }

    update = async(entityId: string, data: DeepPartial<T>) => {
        const updatedEntity = await this.model.repo.update(entityId, data);
        return updatedEntity;
    };

    checkConstrains = async (data: any) => {
        return data;
    }
}