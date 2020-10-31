import { container, injectable } from "tsyringe";
import { DeepPartial } from "typeorm";
import { TeamStatusSI } from "../../interfaces/game-interfaces/team-status.interface";
import { TeamStatusRepo } from "../../models/game-models/team-status.model";
import BaseService from "../base.service";
import { CoachMatchService } from "./coach-match.service";


@injectable()
export class TeamStatusService extends BaseService<TeamStatusSI>{

    private CoachMatchService;
    constructor(modelI?: TeamStatusRepo) {
        super(modelI);
        this.CoachMatchService = container.resolve(CoachMatchService);
    }

    updateCoachPontuation = async (data) => {
        const {
            teamMatchId,
            teamTowers,
            teamBarricades,
            teamBarons,
            teamDragons
        } = data;

        const coachPontuation = Number(teamMatchId) + Number(teamTowers) + Number(teamBarricades) + Number(teamBarons) + Number(teamDragons);

        const {coachValue} = await this.CoachMatchService.getById(teamMatchId);

        const newValue = (coachValue + coachPontuation)/2;

        await this.CoachMatchService.update(teamMatchId, {coachValue: newValue,coachPontuation});
    }

    update = async(entityId: string, data: DeepPartial<any>) => {
        const updatedEntity = await this.model.repo.update(entityId, data);

        await this.updateCoachPontuation(data);

        return updatedEntity;
    };
}