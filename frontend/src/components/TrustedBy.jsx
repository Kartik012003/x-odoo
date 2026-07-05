const logos = [
  'Walmart', 'Samsung', 'Toyota', 'Intel', 'Nestle',
  'Accenture', 'Decathlon', 'Huawei', 'Ford', 'Shell',
]

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-gray-100">
      <div className="section-padding">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-10">
          Trusted by Industry Leaders Worldwide
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all"
            >
              <span className="text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
