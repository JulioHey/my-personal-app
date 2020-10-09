import { Router } from "express";
import {teamRouter} from "./routes/game-routes/team.routes";
import {roundRouter} from "./routes/game-routes/round.routes";
import {championRouter} from "./routes/game-routes/champion.routes";
import {playerRouter} from './routes/game-routes/player.routes';
import {matchRouter} from './routes/game-routes/match.routes';
import {playerMatchRouter} from './routes/game-routes/player-match.routes';
import {teamMatchRouter} from './routes/game-routes/team-match.routes';
import {playerStatusRouter} from "./routes/game-routes/player-status.routes";


const appRouter = Router();

appRouter.use("/round", roundRouter);
appRouter.use("/team", teamRouter);
appRouter.use("/champion", championRouter);
appRouter.use("/player", playerRouter);
appRouter.use("/match", matchRouter);
appRouter.use("/playermatch", playerMatchRouter);
appRouter.use("/teammatch", teamMatchRouter);
appRouter.use('/playerstatus', playerStatusRouter);

export default appRouter;