const testimonials = [
  {
    quote: "X transformed our business operations with Odoo. The implementation was seamless and the team was incredibly responsive to our customization needs.",
    author: "Rajesh Mehta",
    role: "CEO, TechNova Industries",
  },
  {
    quote: "We migrated from SAP to Odoo with X's guidance. The ROI was evident within 3 months. Highly recommend their Odoo expertise.",
    author: "Priya Sharma",
    role: "CTO, GreenLeaf Enterprises",
  },
  {
    quote: "Their Odoo consulting and custom development saved us 40% in operational costs. The team truly understands business processes.",
    author: "Arun Patel",
    role: "Operations Director, MetroSupply Co.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900">{t.author}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
