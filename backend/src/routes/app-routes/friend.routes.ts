import { Router } from "express";
import { container } from "tsyringe";
import {FriendController} from "../../controllers/app-controllers/friend.controller";


const friendRouter = Router();
const friendController = container.resolve(FriendController);

friendRouter.get("/", friendController.get);
friendRouter.get("/:id", friendController.getById);
friendRouter.post("/", friendController.post);
friendRouter.delete("/:id", friendController.remove);
friendRouter.put("/:id", friendController.update);

export {friendRouter};