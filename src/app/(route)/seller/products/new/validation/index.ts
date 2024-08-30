import { z } from 'zod'

export const registerProductsSchema = z.object({
  productName: z
    .string()
    .min(3, { message: 'Product name must be at least 3 characters' }),
  productPrice: z
    .string()
    .min(1, { message: 'Product price must be at least 1 characters' }),
  productDescription: z
    .string()
    .min(3, { message: 'Product description must be at least 3 characters' }),
  productCategory: z
    .string()
    .min(3, { message: 'Product category must be at least 3 characters' })
})
