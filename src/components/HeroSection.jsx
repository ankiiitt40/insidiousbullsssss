import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Trading3D from './Trading3D'

const RotatingWords = () => {
  const words = ['Disciplined', 'Strategy Driven', 'Consistent']
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-12 flex items-center">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="gradient-text text-3xl font-bold"
      >
        {words[current]}
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="gradient-text">Trade Smarter.</span>
            <br />
            <span className="text-white">Grow Faster.</span>
          </motion.h1>

          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-gray-300">
              Simple Learning
            </p>
            <p className="text-xl text-accent">
              Real Market Clarity
            </p>
          </motion.div>

          {/* Rotating words */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-gray-400 mb-4">Master the art of:</p>
            <RotatingWords />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="#demo"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-xl hover-glow text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning
            </motion.a>
            <motion.button
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Free Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Visual - 3D Trading */}
        <motion.div
          className="relative h-screen lg:h-[600px] -mr-6 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
          <Trading3D />
          
          {/* Overlay elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent rounded-2xl" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
