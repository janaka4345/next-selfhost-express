import { z } from 'zod'

export const userSchema = z.object({
    username: z.string(),
    age: z.number().optional(),
    password: z.string(),
    confirmPassword: z.string().refine(val => val),
    isProgrammer: z.boolean().default(false)
})