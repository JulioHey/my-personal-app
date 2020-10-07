import RepoI from "../interfaces/model.interface";


export default class BaseService<T>{
    model: RepoI
    constructor(RepoI?: RepoI){
        this.model = RepoI
    }

    post = async (data: T) => {
        const resource = this.model.repo.create(data)
        await this.model.repo.save(resource)
        return resource
    }

    get = async (filters = {}): Promise<T[]> =>{
        const resource = await this.model.repo.find(filters) as T[]
        return resource
    }

    getById = async (entityId: string): Promise<T> => {
        const resource = await this.model.repo.findOne(entityId) as T
        return resource
    }

}