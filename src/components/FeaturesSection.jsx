import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, BookOpen, Shield, Activity, Brain } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      className="glass p-8 rounded-xl hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        <Icon size={24} className="text-black" />
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Real Market Strategies',
      description: 'Learn proven trading strategies that work in real market conditions',
    },
    {
      icon: BookOpen,
      title: 'Step by Step Learning',
      description: 'Structured curriculum designed to build your trading foundation',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Master the art of protecting your capital in every trade',
    },
    {
      icon: Activity,
      title: 'Live Market Practice',
      description: 'Apply your learning in real-time trading scenarios',
    },
    {
      icon: Brain,
      title: 'Trading Psychology',
      description: 'Develop the mental edge needed for consistent profits',
    },
  ]

  return (
    <section id="program" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">What You'll Master</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to trade confidently</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} delay={idx * 0.1} />
          ))}
        </div>
      </div>

      <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
    </section>
  )
}
