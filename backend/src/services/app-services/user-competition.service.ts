import { container, injectable } from "tsyringe";
import { DeepPartial } from "typeorm";
import {UserCompetitionSI} from "../../interfaces/app-interfaces/user-competition.interface";

import { UserCompetitionRepo } from "../../models/app-models/user-competition.model";
import BaseService from "../base.service";
import { UserEscalationService } from "./user-escalation.service";


@injectable()
export class UserCompetitionService extends BaseService<UserCompetitionSI>{
    
    private UserEscalationService;
    constructor(modelI?: UserCompetitionRepo){
        super(modelI);
        this.UserEscalationService = container.resolve(UserEscalationService);
    }

    calcNewCompetitionPontuation = async (data) => {
        const {
            userCompetitionID,
            userId
        } = data;


        const userCompetition: any = await this.getById(userCompetitionID);

        if (userCompetition) {
            const oldPontuation = userCompetition.userCompetitionPontuation;

            const UserEscalation = await this.UserEscalationService.get({userId});

            if (UserEscalation[0]) {
                const newPontuation = Number(oldPontuation) + Number(UserEscalation[(UserEscalation.length - 1)].userPontuation);
            
                const newData: DeepPartial<any> = {
                    userCompetitionPontuation: newPontuation
                }
        
                const updatedEntity = await this.model.repo.update(userCompetitionID, newData);

                return updatedEntity;
            }
        }
    }

    
    update = async(entityId: string, data: DeepPartial<any>) => {
        const updated = await this.calcNewCompetitionPontuation(data);

        return updated;
    };

}
