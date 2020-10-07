import { autoInjectable } from "tsyringe";
import TeamService from "../services/team.service";
import BaseController from "./base.controller";

@autoInjectable()
export default class TeamController extends BaseController {

    constructor(service?: TeamService) {
        super(service)
    }
}