import { publicProcedure, router } from "./trpc";

const appRouter = router({
    userList: publicProcedure
        .query(async () => {
            return [10, 20, 30];
        }),
});
export { appRouter }