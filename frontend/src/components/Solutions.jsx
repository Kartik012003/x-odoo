const solutions = [
  {
    title: 'Odoo ERP',
    description: 'Full-suite ERP with accounting, inventory, manufacturing, HR, and project management modules.',
    modules: ['Accounting', 'Inventory', 'Manufacturing', 'HR', 'Projects', 'Purchases'],
  },
  {
    title: 'Odoo CRM',
    description: 'Customer relationship management with lead tracking, pipeline management, and sales automation.',
    modules: ['Lead Management', 'Pipeline', 'Email Marketing', 'Analytics', 'Sales Forecasting'],
  },
  {
    title: 'Odoo eCommerce',
    description: 'Build and scale your online store with Odoo\'s native eCommerce engine and multi-channel selling.',
    modules: ['Online Store', 'Multi-Channel', 'Payment Gateway', 'Shipping', 'Product Management'],
  },
  {
    title: 'Odoo Websites',
    description: 'Create stunning websites, blogs, e-learning portals, and booking systems with Odoo CMS.',
    modules: ['Website Builder', 'Blog', 'eLearning', 'Appointments', 'Live Chat'],
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Odoo Solutions for Every Business Need
          </h2>
          <p className="text-lg text-gray-600">
            Leverage the full power of Odoo with our specialized solutions across all major
            business domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-primary-100 transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <div className="flex flex-wrap gap-2">
                {solution.modules.map((mod) => (
                  <span
                    key={mod}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
