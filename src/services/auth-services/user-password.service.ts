import { autoInjectable, container, injectable } from "tsyringe";
import { UserSI } from "../../interfaces/auth-interfaces/user.interface";
import { UserRepo } from "../../models/auth-models/user.model";
import BaseService from "../base.service";
import { PasswordService } from "./password.service";
import { UserService } from "./user.service";


@injectable()
export class UserPasswordService extends BaseService<UserSI>{
    
    private user;
    private password;
    constructor(modelI?: UserRepo){
        super(modelI)
        this.user = container.resolve(UserService)
        this.password = container.resolve(PasswordService)
    }

    create = async (data: {userName: string, userEmail: string, userPassword: string, roles: string[]}) => {
        const {userName, userPassword, userEmail, roles} = data;
        const userModel = {
            userName: userName,
            userEmail: userEmail,
            roles: roles
        }

        const newUser = await this.user.post(userModel)

        console.log(newUser)
        const {userId} = newUser;

        const passwordModel = {
            userId,
            password: userPassword
        }

        await this.password.post(passwordModel);

        return newUser;
    }

    login = async (userName: string, userPassword: string) => {
        const User = await this.user.get({userName: userName})

        const userId = User[0].userId;

        const Passwords = await this.password.get({userId: userId})

        if (Passwords[0].password === userPassword) {
            return User
        } else {
            return {error: "LoginFailed"}
        }
    }
}
