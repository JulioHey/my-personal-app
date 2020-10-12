import { Request, Response } from "express";
import { autoInjectable, delay, inject } from "tsyringe";
import {UserPasswordService} from "../../services/auth-services/user-password.service";
import BaseController from "../base.controller";
import {hash} from 'bcryptjs';

@autoInjectable()
export class LoginController extends BaseController {

    constructor(@inject(delay(() => UserPasswordService)) public UserPasswordService: UserPasswordService) {
        super(UserPasswordService)
    }

    create =  async(request: Request, response: Response) => {
        try {
            const body = request.body;
            console.log(body)

            const userPassword = await hash(body.userPassword, 8);
            console.log(userPassword)

            const data = {
                userName: body.userName, 
                userEmail: body.userEmail, 
                userPassword: userPassword,  
                roles: body.roles
            }
            console.log(data)

            const User = await this.UserPasswordService.create(data);

            return response.json(User)
        } catch(error) {
            return response.json(error)
        }
    }

    login = async(request: Request, response: Response) => {
        try {
            const {userName, userPassword} = request.body;


            const User = await this.UserPasswordService.login(userName, userPassword);

            return response.json(User)
        } catch(err) {
            return response.json(err)
        }
    }
}