import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ value, label, delay }) => {
  return (
    <motion.div
      className="glass p-6 rounded-xl text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-4xl font-bold gradient-text mb-2"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
      </motion.div>
      <p className="text-gray-400 font-medium">{label}</p>
    </motion.div>
  )
}

export default function StatsSection() {
  const stats = [
    { value: '1200+', label: 'Students' },
    { value: '10', label: 'Proven Strategies' },
    { value: '120+', label: 'Hours Learning' },
    { value: '+38%', label: 'Avg Student ROI' },
  ]

  return (
    <section id="performance" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">Trading Results</span>
          </h2>
          <p className="text-gray-400 text-lg">Real numbers from real traders</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} delay={idx * 0.1} />
          ))}
        </div>

        {/* Background gradient */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
