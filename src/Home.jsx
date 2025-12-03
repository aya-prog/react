import React from 'react'
import hero from './assets/pngtree-protecting-your-home-real-estate-insurance-and-security-image_18303381 copy.webp'

function Home() {
  const recommendations = [
    {
      id: 1,
      title: 'Haftpflichtversicherung',
      description: 'Schutz vor Schadensersatzansprüchen für Personen-, Sach- und Vermögensschäden.',
      icon: '🛡️'
    },
    {
      id: 2,
      title: 'Auslandskrankenversicherung',
      description: 'Umfassender Schutz für deine Gesundheit und medizinische Versorgung.',
      icon: '⚕️'
    },
    {
      id: 3,
      title: 'Wohngebäudeversicherung',
      description: 'Versicherung deines Hauses gegen Feuer, Sturm und weitere Risiken.',
      icon: '🏠'
    }
  ]

  return (
    <main className="w-full bg-white">
      {/* Hero: Image right, Text left (Option A) */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text column */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Einfach. Modern. Sicher. Flexibel
              </h1>
              <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl">
                Maßgeschneiderte Versicherungen mit transparenter Beratung — schnell berechnet und einfach abgeschlossen.
              </p>

              <div className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap">
                <a href="#recommendations" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full shadow hover:bg-gray-800 transition font-medium">Jetzt entdecken</a>
                <button className="inline-block border border-gray-300 text-gray-800 px-5 py-3 rounded-full hover:shadow transition">Mehr erfahren</button>
              </div>
            </div>

            {/* Image column */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <img src={hero} alt="Hero" className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="w-full bg-gray-50 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Empfehlungen für Sie</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Finde die perfekte Versicherungslösung für deine Bedürfnisse</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="text-5xl mb-6">{item.icon}</div>

                <div className="flex flex-col grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-base text-gray-600 mb-8 grow leading-relaxed">{item.description}</p>
                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full transition">Jetzt berechnen</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
