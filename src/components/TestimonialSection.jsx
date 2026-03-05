import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rohit Sharma',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit',
    profit: '+250%',
    capital: '$1000 → $3500',
    review: 'Best trading education I found. The strategies actually work!',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
    profit: '+160%',
    capital: '$2000 → $5200',
    review: 'Shubham breaks down complex concepts beautifully. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Priya Singh',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    profit: '+320%',
    capital: '$1500 → $6300',
    review: 'Finally a course that focuses on real market conditions.',
    rating: 5,
  },
  {
    name: 'Vikram Patel',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
    profit: '+180%',
    capital: '$3000 → $8400',
    review: 'The risk management lessons alone are worth the investment.',
    rating: 5,
  },
  {
    name: 'Deepika Rao',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepika',
    profit: '+220%',
    capital: '$2500 → $8000',
    review: 'Professional quality content at an affordable price. Amazing!',
    rating: 5,
  },
  {
    name: 'Karan Joshi',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan',
    profit: '+290%',
    capital: '$1800 → $7020',
    review: 'The live market sessions are incredibly valuable.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
    profit: '+240%',
    capital: '$2200 → $7480',
    review: 'Finally understand price action. Changed my trading completely.',
    rating: 5,
  },
  {
    name: 'Arjun Singh',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    profit: '+310%',
    capital: '$1200 → $4920',
    review: 'Best decision I made for my trading journey.',
    rating: 5,
  },
]

const TestimonialCard = ({ name, image, profit, capital, review, rating, index }) => {
  return (
    <motion.div
      className="glass p-6 rounded-xl flex-shrink-0 w-80 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-bold text-white">{name}</p>
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={12} className="fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{review}</p>

      <div className="bg-dark-card/50 p-3 rounded-lg">
        <p className="text-xs text-gray-400 mb-1">{capital}</p>
        <p className="text-lg font-bold gradient-text">{profit}</p>
      </div>
    </motion.div>
  )
}

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">Student Success Stories</span>
          </h2>
          <p className="text-gray-400 text-lg">Real results from real traders in our community</p>
        </motion.div>

        {/* Scrolling testimonials */}
        <div className="space-y-8 overflow-hidden">
          {/* Row 1 */}
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
            {testimonials.slice(0, 4).map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} index={idx} />
            ))}
            {testimonials.slice(0, 4).map((testimonial, idx) => (
              <TestimonialCard key={`repeat-${idx}`} {...testimonial} index={idx} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
            {testimonials.slice(4, 8).map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} index={idx} />
            ))}
            {testimonials.slice(4, 8).map((testimonial, idx) => (
              <TestimonialCard key={`repeat-${idx}`} {...testimonial} index={idx} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
    </section>
  )
}
