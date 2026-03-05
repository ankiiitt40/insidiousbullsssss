import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Trading3D from './Trading3D'
import { TrendingUp, Target, Zap, ArrowRight } from 'lucide-react'

const RotatingWords = () => {
  const words = ['Disciplined', 'Strategy Driven', 'Consistent', 'Data-Backed']
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-16 flex items-center">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
      >
        {words[current]}
      </motion.div>
    </div>
  )
}

// Floating particles background
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-dark-bg via-dark-bg to-dark-bg">
      {/* Advanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <FloatingParticles />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full w-fit"
          >
            <Zap size={16} className="text-primary" />
            <span className="text-sm text-primary font-semibold">6 Years Live Market Experience</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">Trade Smarter.</span>
            <br />
            <span className="text-white">Grow Faster.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
              <p className="text-lg text-gray-300">
                Professional Trading Education
              </p>
            </div>
            <p className="text-xl text-accent font-semibold">
              With Real Market Clarity & Discipline
            </p>
          </motion.div>

          {/* Rotating words */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-3"
          >
            <p className="text-gray-400 font-semibold">Master the art of:</p>
            <RotatingWords />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 py-6 border-y border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">1200+</p>
              <p className="text-sm text-gray-400">Students Trained</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">10</p>
              <p className="text-sm text-gray-400">Proven Strategies</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">120hrs</p>
              <p className="text-sm text-gray-400">Live Classes</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="#demo"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-xl hover-glow text-center flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </motion.a>
            <motion.a
              href="#demo"
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-all text-center"
              whileHover={{ scale: 1.05, borderColor: '#00ff99' }}
              whileTap={{ scale: 0.95 }}
            >
              Book Free Demo
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            className="text-sm text-gray-400 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            Join 1200+ successful traders today
          </motion.p>
        </motion.div>

        {/* Right Visual - 3D Trading */}
        <motion.div
          className="relative h-screen lg:h-[650px] -mr-6 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Floating cards */}
          <motion.div
            className="absolute top-10 right-10 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-primary/20 z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={18} className="text-primary" />
              <span className="font-semibold">+38% ROI Average</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-5 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-accent/20 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm">
              <Target size={18} className="text-accent" />
              <span className="font-semibold">Live Market Focus</span>
            </div>
          </motion.div>

          {/* 3D background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl" />
          <Trading3D />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent rounded-2xl" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
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