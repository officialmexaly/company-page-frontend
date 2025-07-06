'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Rocket, Play, Brain, Zap, ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y }}
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>

        {/* Dynamic Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-8 w-full"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white/90 mb-8">
              <Sparkles size={16} className="text-yellow-400" />
              <span>Transforming Ideas into Reality</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              <span className="block">Welcome to</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mexaly
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Experience the future of innovation with our cutting-edge solutions that empower businesses to reach new heights and transform their digital presence.
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/70">
                <Brain size={20} className="text-indigo-400 flex-shrink-0" />
                <span>AI-Powered Intelligence</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Zap size={20} className="text-purple-400 flex-shrink-0" />
                <span>Lightning-Fast Performance</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Rocket size={20} className="text-pink-400 flex-shrink-0" />
                <span>Scalable Solutions</span>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 inline-flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Rocket size={20} />
                    Begin Your Journey
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%', skewX: 45 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/20 inline-flex items-center gap-3"
                >
                  <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  Experience Demo
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-8 pt-8 border-t border-white/10"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/60">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-white/60">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/60">Support</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central Hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/50"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Rocket size={32} className="text-indigo-500" />
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                className="absolute top-1/4 right-8 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 left-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="w-5 h-5 bg-white rounded-full animate-pulse"></div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-8 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/25"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/50 rounded-full"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${25 + (i % 4) * 18}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(99, 102, 241, 0.5)" />
                  <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
                  <stop offset="100%" stopColor="rgba(236, 72, 153, 0.5)" />
                </linearGradient>
              </defs>
              <motion.circle
                cx="50%"
                cy="50%"
                r="120"
                stroke="url(#line-gradient)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4,6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="180"
                stroke="url(#line-gradient)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="2,10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, delay: 2 }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            })
          }}
        >
          <span className="text-xs font-medium tracking-wider">Discover More</span>
          <div className="w-5 h-8 border border-white/30 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero