import {
    Response,
    Request
} from "express";

import TypeOrmTeamRepo from '../database/repositories/team.repo';
import TeamRepository from '../database/teamRepo';
import { IBaseTeamRepo } from "../Interfaces/BaseRepo";

const teamRepo: IBaseTeamRepo = new TeamRepository(new TypeOrmTeamRepo());

class TeamController {
    // private teamRepo: IBaseTeamRepo = new TeamRepository(new TypeOrmTeamRepo());

    public teamRepo: TeamRepository;

    constructor() {
        const repo = new TypeOrmTeamRepo(); 
        this.teamRepo = new TeamRepository(repo);
        console.log(this.teamRepo);
    }

    public async addTeam(request: Request, response: Response) {
        try {
            console.log("Dale")
            const { teamName } = request.body;
            console.log(this.teamRepo);
            console.log("Dale")

            // const newTeam = await teamRepo.create(teamName);
            const newTeam = await this.teamRepo.create(teamName);
            console.log(newTeam);

            return response.json(newTeam)
        } catch(error) {
            console.log(error);
            return response.status(404).json(error);
        }
    }
};

export {TeamController};
