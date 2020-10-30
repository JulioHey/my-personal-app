import { autoInjectable, delay, inject } from "tsyringe";
import {Request, Response} from 'express';
import {RoundService} from "../../services/game-services/round.service";
import BaseController from "../base.controller";

@autoInjectable()
export class RoundController extends BaseController {

    constructor(@inject(delay(() => RoundService)) public RoundService: RoundService) {
        super(RoundService)
    }

    post = async(req: Request, res: Response) => {
        try {
            const resource = await this.RoundService.create(req.body);

            if (resource.Error) {
                return res.status(401).json(resource.Error)
            }
            return res.status(200).send(resource);
        } catch(err){
            return res.status(401).json(err)
        }
    }
}