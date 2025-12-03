import React from 'react'

function About() {
  return (
    <div className="w-full bg-white py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Über uns</h1>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            Wir sind ein modernes Versicherungsunternehmen, das sich auf die Bedürfnisse heutiger Kunden konzentriert. Mit transparenten Preisen und flexiblen Lösungen machen wir Versicherungen unkompliziert.
          </p>
          <p>
            Unser Ziel ist es, dir Schutz zu bieten, dem du vertraust. Jede Police ist maßgeschneidert und verständlich gestaltet – keine versteckten Klauseln, keine Überraschungen.
          </p>
          <p>
            Seit unserer Gründung haben wir Tausenden von Kunden dabei geholfen, die richtige Versicherung zu finden. Dein Vertrauen ist unsere Grundlage.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
