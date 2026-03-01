import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef(null)

  // Animated particle grid
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const count = 80

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let animId
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 135, ${p.alpha})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 255, 135, ${0.05 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#00ff87 1px, transparent 1px), linear-gradient(90deg, #00ff87 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent2/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
            <span className="font-mono text-xs text-muted tracking-widest uppercase">Available for work</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display leading-none mb-2">
              <span className="block text-[clamp(5rem,15vw,14rem)] text-white tracking-wider">
                AKRAM
              </span>
              <span className="block text-[clamp(1rem,2vw,2rem)] text-muted tracking-[0.3em]">
                FULLSTACK & FLUTTER DEVELOPER
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body text-muted text-lg max-w-xl mt-8 leading-relaxed"
          >
            I build scalable web apps with the{' '}
            <span className="text-accent font-medium">MERN stack</span> and
            cross-platform mobile apps with{' '}
            <span className="text-accent font-medium">Flutter & Supabase</span>.
            One dev. Two worlds. Zero compromise.
          </motion.p>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {['MongoDB', 'Express', 'React', 'Node.js', 'Flutter', 'Supabase', 'JavaScript', 'Docker'].map((tech) => (
              <span key={tech} className="font-mono text-xs text-muted border border-border px-3 py-1 hover:border-accent hover:text-accent transition-all duration-300">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 mt-12"
          >
            <button
              onClick={scrollToProjects}
              className="group relative font-mono text-sm bg-accent text-bg px-8 py-4 font-bold hover:bg-accent/90 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-accent2 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 flex items-center justify-center font-mono text-sm text-bg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View My Work
              </span>
            </button>
            <button
              onClick={scrollToContact}
              className="font-mono text-sm border border-text/20 text-text px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-6 flex items-center gap-3"
          >
            <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent animate-pulse" />
            <span className="font-mono text-xs text-muted tracking-widest rotate-90 origin-left translate-y-6">
              SCROLL
            </span>
          </motion.div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-32 right-6 md:right-12 font-mono text-xs text-muted/30 flex flex-col items-end gap-1">
        <span>01 / PORTFOLIO</span>
        <span className="text-accent/30">2026</span>
      </div>
    </section>
  )
}
