'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, ArrowLeft, Loader2, Send, CheckCircle } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [email, setEmail] = useState('')

  const isFormValid = email.length > 0 && email.includes('@')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isFormValid) return

    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsEmailSent(true)
    setIsLoading(false)
  }

  const handleResendEmail = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
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
        {/* Back to Login */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors duration-300 text-sm"
        >
          <ArrowLeft size={18} />
          Back to Login
        </Link>

        {/* Forgot Password Card */}
        <div className="glass-card p-6">
          {!isEmailSent ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <Link href="/" className="text-2xl font-bold gradient-text mb-2 inline-block">
                  Mexaly
                </Link>
                <h1 className="text-xl font-bold text-white mb-1">
                  Forgot Password?
                </h1>
                <p className="text-white/60 text-sm">
                  Enter your email address and we'll send you a link to reset your password
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all duration-300 text-sm"
                    />
                  </div>

                  {/* Send Reset Link Button */}
                  <button
                    type="submit"
                    disabled={isLoading || !isFormValid}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed py-2.5 text-sm"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Reset Link
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </motion.div>
                <Link href="/" className="text-2xl font-bold gradient-text mb-2 inline-block">
                  Mexaly
                </Link>
                <h1 className="text-xl font-bold text-white mb-1">
                  Check Your Email
                </h1>
                <p className="text-white/60 text-sm">
                  We've sent a password reset link to
                </p>
                <p className="text-indigo-400 font-medium text-sm mt-1">
                  {email}
                </p>
              </div>

              {/* Instructions */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <h3 className="text-white font-medium mb-2 text-sm">Next Steps:</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Check your email inbox</li>
                  <li>• Click the reset link in the email</li>
                  <li>• Create a new password</li>
                  <li>• Sign in with your new password</li>
                </ul>
              </div>

              {/* Resend Link */}
              <div className="text-center">
                <p className="text-white/60 text-sm mb-3">
                  Didn't receive the email?
                </p>
                <button
                  onClick={handleResendEmail}
                  disabled={isLoading}
                  className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300 text-sm disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={14} className="animate-spin inline mr-1" />
                      Resending...
                    </>
                  ) : (
                    'Resend Email'
                  )}
                </button>
              </div>
            </>
          )}

          {/* Back to Login Link */}
          <p className="text-center text-white/60 mt-6 text-sm">
            Remember your password?{' '}
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