import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Program', href: '#program' },
    { label: 'Performance', href: '#performance' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="text-2xl font-bold gradient-text cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              INSIDIOUS BULLS
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/tradewith_shubham7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <Instagram size={20} className="text-primary" />
            </a>
            <motion.a
              href="#demo"
              className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-lg hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Demo
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-primary" size={24} />
            ) : (
              <Menu className="text-primary" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 py-4 border-t border-primary/20">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/tradewith_shubham7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
