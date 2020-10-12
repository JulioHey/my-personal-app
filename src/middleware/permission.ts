import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { container } from "tsyringe";
import { couldStartTrivia } from "typescript";
import { UserModel } from "../models/auth-models/user.model";
import { UserService } from "../services/auth-services/user.service";


async function decoder(request: Request): Promise<UserModel | undefined> {
    const authHeader = request.headers.authorization || "";

    const userService = container.resolve(UserService);

    const [, token] = authHeader?.split(" ");

    const payload = decode(token)

    if (payload) {
        const User = await userService.model.repo.findOne(payload?.sub, {
            relations: ["roles"],
        });

        return User;
    }

    return undefined
};

function is(role: String[]) {
    const roleAuthorized = async (
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      const user = await decoder(request);
  
      console.log(user)
      const userRoles = user?.roles.map((role) => role.roleName);
  
      const existsRoles = userRoles?.some((r) => role.includes(r));
  
      if (existsRoles) {
        return next();
      }
  
      return response.status(401).json({ message: "Not authorized!" });
    };
  
    return roleAuthorized;
}
  
export { is };