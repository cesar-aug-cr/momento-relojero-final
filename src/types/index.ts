// Type definitions for the application

export interface WatchBrand {
  id: string
  name: string
  category: 'luxury' | 'affordable' | 'heritage'
  description: string
  founded?: number
  origin?: string
}

export interface WatchType {
  id: string
  name: string
  description: string
  pros: string[]
  cons: string[]
  bestFor: string
}

export interface WatchMovement {
  id: string
  name: string
  type: 'mechanical' | 'automatic' | 'quartz' | 'hybrid'
  description: string
  accuracy: string
  maintenance: string
}

export interface Complication {
  id: string
  name: string
  description: string
  complexity: 'simple' | 'moderate' | 'complex'
  examples: string[]
}

export interface NewsletterFormStep {
  id: string
  title: string
  description: string
  fields: string[]
  progress: number
}

export interface FormState {
  currentStep: number
  data: Record<string, any>
  isSubmitting: boolean
  errors: Record<string, string>
}
