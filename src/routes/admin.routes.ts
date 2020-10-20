import { Router } from "express";
import { is } from "../middleware/permission";
import {teamAdminRouter} from "./game-routes/team.routes";
import {roundAdminRouter} from "./game-routes/round.routes";
import {championAdminRouter} from "./game-routes/champion.routes";
import {playerAdminRouter} from './game-routes/player.routes';
import {matchAdminRouter} from './game-routes/match.routes';
import {playerMatchAdminRouter} from './game-routes/player-match.routes';
import {teamMatchAdminRouter} from './game-routes/team-match.routes';
import {playerStatusAdminRouter} from "./game-routes/player-status.routes";
import {matchDragonAdminRouter} from './game-routes/match-dragon.routes';
import {teamStatusAdminRouter} from './game-routes/team-status.routes';



const adminRouter = Router();
// adminRouter.use(is(["Admin"]));

adminRouter.use("/round", roundAdminRouter)
adminRouter.use("/team", teamAdminRouter);
adminRouter.use("/champion", championAdminRouter);
adminRouter.use("/player", playerAdminRouter);
adminRouter.use("/match", matchAdminRouter);
adminRouter.use("/playermatch", playerMatchAdminRouter);
adminRouter.use("/teammatch", teamMatchAdminRouter);
adminRouter.use('/playerstatus', playerStatusAdminRouter);
adminRouter.use("/matchdragon", matchDragonAdminRouter);
adminRouter.use("/teamstatus", teamStatusAdminRouter);


export {adminRouter}