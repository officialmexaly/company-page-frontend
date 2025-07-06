'use client'

import { motion } from 'framer-motion'
import { Settings } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '70%', label: 'Faster Onboarding' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '$12K+', label: 'Average Savings' },
    { number: '50+', label: 'Integrations' },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Revolutionizing Business Operations
              </h2>
              
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Mexaly is an AI-native, intelligent business solutions platform
                  designed to drive operational excellence, innovation, and agility
                  in modern organizations.
                </p>
                
                <p>
                  Unlike traditional ERP systems that are monolithic, rigid, and
                  expensive to customize, Mexaly offers a modular, intuitive, and
                  adaptive architecture that empowers businesses to thrive in a
                  fast-paced digital world.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors duration-300"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Visual Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full h-96 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='dots' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='2' fill='white'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23dots)'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative z-10"
                >
                  <Settings size={120} className="text-white animate-pulse" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute top-4 left-4 w-4 h-4 bg-white/30 rounded-full animate-bounce"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-8 right-8 w-6 h-6 bg-white/30 rounded-full animate-bounce"
                  style={{ animationDelay: '0.5s' }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute top-16 right-6 w-3 h-3 bg-white/30 rounded-full animate-bounce"
                  style={{ animationDelay: '1s' }}
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-full opacity-80"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-400 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About