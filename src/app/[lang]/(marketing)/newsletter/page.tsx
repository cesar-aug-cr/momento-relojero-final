'use client';

import { useState, use } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, ArrowLeft, CheckCircle2, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const FORM_STEPS = [
  {
    id: 'email',
    title: 'Get Started',
    subtitle: 'Join thousands of watch enthusiasts',
    fields: ['email'],
    progress: 33,
  },
  {
    id: 'profile',
    title: 'Tell Us About Yourself',
    subtitle: 'Help us personalize your experience',
    fields: ['firstName', 'experience'],
    progress: 66,
  },
  {
    id: 'interests',
    title: 'What Interests You?',
    subtitle: 'Receive content tailored to your interests',
    fields: ['interests', 'budgetRange'],
    progress: 100,
  },
];

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  experience: z.enum(['beginner', 'intermediate', 'advanced', 'collector']),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  budgetRange: z.enum(['under-500', '500-2000', '2000-5000', '5000-plus', 'no-preference']),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang = 'es' } = use(params);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    mode: 'onChange',
    defaultValues: {
      interests: [],
    },
  });

  const formData = watch();

  const handleNext = async () => {
    const fields = FORM_STEPS[currentStep].fields;
    const isValid = await trigger(fields as any);

    if (isValid) {
      if (currentStep < FORM_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);

        // Early email capture
        if (currentStep === 0 && formData.email) {
          try {
            await fetch('/api/newsletter/early-capture', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: formData.email }),
            });
          } catch (error) {
            console.error('Early capture failed:', error);
          }
        }
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);

        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: 'newsletter_complete',
          });
        }
      }
    } catch (error) {
      console.error('Newsletter signup failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const step = FORM_STEPS[currentStep];

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 flex items-center justify-center p-lg">
        <div className="max-w-2xl w-full bg-white dark:bg-dark-bg-tertiary rounded-2xl p-3xl text-center shadow-luxury">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-xl">
            <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-lg">
            Welcome to Momento Relojero!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl">
            Thank you for subscribing. Check your email for a confirmation message and your first curated content.
          </p>
          <a
            href={`/${lang}/`}
            className="inline-flex items-center gap-sm px-xl py-lg bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold rounded-lg transition-all duration-377"
          >
            Return to Homepage
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-bg dark:to-dark-bg-secondary flex items-center justify-center p-lg">
      <div className="max-w-3xl w-full">
        {/* Progress Bar */}
        <div className="mb-3xl">
          <div className="flex justify-between mb-md">
            {FORM_STEPS.map((s, index) => (
              <div
                key={s.id}
                className={cn(
                  'flex-1 h-2 rounded-full mx-xs transition-all duration-377',
                  index <= currentStep ? 'bg-accent-gold' : 'bg-gray-200 dark:bg-dark-border'
                )}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Step {currentStep + 1} of {FORM_STEPS.length}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-dark-bg-tertiary rounded-2xl p-3xl shadow-luxury border border-gray-200 dark:border-dark-border">
          <div className="text-center mb-3xl">
            <Mail className="w-16 h-16 text-accent-gold mx-auto mb-lg" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-md">
              {step.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {step.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-xl">
            {/* Step 1: Email */}
            {currentStep === 0 && (
              <div className="space-y-lg animate-fade-in">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-sm">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={cn(
                      'w-full px-lg py-lg rounded-lg border-2 bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-all duration-233',
                      errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 dark:border-dark-border focus:border-accent-gold'
                    )}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-sm text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    ✓ Exclusive watch reviews and guides<br/>
                    ✓ Industry news and new releases<br/>
                    ✓ Collecting tips from experts<br/>
                    ✓ Special offers and early access
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Profile */}
            {currentStep === 1 && (
              <div className="space-y-xl animate-fade-in">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-sm">
                    First Name
                  </label>
                  <input
                    {...register('firstName')}
                    type="text"
                    id="firstName"
                    className={cn(
                      'w-full px-lg py-lg rounded-lg border-2 bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-all',
                      errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-dark-border focus:border-accent-gold'
                    )}
                    placeholder="Your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-sm text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-md">
                    Your Watch Experience Level
                  </label>
                  <div className="grid grid-cols-2 gap-md">
                    {[
                      { value: 'beginner', label: 'Beginner', desc: 'Just starting out' },
                      { value: 'intermediate', label: 'Intermediate', desc: 'Know the basics' },
                      { value: 'advanced', label: 'Advanced', desc: 'Experienced enthusiast' },
                      { value: 'collector', label: 'Collector', desc: 'Serious collection' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          'relative flex flex-col p-lg rounded-lg border-2 cursor-pointer transition-all',
                          formData.experience === option.value
                            ? 'border-accent-gold bg-accent-gold/5'
                            : 'border-gray-300 dark:border-dark-border hover:border-accent-gold/50'
                        )}
                      >
                        <input
                          {...register('experience')}
                          type="radio"
                          value={option.value}
                          className="sr-only"
                        />
                        <span className="font-semibold text-gray-900 dark:text-white">{option.label}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{option.desc}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Interests */}
            {currentStep === 2 && (
              <div className="space-y-xl animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-md">
                    Topics of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-md">
                    {[
                      { value: 'dive-watches', label: 'Dive Watches' },
                      { value: 'dress-watches', label: 'Dress Watches' },
                      { value: 'luxury-brands', label: 'Luxury Brands' },
                      { value: 'affordable-watches', label: 'Affordable Watches' },
                      { value: 'vintage', label: 'Vintage Watches' },
                      { value: 'complications', label: 'Complications' },
                    ].map((interest) => (
                      <label
                        key={interest.value}
                        className={cn(
                          'flex items-center gap-md p-lg rounded-lg border-2 cursor-pointer transition-all',
                          formData.interests?.includes(interest.value)
                            ? 'border-accent-gold bg-accent-gold/5'
                            : 'border-gray-300 dark:border-dark-border hover:border-accent-gold/50'
                        )}
                      >
                        <input
                          {...register('interests')}
                          type="checkbox"
                          value={interest.value}
                          className="w-5 h-5 text-accent-gold rounded focus:ring-accent-gold"
                        />
                        <span className="font-medium text-gray-900 dark:text-white">{interest.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="mt-sm text-sm text-red-600">{errors.interests.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-md">
                    Budget Range
                  </label>
                  <select
                    {...register('budgetRange')}
                    className="w-full px-lg py-lg rounded-lg border-2 border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:border-accent-gold"
                  >
                    <option value="">Select a range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-2000">$500 - $2,000</option>
                    <option value="2000-5000">$2,000 - $5,000</option>
                    <option value="5000-plus">$5,000+</option>
                    <option value="no-preference">No preference</option>
                  </select>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-xl">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-sm px-xl py-lg bg-gray-200 dark:bg-dark-border hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
              )}

              {currentStep < FORM_STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-sm px-xl py-lg bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold rounded-lg transition-all ml-auto"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-sm px-xl py-lg bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold rounded-lg transition-all disabled:opacity-50 ml-auto"
                >
                  {isSubmitting ? 'Subscribing...' : 'Complete Subscription'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>
        </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-lg">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
