import { useState, useEffect } from 'react'

const stats = [
  { value: 150, suffix: '+', label: 'Odoo Projects Delivered' },
  { value: 50, suffix: '+', label: 'Expert Developers' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Years of Excellence' },
]

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-4xl font-extrabold text-primary-600">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              About X
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Your Trusted Odoo Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              X is a specialized Odoo solutions provider dedicated to helping businesses
              streamline operations, accelerate growth, and achieve digital transformation
              through the power of Odoo ERP.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of certified Odoo experts brings deep experience across implementation,
              customization, integration, and support — ensuring your Odoo ecosystem delivers
              maximum value from day one.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Why Choose X?</h3>
            <ul className="space-y-4">
              {[
                'Certified Odoo Gold Partner',
                '100+ successful implementations',
                'Dedicated project managers',
                'Post-deployment support & training',
                'Agile development methodology',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm font-medium text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
