'use client'

import { motion } from 'framer-motion'
import { Brain, TrendingUp, Shield, Plug, Code, Boxes, ArrowRight } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'Create and automate complex business workflows without writing code. Our visual process designer makes it easy to build smart automation that adapts to your needs.',
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Business Intelligence',
      description: 'Get predictive analytics, natural language reporting, and anomaly detection. Ask questions in plain language and receive actionable insights instantly.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Compliance',
      description: 'Advanced threat protection, compliance management for GDPR, HIPAA, ISO 27001, and complete audit trails with ransomware protection.',
    },
    {
      icon: Plug,
      title: 'Seamless Integration Ecosystem',
      description: 'Connect with SAP, Salesforce, Microsoft 365, and all major cloud providers through our open REST/GraphQL APIs and secure gateway.',
    },
    {
      icon: Code,
      title: 'No-Code Process Builder',
      description: 'Design intelligent workflows visually with our drag-and-drop interface. Build complex business logic without technical expertise.',
    },
    {
      icon: Boxes,
      title: 'Modular Architecture',
      description: 'Adopt only what you need with our microservices-based platform. Scale features as your business grows with flexible pricing.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how Mexaly transforms your business operations with
            AI-native capabilities
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="feature-card group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <button className="text-indigo-600 font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features