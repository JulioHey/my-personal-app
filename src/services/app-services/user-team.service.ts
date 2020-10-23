import { injectable } from "tsyringe";
import {UserTeamSI} from "../../interfaces/app-interfaces/user-team.interface";

import { UserTeamRepo } from "../../models/app-models/user-team.model";
import BaseService from "../base.service";


@injectable()
export class UserTeamService extends BaseService<UserTeamSI>{
    
    constructor(modelI?: UserTeamRepo){
        super(modelI)
    }

    calcNewPatrymony = async (userId: string, delta: number) => {
        const userTeam: any = await this.getById(userId);

        const newValue = Number(userTeam.userTeamPatrimony) + Number(delta);

        await this.update(userId, { userTeamPatrimony: newValue });
    }
}
