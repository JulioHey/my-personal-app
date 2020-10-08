import { Router } from "express";
import { container } from "tsyringe";
import MatchController from "../../controllers/game-controllers/match.controller";


const matchRoutes = Router();
const matchController = container.resolve(MatchController);

matchRoutes.get("/", matchController.get);
matchRoutes.get("/:id", matchController.getById);
matchRoutes.post("/", matchController.post);
matchRoutes.delete("/:id", matchController.remove);

export default matchRoutes;