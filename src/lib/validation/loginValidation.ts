import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().trim().email({
    message: 'Email must be valid.'
  }),
  password: z.string().trim().min(6, {
    message: 'Password must be at least 6 characters.'
  })
})
