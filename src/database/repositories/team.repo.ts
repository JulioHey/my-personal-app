import {
    getRepository
} from 'typeorm';

import  Team from '../models/team.entity';

import { IBaseTeamRepo } from '../../Interfaces/BaseRepo';

export default class TypeOrmTeamRepo implements IBaseTeamRepo {
    public async create(newTeamName: string): Promise<any> {
        try {
            const teamRepo = await getRepository(Team);
            console.log(newTeamName);

            const newTeam = await teamRepo.create({
                teamName: newTeamName
            });

            await teamRepo.save(newTeam);
    
            return newTeam;
        } catch(error) {
            return error;
        }
    }
};

