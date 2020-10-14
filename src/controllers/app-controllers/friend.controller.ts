import { autoInjectable, delay, inject } from "tsyringe";
import {FriendService} from "../../services/app-services/friend.service";
import BaseController from "../base.controller";

@autoInjectable()
export class FriendController extends BaseController {

    constructor(@inject(delay(() => FriendService)) public FriendService: FriendService) {
        super(FriendService)
    }
}