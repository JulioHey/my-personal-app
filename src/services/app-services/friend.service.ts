import { injectable } from "tsyringe";
import {FriendSI} from "../../interfaces/app-interfaces/friend.interface";

import { FriendRepo } from "../../models/app-models/friend.model";
import BaseService from "../base.service";


@injectable()
export class FriendService extends BaseService<FriendSI>{
    
    constructor(modelI?: FriendRepo){
        super(modelI)
    }
}
