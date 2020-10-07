import { autoInjectable, delay, inject } from "tsyringe";
import TeamService from "../services/team.service";
import BaseController from "./base.controller";

@autoInjectable()
export default class TeamController extends BaseController {

    constructor(@inject(delay(() => TeamService)) public TeamService: TeamService) {
        super(TeamService)
    }
}