'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, Building, ArrowLeft, Loader2, Check, Shield } from 'lucide-react'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
    terms: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validatePassword = (password: string) => {
    return {
      minLength: password.length >= 8,
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    }
  }

  const passwordValidation = validatePassword(formData.password)
  const isPasswordValid = Object.values(passwordValidation).every(Boolean)
  const passwordScore = Object.values(passwordValidation).filter(Boolean).length

  const isStep1Valid = formData.firstName && formData.lastName && formData.email && formData.company
  const isStep2Valid = isPasswordValid && formData.password === formData.confirmPassword && formData.terms

  const handleNext = () => {
    if (activeStep === 1 && isStep1Valid) {
      setActiveStep(2)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isStep2Valid) return

    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    alert('Account created successfully! Please check your email to verify your account.')
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors duration-300 text-sm"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Signup Card */}
        <div className="glass-card p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <Link href="/" className="text-2xl font-bold gradient-text mb-2 inline-block">
              Mexaly
            </Link>
            <h1 className="text-xl font-bold text-white mb-1">
              Create Your Account
            </h1>
            <p className="text-white/60 text-sm">
              Start your AI-native business journey
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${activeStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-white/10 text-white/50'}`}>
                1
              </div>
              <div className={`w-8 h-0.5 transition-all duration-300 ${activeStep >= 2 ? 'bg-indigo-600' : 'bg-white/20'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${activeStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-white/10 text-white/50'}`}>
                2
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1: Personal Info */}
            {activeStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="text-center mb-4">
                  <h3 className="text-white font-medium">Personal Information</h3>
                  <p className="text-white/60 text-sm">Tell us about yourself</p>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First name"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all duration-300 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last name"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all duration-300 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all duration-300 text-sm"
                  />
                </div>

                {/* Company */}
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company name"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all duration-300 text-sm"
                  />
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStep1Valid}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed py-2.5 text-sm"
                >
                  Next Step
                </button>
              </motion.div>
            )}

            {/* Step 2: Security */}
            {activeStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="text-center mb-4">
                  <h3 className="text-white font-medium flex items-center justify-center gap-2">
                    <Shield size={18} />
                    Security Setup
                  </h3>
                  <p className="text-white/60 text-sm">Create a secure password</p>
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create password"
                    required
                    className="w-full pl-10 pr-10 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all duration-300 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* Password Strength */}
                {formData.password && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${
                            passwordScore <= 2 ? 'bg-red-500' : 
                            passwordScore <= 4 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${(passwordScore / 5) * 100}%` }}
                        />
                      </div>
                      <span className={`text-xs ${
                        passwordScore <= 2 ? 'text-red-400' : 
                        passwordScore <= 4 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {passwordScore <= 2 ? 'Weak' : passwordScore <= 4 ? 'Good' : 'Strong'}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-xs">
                      <div className={`flex items-center gap-1 ${passwordValidation.minLength ? 'text-green-400' : 'text-white/40'}`}>
                        <Check size={10} />
                        8+ chars
                      </div>
                      <div className={`flex items-center gap-1 ${passwordValidation.hasUpper ? 'text-green-400' : 'text-white/40'}`}>
                        <Check size={10} />
                        Upper
                      </div>
                      <div className={`flex items-center gap-1 ${passwordValidation.hasNumber ? 'text-green-400' : 'text-white/40'}`}>
                        <Check size={10} />
                        Number
                      </div>
                    </div>
                  </div>
                )}

                {/* Confirm Password */}
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm password"
                    required
                    className="w-full pl-10 pr-10 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all duration-300 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-indigo-600 bg-white/10 border-white/20 rounded focus:ring-indigo-500 focus:ring-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white/70 text-xs leading-relaxed">
                    I agree to the{' '}
                    <Link href="/terms" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                      Terms
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveStep(1)}
                    className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 text-sm"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading || !isStep2Valid}
                    className="flex-1 btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed py-2.5 text-sm"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Creating...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </form>

          {/* Sign In Link */}
          <p className="text-center text-white/60 mt-6 text-sm">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}