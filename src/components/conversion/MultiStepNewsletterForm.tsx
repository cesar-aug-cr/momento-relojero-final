'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Check, Mail, User, Settings } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useMultiStepForm } from '@/hooks/useMultiStepForm'
import { trackNewsletterSignup } from '@/lib/analytics'
import {
  newsletterStepOneSchema,
  newsletterStepTwoSchema,
  newsletterStepThreeSchema,
  type NewsletterStepOne,
  type NewsletterStepTwo,
  type NewsletterStepThree,
} from '@/lib/validations'

const WATCH_INTERESTS = [
  { id: 'mechanical', label: 'Mechanical Watches' },
  { id: 'luxury', label: 'Luxury Brands' },
  { id: 'vintage', label: 'Vintage Timepieces' },
  { id: 'affordable', label: 'Affordable Options' },
  { id: 'smartwatches', label: 'Smartwatches' },
  { id: 'complications', label: 'Watch Complications' },
]

const EXPERIENCE_LEVELS = [
  { value: 'beginner', label: 'Just Starting', description: 'New to the world of watches' },
  { value: 'intermediate', label: 'Enthusiast', description: 'I have a growing collection' },
  { value: 'advanced', label: 'Collector', description: 'Serious about horology' },
  { value: 'expert', label: 'Expert', description: 'Deep knowledge and extensive collection' },
]

