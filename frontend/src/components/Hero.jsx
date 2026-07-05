export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-60" />

      <div className="section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-sm font-medium text-primary-700 mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            Odoo Gold Partner
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Enterprise Odoo{' '}
            <span className="gradient-text">Solutions</span>
            <br />
            That Drive Growth
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            From implementation to customization — we deliver end-to-end Odoo ERP, CRM, and
            eCommerce solutions tailored to scale your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 text-white rounded-xl font-semibold text-base hover:bg-primary-700 shadow-lg shadow-primary-200 transition-all"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 border border-gray-300 text-gray-700 rounded-xl font-semibold text-base hover:border-primary-300 hover:text-primary-600 transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
