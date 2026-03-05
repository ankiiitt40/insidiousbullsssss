import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Instagram } from 'lucide-react'

const ContactCard = ({ icon: Icon, label, value, href, delay }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 mx-auto"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        <Icon size={24} className="text-black" />
      </motion.div>
      <p className="text-gray-400 text-sm mb-2">{label}</p>
      <p className="font-bold text-white break-all">{value}</p>
    </motion.a>
  )
}

export default function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Shubhsv777@gmail.com',
      href: 'mailto:Shubhsv777@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9131 749509',
      href: 'tel:+919131749509',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Message Us',
      href: 'https://wa.me/919131749509',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@tradewith_shubham7',
      href: 'https://www.instagram.com/tradewith_shubham7',
    },
  ]

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">We're here to help you succeed</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, idx) => (
            <ContactCard key={idx} {...contact} delay={idx * 0.1} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 glass p-10 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Trading?</h3>
          <p className="text-gray-400 mb-6">
            Join 1200+ successful traders who've transformed their financial lives
          </p>
          <motion.a
            href="https://wa.me/919131749509"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-lg hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Now on WhatsApp
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
    </section>
  )
}