export const MultiStepNewsletterForm: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const { currentStep, formData, isSubmitting, progress, nextStep, prevStep, updateFormData, submitForm, resetForm } =
    useMultiStepForm({
      totalSteps: 3,
      formName: 'newsletter',
      onComplete: async (data) => {
        // Submit to API
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        if (!response.ok) throw new Error('Subscription failed')

        trackNewsletterSignup(3, { completed: true })
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          resetForm()
        }, 5000)
      },
    })

  // Step 1 Form
  const step1Form = useForm<NewsletterStepOne>({
    resolver: zodResolver(newsletterStepOneSchema),
    defaultValues: {
      firstName: formData.firstName || '',
      email: formData.email || '',
    },
  })

  const handleStep1Submit = (data: NewsletterStepOne) => {
    updateFormData(data)
    trackNewsletterSignup(1, { email: data.email })
    nextStep()
  }

  // Step 2 Form
  const step2Form = useForm<NewsletterStepTwo>({
    resolver: zodResolver(newsletterStepTwoSchema),
    defaultValues: {
      interests: formData.interests || [],
      experienceLevel: formData.experienceLevel || 'beginner',
    },
  })

  const [selectedInterests, setSelectedInterests] = useState<string[]>(formData.interests || [])

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleStep2Submit = (data: NewsletterStepTwo) => {
    const dataWithInterests = { ...data, interests: selectedInterests }
    updateFormData(dataWithInterests)
    trackNewsletterSignup(2)
    nextStep()
  }

  // Step 3 Form
  const step3Form = useForm<NewsletterStepThree>({
    resolver: zodResolver(newsletterStepThreeSchema),
    defaultValues: {
      preferences: formData.preferences || {
        weeklyNewsletter: true,
        productUpdates: false,
        watchNews: true,
      },
    },
  })

  const handleStep3Submit = async (data: NewsletterStepThree) => {
    await submitForm(data)
  }

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-2xl"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-lg">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-md">Welcome to Momento Relojero!</h3>
        <p className="text-slate-600 dark:text-slate-400">
          Check your email for a confirmation message.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-2xl">
        <div className="flex justify-between mb-md">
          <div className="flex items-center gap-sm">
            <User className={currentStep >= 0 ? 'text-gold-500' : 'text-slate-400'} size={20} />
            <span className="text-sm font-medium">Your Info</span>
          </div>
          <div className="flex items-center gap-sm">
            <Settings className={currentStep >= 1 ? 'text-gold-500' : 'text-slate-400'} size={20} />
            <span className="text-sm font-medium">Interests</span>
          </div>
          <div className="flex items-center gap-sm">
            <Mail className={currentStep >= 2 ? 'text-gold-500' : 'text-slate-400'} size={20} />
            <span className="text-sm font-medium">Preferences</span>
          </div>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-gold-400 to-gold-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={step1Form.handleSubmit(handleStep1Submit)} className="space-y-lg">
              <div>
                <h3 className="text-2xl font-bold mb-md">Let&apos;s Get Started</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Join our community of watch enthusiasts
                </p>
              </div>

              <Input
                label="First Name"
                placeholder="John"
                {...step1Form.register('firstName')}
                error={step1Form.formState.errors.firstName?.message}
                autoFocus
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                {...step1Form.register('email')}
                error={step1Form.formState.errors.email?.message}
              />

              <div className="flex justify-end">
                <Button type="submit" className="group">
                  Continue
                  <ChevronRight className="ml-sm group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={step2Form.handleSubmit(handleStep2Submit)} className="space-y-lg">
              <div>
                <h3 className="text-2xl font-bold mb-md">Tell Us Your Interests</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  What topics would you like to learn about?
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-md">Select Your Interests</label>
                <div className="grid grid-cols-2 gap-md">
                  {WATCH_INTERESTS.map((interest) => (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => toggleInterest(interest.id)}
                      className={`p-lg border-2 rounded-md transition-all ${
                        selectedInterests.includes(interest.id)
                          ? 'border-gold-500 bg-gold-50 dark:bg-gold-900/20'
                          : 'border-slate-300 dark:border-slate-600 hover:border-gold-300'
                      }`}
                    >
                      <span className="text-sm font-medium">{interest.label}</span>
                    </button>
                  ))}
                </div>
                {selectedInterests.length === 0 && step2Form.formState.errors.interests && (
                  <p className="text-sm text-red-600 mt-sm">Please select at least one interest</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-md">Experience Level</label>
                <div className="space-y-sm">
                  {EXPERIENCE_LEVELS.map((level) => (
                    <label
                      key={level.value}
                      className="flex items-start p-lg border-2 rounded-md cursor-pointer transition-all hover:border-gold-300"
                    >
                      <input
                        type="radio"
                        value={level.value}
                        {...step2Form.register('experienceLevel')}
                        className="mt-1 mr-md"
                      />
                      <div>
                        <div className="font-medium">{level.label}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{level.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="ghost" onClick={prevStep}>
                  <ChevronLeft className="mr-sm" size={20} />
                  Back
                </Button>
                <Button type="submit" className="group">
                  Continue
                  <ChevronRight className="ml-sm group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={step3Form.handleSubmit(handleStep3Submit)} className="space-y-lg">
              <div>
                <h3 className="text-2xl font-bold mb-md">Email Preferences</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Choose what you&apos;d like to receive from us
                </p>
              </div>

              <div className="space-y-md">
                <label className="flex items-center p-lg border-2 rounded-md cursor-pointer hover:border-gold-300">
                  <input
                    type="checkbox"
                    {...step3Form.register('preferences.weeklyNewsletter')}
                    className="mr-md"
                  />
                  <div>
                    <div className="font-medium">Weekly Newsletter</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Curated watch content every week
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-lg border-2 rounded-md cursor-pointer hover:border-gold-300">
                  <input
                    type="checkbox"
                    {...step3Form.register('preferences.productUpdates')}
                    className="mr-md"
                  />
                  <div>
                    <div className="font-medium">Product Updates</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      New releases and special offers
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-lg border-2 rounded-md cursor-pointer hover:border-gold-300">
                  <input
                    type="checkbox"
                    {...step3Form.register('preferences.watchNews')}
                    className="mr-md"
                  />
                  <div>
                    <div className="font-medium">Watch Industry News</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Latest trends and announcements
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="ghost" onClick={prevStep}>
                  <ChevronLeft className="mr-sm" size={20} />
                  Back
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Subscribing...' : 'Complete Subscription'}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

MultiStepNewsletterForm.displayName = 'MultiStepNewsletterForm'
