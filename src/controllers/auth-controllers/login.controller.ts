import { Request, Response } from "express";
import { autoInjectable, delay, inject } from "tsyringe";
import {UserPasswordService} from "../../services/auth-services/user-password.service";
import BaseController from "../base.controller";
import {hash} from 'bcryptjs';
import { sign } from "jsonwebtoken";

@autoInjectable()
export class LoginController extends BaseController {

    constructor(@inject(delay(() => UserPasswordService)) public UserPasswordService: UserPasswordService) {
        super(UserPasswordService)
    }

    create =  async (request: Request, response: Response) => {
        try {
            const body = request.body;

            const userPassword = await hash(body.userPassword, 8);

            const data = {
                userName: body.userName, 
                userEmail: body.userEmail, 
                userPassword: userPassword,  
                roles: body.roles
            }

            const User = await this.UserPasswordService.create(data);

            if (User.Error) {
                return response.status(401).json(User.Error)
            }

            return response.json(User).send();
        } catch(error) {
            return response.status(401).json(error)
        }
    }

    login = async(request: Request, response: Response) => {
        try {
            const {userName, userPassword} = request.body;


            const User = await this.UserPasswordService.login(userName, userPassword);

            if (User.Error) {
                return response.status(400).json(User).send();
            };

            const token = await sign({}, "07e61acbf651a52f6e9e21e81f7bed82", {
                subject: String(User.userId),
                expiresIn: '1d'
            });

            return response.json({User, token}).send();
        } catch(err) {
            return response.status(400).json(err)
        }
    }
}