import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import { Toaster } from 'react-hot-toast'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="bg-bg min-h-screen">
      <Cursor />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0f0f0f',
            color: '#e8e8e8',
            border: '1px solid #1a1a1a',
            fontFamily: 'DM Sans',
          },
          success: { iconTheme: { primary: '#00ff87', secondary: '#080808' } },
          error: { iconTheme: { primary: '#ff4d4d', secondary: '#080808' } },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
