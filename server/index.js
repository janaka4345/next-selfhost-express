import { publicProcedure, router } from "./trpc";
import { userRouter } from "./userRoutes";

export const appRouter = router({
    userList: publicProcedure
        .query(async () => {
            return [10, 20, 30];
        }),
    user2: publicProcedure
        .query(async () => {
            console.log('ran1');

            const allUsers = await prisma.User.findUnique({
                where: {
                    id: 1
                }
            })
            console.log('ran2');
            console.log(allUsers)
            return allUsers
        }),
    users: userRouter
});
