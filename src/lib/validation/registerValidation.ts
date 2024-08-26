import { z } from 'zod'

export const registerFormSchema = z.object({
  fullName: z.string().trim().min(2, {
    message: 'Full Name must be at least 2 characters.'
  }),
  email: z.string().trim().toLowerCase().email({
    message: 'Email must be valid.'
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.'
  }),
  storeOpen: z.boolean(),
  shopName: z.string().min(2, {
    message: 'Shop Name must be at least 2 characters.'
  }),
  shopCategory: z.string({
    message: 'Shop Category must be at least 2 characters.'
  })
})
