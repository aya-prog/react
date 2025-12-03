import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />

      <div className="w-full pt-20 pb-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
