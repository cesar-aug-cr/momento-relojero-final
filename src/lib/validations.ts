import { z } from 'zod'

// Newsletter subscription schema with multi-step validation
export const newsletterStepOneSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
})

export const newsletterStepTwoSchema = z.object({
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced', 'expert']),
})

export const newsletterStepThreeSchema = z.object({
  preferences: z.object({
    weeklyNewsletter: z.boolean(),
    productUpdates: z.boolean(),
    watchNews: z.boolean(),
  }),
})

export const fullNewsletterSchema = newsletterStepOneSchema
  .merge(newsletterStepTwoSchema)
  .merge(newsletterStepThreeSchema)

export type NewsletterStepOne = z.infer<typeof newsletterStepOneSchema>
export type NewsletterStepTwo = z.infer<typeof newsletterStepTwoSchema>
export type NewsletterStepThree = z.infer<typeof newsletterStepThreeSchema>
export type FullNewsletterData = z.infer<typeof fullNewsletterSchema>
