import {
    Response,
    Request
} from "express";

import TypeOrmTeamRepo from '../database/repositories/team.repo';
import TeamRepository from '../database/teamRepo';

class TeamController {
    private teamRepo: TeamRepository;

    constructor() {
        this.teamRepo = new TeamRepository(new TypeOrmTeamRepo());
    }
    
    public async addTeam(request: Request, response: Response) {
        try {
            console.log(request.body.teamName);
            console.log(this)


            const newTeam = await this.teamRepo.create(request.body.teamName);

            return response.json(newTeam)
        } catch(error) {
            console.log(error);
            return response.status(404).json(error);
        }
    }
};

export {TeamController};
