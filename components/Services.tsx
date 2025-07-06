'use client'

import { motion } from 'framer-motion'
import { Bot, FileText, BarChart3, Search, MessageCircle, Smartphone } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'Smart Workflow Automation',
      description: 'Automate complex business processes with intelligent decision-making capabilities and real-time adaptation.',
    },
    {
      icon: FileText,
      title: 'Document Intelligence',
      description: 'Extract data and meaning from documents using advanced AI, eliminating manual data entry and errors.',
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Anticipate trends and make data-driven decisions with machine learning forecasting and insights.',
    },
    {
      icon: Search,
      title: 'Anomaly Detection',
      description: 'Automatically spot irregularities in operations or financials before they become costly problems.',
    },
    {
      icon: MessageCircle,
      title: 'Natural Language Reporting',
      description: 'Ask business questions in plain language and get instant, actionable answers from your data.',
    },
    {
      icon: Smartphone,
      title: 'Multi-channel Communications',
      description: 'Automate interactions across email, SMS, chat, and mobile apps with unified messaging.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Core Capabilities
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive solutions for modern business challenges
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services