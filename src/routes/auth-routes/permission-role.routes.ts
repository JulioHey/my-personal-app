import { Router } from "express";
import { container } from "tsyringe";
import {PermissionRoleController} from "../../controllers/auth-controllers/permission-role.controller";


const permissionRoleRouter = Router();
const permissionRoleController = container.resolve(PermissionRoleController);

permissionRoleRouter.get("/", permissionRoleController.get);
permissionRoleRouter.get("/:id", permissionRoleController.getById);
permissionRoleRouter.post("/", permissionRoleController.post);
permissionRoleRouter.delete("/:id", permissionRoleController.remove);
permissionRoleRouter.put("/:id", permissionRoleController.update);

export {permissionRoleRouter};