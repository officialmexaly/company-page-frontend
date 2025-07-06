'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Youtube } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Integrations', href: '#' },
        { label: 'API', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Help Center', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Status', href: '#' },
        { label: 'Terms', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/mexaly', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/mexaly', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/mexaly', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/mexaly', label: 'YouTube' },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
              Mexaly
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              AI-native business solutions platform designed to drive
              operational excellence, innovation, and agility in modern
              organizations.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
            >
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * linkIndex }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-indigo-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 mt-12 text-center"
        >
          <p className="text-white/60">
            &copy; 2025 Mexaly. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer