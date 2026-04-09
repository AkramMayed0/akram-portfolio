import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Smart Life App',
    subtitle: 'Flutter × Supabase',
    description: 'Cross-platform expense tracker built with Flutter and Supabase. Real-time sync, secure authentication, and a clean, intuitive UI for managing daily finances on iOS & Android.',
    tech: ['Flutter', 'Dart', 'Supabase'],
    github: 'https://github.com/AkramMayed0/smart_life_app',
    live: 'https://smart-life-app-tau.vercel.app/',
    color: '#54c5f8',
    featured: true,
    type: 'mobile',
  },
  {
  id: 2,
  title: 'Nexovia CRM',
  subtitle: 'MERN Stack',
  description: 'Full-stack CRM platform built with the MERN stack. Manage clients, track deals, and streamline your sales pipeline with a clean, responsive interface.',
  tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  github: 'https://github.com/AkramMayed0/crm-project',
  live: 'https://crm-project-eta-beige.vercel.app/',
  color: '#f5a623',
  featured: true,
  type: 'web',
  },
  {
  id: 3,
  title: 'Kira Shop',
  subtitle: 'MERN Stack × Vite',
  description: 'Arabic fashion e-commerce platform — "فن ترتديه" (Art you wear). Built with the MERN stack and Vite for a fast, modern shopping experience with a clean, elegant UI.',
  tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Vite'],
  github: 'https://github.com/AkramMayed0/kira-shop',
  live: 'https://kira-shop.vercel.app/',
  color: '#e8c4a0',
  featured: true,
  type: 'web',
  }
]

function ProjectCard({ project, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group border border-border bg-surface hover:border-accent/40 transition-all duration-500 overflow-hidden card-hover"
    >
      {/* Top accent bar */}
      <div
        className="h-px w-full transition-all duration-500 group-hover:h-0.5"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs" style={{ color: project.color }}>
                {project.featured ? '★ FEATURED' : `PROJECT_0${project.id}`}
              </span>
              {project.type === 'mobile' && (
                <span className="font-mono text-xs border px-2 py-0.5" style={{ borderColor: '#54c5f8', color: '#54c5f8' }}>
                  MOBILE
                </span>
              )}
            </div>
            <h3 className="font-display text-3xl text-white tracking-widest group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-muted mt-1 uppercase tracking-wider">
              {project.subtitle}
            </p>
          </div>

          <div className="flex gap-3 mt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-300"
              title="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-300"
                title="Live Demo"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15,3 21,3 21,9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="font-mono text-xs text-muted/60 border border-border px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const displayed = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 font-mono text-xs text-muted/20 p-6">
        04 / PROJECTS
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              — What I've Built
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-none">
              SELECTED<br />
              <span className="text-accent">WORK</span>
            </h2>
          </div>
          <a
            href="https://github.com/projects?query=is%3Aopen+creator%3A%40me"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-mono text-xs text-muted border border-border px-4 py-2 hover:border-accent hover:text-accent transition-all duration-300"
          >
            All on GitHub →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} inView={inView} />
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="font-mono text-sm text-muted border border-border px-8 py-3 hover:border-accent hover:text-accent transition-all duration-300"
            >
              Show More Projects ({projects.length - 4} more)
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
