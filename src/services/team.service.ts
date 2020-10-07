import { injectable } from "tsyringe";

import TeamSI from "../interfaces/team.interface";
import {TeamRepo} from "../models/team.model";
import BaseService from "./base.service";


@injectable()
export default class TeamService extends BaseService<TeamSI>{
    
    constructor(modelI?: TeamRepo){
        super(modelI)
    }
}
