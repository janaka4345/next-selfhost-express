import { z } from 'zod'

export const userSchema = z.object({
    username: z.string(),
    age: z.number().optional(),
    isProgrammer: z.boolean().default(false)
})