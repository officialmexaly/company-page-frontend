'use client'

import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "With Mexaly, we cut our onboarding time by over 70% and finally gained real-time visibility into our operations. The AI-driven insights have been game-changing for our decision-making process.",
      author: "John Doe",
      position: "CEO, Professional Services",
      initials: "JD",
    },
    {
      quote: "Our supply chain workflow that took weeks to coordinate is now fully automated thanks to Mexaly's visual process builder. The no-code approach made it accessible to our entire team.",
      author: "Sarah Miller",
      position: "Operations Director, Manufacturing",
      initials: "SM",
    },
    {
      quote: "The decision intelligence layer helped us detect an invoicing anomaly worth over $12,000. That alone paid for the system. The ROI has been incredible.",
      author: "Robert Martinez",
      position: "CFO, Healthcare Group",
      initials: "RM",
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how Mexaly is transforming businesses across industries
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Quote Mark */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">"</span>
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 leading-relaxed mb-8 italic text-lg">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials