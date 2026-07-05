import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const baseUrl = import.meta.env.VITE_API_URL || ''
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to send')

      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-gray-600">
            Tell us about your Odoo project and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                placeholder="Tell us about your Odoo project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 bg-primary-600 text-white rounded-xl font-semibold text-base hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-center text-green-600 font-medium">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-600 font-medium">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
