import { Router } from "express";
import { container } from "tsyringe";
import {RoleController} from "../../controllers/auth-controllers/role.controller";


const roleRouter = Router();
const roleController = container.resolve(RoleController);

roleRouter.get("/", roleController.get);
roleRouter.get("/:id", roleController.getById);
roleRouter.post("/", roleController.create);
roleRouter.delete("/:id", roleController.remove);
roleRouter.put("/:id", roleController.update);

export {roleRouter};