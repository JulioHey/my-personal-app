import { injectable } from 'tsyringe';
import {
    IBaseTeamRepo,
    BaseTeamModel
} from '../Interfaces/BaseRepo';

@injectable()
class TeamRepository implements IBaseTeamRepo {
    private repository: IBaseTeamRepo;

    constructor(repository: IBaseTeamRepo) {
        this.repository = repository;
    }

    public async create(team: BaseTeamModel): Promise<any> {
        return await this.repository.create(team);
    }
}

export default TeamRepository;