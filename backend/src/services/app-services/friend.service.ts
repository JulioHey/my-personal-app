import { injectable } from "tsyringe";
import {FriendSI} from "../../interfaces/app-interfaces/friend.interface";

import { FriendRepo } from "../../models/app-models/friend.model";
import BaseService from "../base.service";


@injectable()
export class FriendService extends BaseService<FriendSI>{
    
    constructor(modelI?: FriendRepo){
        super(modelI)
    }

    checkConstrains = async (data: any) => {
        const {
            userOne,
            userTwo
        } =data;


        const alreadyConnect = await this.model.repo.find({
            where:[
                {userOne, userTwo},
                {userOne: userTwo, userTwo: userOne},
            ]}
        );

        if (alreadyConnect[0]) {
            return {error: "Error"}
        }

        return data;
    }
}
