import { publicProcedure, router } from "./trpc";
import { userRouter } from "./userRoutes";

export const appRouter = router({
    userList: publicProcedure
        .query(async () => {
            return [10, 20, 30];
        }),
    users: userRouter
});
