import {
    Response,
    Request
} from "express";
import { 
    inject,
    Container, 
    injectable
} from "inversify";

import {
    ITeamRepo,
    repoTypes
} from '../database/repositories/team.repo';

interface ITeamController {
    handleAddTeam: (request: Request, response: Response) => Promise<Response<any>>;
}

const controllerTypes = {
    ITeamController: Symbol("ITeamController")
}

@injectable()
class TeamController implements ITeamController{
    private teamRepo: ITeamRepo;

    constructor (@inject(repoTypes.ITeamRepo) teamRepo:ITeamRepo) {
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

const teamRepoContainer = new Container();

const teamController: ITeamController = teamRepoContainer.get<ITeamController>(controllerTypes.ITeamController);

export {teamController};
