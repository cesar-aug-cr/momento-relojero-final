import { useState, useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { trackFormAbandonment } from '@/lib/analytics'

interface UseMultiStepFormProps {
  totalSteps: number
  formName: string
  onComplete: (data: any) => Promise<void>
}

export function useMultiStepForm({ totalSteps, formName, onComplete }: UseMultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useLocalStorage<Record<string, any>>(`${formName}_data`, {})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }, [currentStep, totalSteps])

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }, [currentStep])

  const updateFormData = useCallback((data: Record<string, any>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }, [setFormData])

  const submitForm = useCallback(async (finalData: Record<string, any>) => {
    setIsSubmitting(true)
    try {
      const completeData = { ...formData, ...finalData }
      await onComplete(completeData)
      // Clear localStorage after successful submission
      window.localStorage.removeItem(`${formName}_data`)
    } catch (error) {
      console.error('Form submission error:', error)
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, formName, onComplete])

  const resetForm = useCallback(() => {
    setCurrentStep(0)
    setFormData({})
    window.localStorage.removeItem(`${formName}_data`)
  }, [formName, setFormData])

  // Track form abandonment when user leaves
  const trackAbandonment = useCallback(() => {
    if (currentStep < totalSteps - 1 && Object.keys(formData).length > 0) {
      trackFormAbandonment(formName, currentStep + 1)
    }
  }, [currentStep, formData, formName, totalSteps])

  const progress = ((currentStep + 1) / totalSteps) * 100

  return {
    currentStep,
    formData,
    isSubmitting,
    progress,
    nextStep,
    prevStep,
    updateFormData,
    submitForm,
    resetForm,
    trackAbandonment,
  }
}
