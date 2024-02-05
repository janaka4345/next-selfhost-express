import prisma from "@/lib/prismaClient";
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

            const allUsers = await prisma.User.findMany()
            console.log('ran2');
            console.log(allUsers)
            return allUsers
        }),
    users: userRouter
});
