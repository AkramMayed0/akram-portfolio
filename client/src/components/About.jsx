import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '1', label: 'Projects Shipped' },
  { value: '1', label: 'Happy Clients' },
  { value: '∞', label: 'Lines of Code' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Section label */}
      <div className="absolute top-0 right-0 font-mono text-xs text-muted/20 p-6">
        02 / ABOUT
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                — Who I Am
              </p>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-8 leading-none">
                ABOUT<br />
                <span className="text-accent">ME</span>
              </h2>

              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Hey, I'm <span className="text-text font-medium">Akram</span> — a Full Stack & Flutter Developer
                  who ships across every platform. Web, mobile, backend — I own the whole thing.
                </p>
                <p>
                  On the web side, I build with the <span className="text-accent">MERN stack</span> — 
                  clean APIs, real-time features, scalable architecture. On mobile, I craft
                  cross-platform apps with <span className="text-accent">Flutter & Supabase</span> that
                  feel native and perform like it too.
                </p>
                <p>
                  I don't just write code — I ship products. Fast, clean, and built to last.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://github.com/AkramMayed0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted border border-border px-4 py-2 hover:border-accent hover:text-accent transition-all duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/akram-mayed-763845369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted border border-border px-4 py-2 hover:border-accent hover:text-accent transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Stats + Visual */}
          <div className="space-y-6">
            {/* Avatar / Code block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="border border-border bg-surface p-6 font-mono text-sm relative overflow-hidden"
            >
              {/* Editor chrome */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-muted/40 text-xs">akram.js</span>
              </div>
              <div className="space-y-1 text-xs">
                <p><span className="text-purple-400">const</span> <span className="text-accent2">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-accent">name</span>: <span className="text-yellow-300">"Akram"</span>,</p>
                <p className="pl-4"><span className="text-accent">role</span>: <span className="text-yellow-300">"Fullstack & Flutter Developer"</span>,</p>
                <p className="pl-4"><span className="text-accent">webStack</span>: [<span className="text-yellow-300">"MongoDB"</span>, <span className="text-yellow-300">"Express"</span>, <span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"Node.js"</span>],</p>
                <p className="pl-4"><span className="text-accent">mobileStack</span>: [<span className="text-yellow-300">"Flutter"</span>, <span className="text-yellow-300">"Supabase"</span>, <span className="text-yellow-300">"Dart"</span>],</p>
                <p className="pl-4"><span className="text-accent">passion</span>: <span className="text-yellow-300">"Shipping products that matter"</span>,</p>
                <p className="pl-4"><span className="text-accent">available</span>: <span className="text-green-400">true</span>,</p>
                <p>{'}'}</p>
                <p className="mt-3 text-muted">// Web to mobile — I build it all</p>
              </div>

              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,135,0.01) 2px, rgba(0,255,135,0.01) 4px)'
                }}
              />
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="border border-border bg-surface p-5 group hover:border-accent transition-colors duration-300"
                >
                  <div className="font-display text-4xl text-accent group-hover:animate-glow transition-all">
                    {s.value}
                  </div>
                  <div className="font-mono text-xs text-muted mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
