export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-padding py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold"><span className="text-primary-400">X</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enterprise Odoo solutions that drive digital transformation and business growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Odoo Implementation', 'Odoo Customization', 'Odoo Migration', 'Odoo Consulting', 'Support & Maintenance'].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Odoo ERP', 'Odoo CRM', 'Odoo eCommerce', 'Odoo Websites', 'Odoo POS'].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@x-odoo.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Bengaluru, India</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {['linkedin', 'twitter', 'github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <span className="text-xs capitalize text-gray-400">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="section-padding py-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} X. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
