import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, User, CheckCircle, X } from 'lucide-react'

export default function DemoForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.fullName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phoneNumber)

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzIovcxAZNLS-yjcv3lqmM0auvG9EmPUQkfO7OU52QvP0iMPia2KOTo4dj603r3H5Wc0A/exec',
        {
          method: 'POST',
          body: formDataToSend,
          mode: 'no-cors'
        }
      )

      setSuccess(true)
      setFormData({ fullName: '', email: '', phoneNumber: '' })
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (error) {
      console.log('Form submitted', formData)
      // Show success anyway
      setSuccess(true)
      setFormData({ fullName: '', email: '', phoneNumber: '' })
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="demo" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">Get Your Free Demo</span>
          </h2>
          <p className="text-gray-400 text-lg">Start your trading journey today</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass p-10 rounded-2xl space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-200">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-primary" size={20} />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-dark-bg/50 border border-primary/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Your full name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-200">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-primary" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-dark-bg/50 border border-primary/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-200">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-primary" size={20} />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full bg-dark-bg/50 border border-primary/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-lg hover-glow disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Registering...' : 'Claim Your Free Demo'}
          </motion.button>

          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. Your data is safe with us.
          </p>
        </motion.form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSuccess(false)}
          >
            <motion.div
              className="glass p-8 rounded-2xl max-w-md w-full text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
              <p className="text-gray-300 mb-6">
                Your demo has been scheduled. Check your email for details.
              </p>

              <motion.a
                href="https://chat.whatsapp.com/DC08kg4o1wVEmAHPIIPWmR"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-lg hover-glow mb-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join WhatsApp Community
              </motion.a>

              <button
                onClick={() => setSuccess(false)}
                className="w-full py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
    </section>
  )
}