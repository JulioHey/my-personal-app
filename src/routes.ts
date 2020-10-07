import { Router } from "express";
import teamRouter from "./routes/team.routes";
import roundRouter from "./routes/round.routes";


const appRouter = Router();

appRouter.use("/round", roundRouter);
appRouter.use("/team", teamRouter);

export default appRouter;