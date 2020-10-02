import {
    Response,
    Request
} from "express";

import {
    ITeamRepo
} from '../database/repositories/team.repo';

class TeamControllers {
    private teamRepo: ITeamRepo;

    constructor (teamRepo:ITeamRepo) {
        this.teamRepo = teamRepo;
    }

    async handleAddTeam(request: Request, response: Response) {
        const newTeamName = request.body;
        const newTeam = this.teamRepo.addTeam(newTeamName);
        
        return response.json({
            newTeam
        })
    }
}