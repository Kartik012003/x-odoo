import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600 hover:text-primary-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Get a Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
