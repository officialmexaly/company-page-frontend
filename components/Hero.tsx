'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Rocket, Play, Brain, Zap, ArrowRight, Globe, Target } from 'lucide-react'
import { useEffect, useState } from 'react'

const VectorIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Main Vector Illustration */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full max-w-[500px] mx-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Glow */}
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
          </radialGradient>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle cx="300" cy="300" r="280" fill="url(#bgGlow)" />

        {/* Central Tech Hub */}
        <motion.g
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <circle cx="300" cy="300" r="80" fill="url(#gradient1)" opacity="0.9" />
          <circle cx="300" cy="300" r="60" fill="rgba(255,255,255,0.1)" />
          <circle cx="300" cy="300" r="40" fill="url(#gradient1)" />
        </motion.g>

        {/* Orbiting Elements */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "300px 300px" }}
        >
          {/* Database Node */}
          <g transform="translate(450, 300)">
            <circle r="25" fill="url(#gradient3)" />
            <rect x="-8" y="-12" width="16" height="24" rx="2" fill="white" opacity="0.9" />
            <rect x="-6" y="-8" width="12" height="2" fill="url(#gradient3)" />
            <rect x="-6" y="-4" width="12" height="2" fill="url(#gradient3)" />
            <rect x="-6" y="0" width="12" height="2" fill="url(#gradient3)" />
            <rect x="-6" y="4" width="12" height="2" fill="url(#gradient3)" />
          </g>

          {/* Cloud Node */}
          <g transform="translate(150, 300)">
            <circle r="25" fill="url(#gradient2)" />
            <path d="M-10,-5 C-12,-10 -8,-12 -4,-10 C-2,-12 2,-12 4,-10 C8,-12 12,-8 10,-4 C12,-2 10,2 8,4 L-8,4 C-12,2 -12,-2 -10,-5 Z" fill="white" opacity="0.9" />
          </g>

          {/* Code Node */}
          <g transform="translate(300, 150)">
            <circle r="25" fill="url(#gradient1)" />
            <rect x="-10" y="-8" width="20" height="16" rx="2" fill="white" opacity="0.9" />
            <rect x="-8" y="-4" width="6" height="1.5" fill="url(#gradient1)" />
            <rect x="-8" y="-1" width="8" height="1.5" fill="url(#gradient1)" />
            <rect x="-8" y="2" width="4" height="1.5" fill="url(#gradient1)" />
          </g>

          {/* Shield Node */}
          <g transform="translate(300, 450)">
            <circle r="25" fill="url(#gradient2)" />
            <path d="M0,-12 L8,0 L0,12 L-8,0 Z" fill="white" opacity="0.9" />
            <path d="M0,-8 L4,0 L0,8 L-4,0 Z" fill="url(#gradient2)" />
          </g>
        </motion.g>

        {/* Connection Lines */}
        <motion.g
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <motion.path
            d="M 380 300 Q 400 250 300 230"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <motion.path
            d="M 220 300 Q 200 250 300 230"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <motion.path
            d="M 380 300 Q 400 350 300 370"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <motion.path
            d="M 220 300 Q 200 350 300 370"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </motion.g>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={100 + (i * 40)}
            cy={100 + (i % 3) * 150}
            r="3"
            fill="rgba(255,255,255,0.6)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}

        {/* Innovation Waves */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          {[1, 2, 3].map((ring) => (
            <motion.circle
              key={ring}
              cx="300"
              cy="300"
              r={120 + ring * 40}
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="1"
              opacity={0.3 / ring}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 4,
                delay: ring * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.g>
      </svg>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-4 right-4 lg:top-8 lg:right-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg"
        >
          <Brain className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-4 lg:bottom-12 lg:left-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center shadow-lg"
        >
          <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-16 left-8 lg:top-24 lg:left-12"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg"
        >
          <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-8 lg:bottom-24 lg:right-12"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center shadow-lg"
        >
          <Target className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
        </motion.div>
      </motion.div>
    </div>
  )
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-40 ">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y }}
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='15' height='15' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 15 0 L 0 0 0 15' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.005,
            y: mousePosition.y * 0.005,
          }}
          transition={{ type: "spring", stiffness: 20, damping: 30 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-500/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.003,
            y: mousePosition.y * -0.003,
          }}
          transition={{ type: "spring", stiffness: 15, damping: 35 }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center py-12 lg:py-20">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              <span className="block">Welcome to</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
                Mexaly
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the future of innovation with our cutting-edge solutions that empower businesses to reach new heights and transform their digital presence.
            </motion.p>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/20 inline-flex items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Rocket size={18} />
                    Begin Your Journey
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-6 py-3 lg:px-8 lg:py-4 bg-white/8 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/12 inline-flex items-center justify-center gap-3"
                >
                  <Play size={18} className="group-hover:scale-105 transition-transform duration-200" />
                  Experience Demo
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/10"
              >
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-white">500+</div>
                  <div className="text-xs lg:text-sm text-white/60">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-white">99.9%</div>
                  <div className="text-xs lg:text-sm text-white/60">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs lg:text-sm text-white/60">Support</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Vector Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <VectorIllustration />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero