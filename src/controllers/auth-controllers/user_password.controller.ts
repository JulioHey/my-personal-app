import { Request, Response } from 'express';
import { container } from 'tsyringe';
import {PasswordController} from './password.controller';
import {UserController} from './user.controller';

export class UserPasswordController {

    public password;
    public user;
    constructor() {
        this.password = container.resolve(PasswordController)
        this.user = container.resolve(UserController)
    }

    post = async (request: Request, response: Response) => {
        try {
            const {userName, userEmail, password} = request.body

            const userModel = {
                userName,
                userEmail
            }

            console.log(userModel)

            const newUser = await this.user.UserService.post(userModel)

            console.log(newUser)

            const {userId} = newUser;

            const passwordModel = {
                userId,
                password
            }

            const newUserPassword = await this.password.PasswordService.post(passwordModel);

            return response.json({newUser, newUserPassword})
        } catch(error) {
            return response.json(error)
        }
    }
}