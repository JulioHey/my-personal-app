import { Router } from "express";
import teamRouter from "./routes/game-routes/team.routes";
import roundRouter from "./routes/game-routes/round.routes";
import championRouter from "./routes/game-routes/champion.routes";
import playerRouter from './routes/game-routes/player.routes';
import matchRoutes from './routes/game-routes/match.routes';
import playerMatchRoutes from './routes/game-routes/player-match.routes';


const appRouter = Router();

appRouter.use("/round", roundRouter);
appRouter.use("/team", teamRouter);
appRouter.use("/champion", championRouter);
appRouter.use("/player", playerRouter);
appRouter.use("/match", matchRoutes);
appRouter.use("/playermatch", playerMatchRoutes);

export default appRouter;