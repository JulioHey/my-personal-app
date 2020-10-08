import { Router } from "express";
import teamRouter from "./routes/team.routes";
import roundRouter from "./routes/round.routes";
import championRouter from "./routes/champion.routes";
import playerRouter from './routes/player.routes'


const appRouter = Router();

appRouter.use("/round", roundRouter);
appRouter.use("/team", teamRouter);
appRouter.use("/champion", championRouter);
appRouter.use("/player", playerRouter);

export default appRouter;