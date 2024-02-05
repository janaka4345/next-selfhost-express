import prisma from "@/lib/prismaClient";
import { publicProcedure, router } from "./trpc";

export const userRouter = router({
    userList: publicProcedure
        .query(async () => {
            const allUsers = await prisma.user.findMany()
            console.log('ran');
            console.log(allUsers)
            return allUsers
        }),
});
