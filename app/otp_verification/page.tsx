'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Clock, Loader2, CheckCircle, RefreshCw } from 'lucide-react'

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus()
  }, [])

  useEffect(() => {
    // Timer countdown
    if (timeLeft > 0 && !isVerified) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft, isVerified])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return // Prevent multiple characters
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    const newOtp = pastedData.split('').slice(0, 6)
    
    while (newOtp.length < 6) {
      newOtp.push('')
    }
    
    setOtp(newOtp)
    
    // Focus last filled input or first empty
    const lastIndex = Math.min(pastedData.length, 5)
    inputRefs.current[lastIndex]?.focus()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate verification API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsVerified(true)
  }

  const handleResendCode = async () => {
    setIsLoading(true)
    setTimeLeft(300) // Reset timer
    setOtp(['', '', '', '', '', '']) // Clear OTP
    
    // Simulate resend API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    inputRefs.current[0]?.focus()
  }

  const isOtpComplete = otp.every(digit => digit !== '')

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
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
        {/* Back Navigation */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors duration-300 text-sm"
        >
          <ArrowLeft size={18} />
          Back to Login
        </Link>

        {/* OTP Verification Card */}
        <div className="glass-card p-6">
          {!isVerified ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <Link href="/" className="text-2xl font-bold gradient-text mb-2 inline-block">
                  Mexaly
                </Link>
                <h1 className="text-xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                  <Shield size={20} />
                  Verify Your Account
                </h1>
                <p className="text-white/60 text-sm">
                  Enter the 6-digit code sent to your email
                </p>
                <p className="text-indigo-400 font-medium text-sm mt-1">
                  john.doe@example.com
                </p>
              </div>

              {/* OTP Input Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* OTP Input Fields */}
                  <div className="flex justify-center gap-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => { 
                          inputRefs.current[index] = el 
                        }}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg text-white text-center text-lg font-medium focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all duration-300"
                      />
                    ))}
                  </div>

                  {/* Timer */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                      <Clock size={16} />
                      <span>
                        {timeLeft > 0 ? (
                          <>Code expires in {formatTime(timeLeft)}</>
                        ) : (
                          <span className="text-red-400">Code expired</span>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Verify Button */}
                  <button
                    type="submit"
                    disabled={isLoading || !isOtpComplete || timeLeft === 0}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed py-2.5 text-sm"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      'Verify Code'
                    )}
                  </button>
                </motion.div>
              </form>

              {/* Resend Code */}
              <div className="text-center mt-6">
                <p className="text-white/60 text-sm mb-3">
                  Didn&apos;t receive the code?
                </p>
                <button
                  onClick={handleResendCode}
                  disabled={isLoading || timeLeft > 240} // Allow resend after 1 minute
                  className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                >
                  <RefreshCw size={14} className={isLoading ? "animate-spin" : ""} />
                  {timeLeft > 240 ? `Resend in ${formatTime(300 - timeLeft)}` : 'Resend Code'}
                </button>
              </div>
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
                  Account Verified!
                </h1>
                <p className="text-white/60 text-sm">
                  Your account has been verified successfully
                </p>
              </div>

              {/* Success Actions */}
              <div className="space-y-3">
                <Link
                  href="/dashboard"
                  className="w-full btn-primary justify-center py-2.5 text-sm"
                >
                  Continue to Dashboard
                </Link>
                <Link
                  href="/login"
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 text-sm text-center block"
                >
                  Back to Login
                </Link>
              </div>
            </>
          )}

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-white/50 text-xs">
              Having trouble? Contact{' '}
              <Link
                href="/support"
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              >
                support
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}