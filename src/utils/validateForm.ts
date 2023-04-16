import { z } from 'zod'

export const loginFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, 'Email is required')
      .email('Invalid email'),
    password: z
      .string()
      .trim()
      .min(1, 'Password is required')
      .min(3, 'Password must have more than 3 characters'),
  })
