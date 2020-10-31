import { Router } from "express";
import { container } from "tsyringe";
import {PermissionController} from "../../controllers/auth-controllers/permission.controller";


const permissionRouter = Router();
const permissionController = container.resolve(PermissionController);

permissionRouter.get("/", permissionController.get);
permissionRouter.get("/:id", permissionController.getById);
permissionRouter.put("/:id", permissionController.update);
permissionRouter.post("/", permissionController.post);
permissionRouter.delete("/:id", permissionController.remove);
permissionRouter.put("/:id", permissionController.update);

export {permissionRouter};