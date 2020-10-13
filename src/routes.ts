import { Router } from "express";
import {sessionRouter} from "./routes/auth-routes/session.routes";
import {permissionRouter} from './routes/auth-routes/permission.routes';
import {roleRouter} from "./routes/auth-routes/role.routes";
import { adminRouter } from "./routes/admin.routes";
import { userRouter } from "./routes/user.routes";
import { userTeamRouter } from "./routes/app-routes/user-team.routes";

const appRouter = Router();

appRouter.use("/userteam", userTeamRouter);
appRouter.use("/user", sessionRouter);
appRouter.use("/permission", permissionRouter);
appRouter.use("/role", roleRouter);
appRouter.use("/", adminRouter);
appRouter.use("/", userRouter);

export default appRouter;