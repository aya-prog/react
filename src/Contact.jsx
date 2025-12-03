import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="w-full bg-white py-12 sm:py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Kontakt</h1>

        {sent ? (
          <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-center">
            <p className="font-medium">Vielen Dank! Wir haben deine Nachricht erhalten und werden uns bald bei dir melden.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
              <input 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 transition bg-white text-gray-900" 
                placeholder="Dein Name"
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">E-Mail</label>
              <input 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 transition bg-white text-gray-900" 
                placeholder="deine@email.com"
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Nachricht</label>
              <textarea 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 transition bg-white text-gray-900" 
                placeholder="Deine Nachricht..."
                rows={6} 
                required 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full transition"
            >
              Nachricht senden
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact
