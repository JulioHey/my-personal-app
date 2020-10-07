import { autoInjectable, delay, inject } from "tsyringe";
import ChampionService from "../services/champion.service";
import BaseController from "./base.controller";

@autoInjectable()
export default class ChampionController extends BaseController {

    constructor(@inject(delay(() => ChampionService)) public ChampionService: ChampionService) {
        super(ChampionService)
    }
}