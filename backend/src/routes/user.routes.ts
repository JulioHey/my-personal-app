import { Router } from "express";
import { is } from "../middleware/permission";
import {teamUserRouter} from "./game-routes/team.routes";
import {roundUserRouter} from "./game-routes/round.routes";
import {championUserRouter} from "./game-routes/champion.routes";
import {playerUserRouter} from './game-routes/player.routes';
import {matchUserRouter} from './game-routes/match.routes';
import {playerMatchUserRouter} from './game-routes/player-match.routes';
import {teamMatchUserRouter} from './game-routes/team-match.routes';
import {playerStatusUserRouter} from "./game-routes/player-status.routes";
import {matchDragonUserRouter} from './game-routes/match-dragon.routes';
import {teamStatusUserRouter} from './game-routes/team-status.routes';
import { coachMatchUserRouter } from "./game-routes/coach-match.routes";
import { coachUserRouter } from "./game-routes/coach.routes";



const userRouter = Router();
// userRouter.use(is(["User", "Admin"]));

userRouter.use("/round", roundUserRouter)
userRouter.use("/team", teamUserRouter);
userRouter.use("/champion", championUserRouter);
userRouter.use("/player", playerUserRouter);
userRouter.use("/match", matchUserRouter);
userRouter.use("/playermatch", playerMatchUserRouter);
userRouter.use("/teammatch", teamMatchUserRouter);
userRouter.use('/playerstatus', playerStatusUserRouter);
userRouter.use("/matchdragon", matchDragonUserRouter);
userRouter.use("/teamstatus", teamStatusUserRouter);
userRouter.use("/coach", coachUserRouter);
userRouter.use("/coachmatch", coachMatchUserRouter);



export {userRouter}