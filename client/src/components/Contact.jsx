import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all required fields')
      return
    }
    setLoading(true)
    try {
      await axios.post('/api/contact', form)
      toast.success('Message sent! I\'ll get back to you soon.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      toast.error('Something went wrong. Try emailing me directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = `w-full bg-transparent border border-border px-4 py-3 font-mono text-sm text-text placeholder-muted/40
    focus:outline-none focus:border-accent transition-colors duration-300`

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 font-mono text-xs text-muted/20 p-6">
        05 / CONTACT
      </div>

      {/* Glows */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            — Let's Build Together
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-none">
            GET IN<br />
            <span className="text-accent">TOUCH</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-muted leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              my inbox is always open. I typically respond within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Email', value: 'akram@dev.io', icon: '✉' },
                { label: 'Location', value: 'Available Worldwide / Remote', icon: '◎' },
                { label: 'Status', value: 'Open to Opportunities', icon: '●', accent: true },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 border border-border bg-surface px-5 py-4">
                  <span className={`text-lg ${item.accent ? 'text-accent' : 'text-muted'}`}>
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-mono text-xs text-muted/50 uppercase tracking-wider">{item.label}</div>
                    <div className={`font-mono text-sm mt-0.5 ${item.accent ? 'text-accent' : 'text-text'}`}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { name: 'GitHub', url: 'https://github.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' },
                { name: 'Twitter', url: 'https://twitter.com' },
              ].map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted border border-border px-3 py-2 hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-muted/60 uppercase tracking-wider block mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted/60 uppercase tracking-wider block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-muted/60 uppercase tracking-wider block mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Collaboration"
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-mono text-xs text-muted/60 uppercase tracking-wider block mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full font-mono text-sm bg-accent text-bg py-4 font-bold hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                    <path d="M12 2a10 10 0 0 1 10 10" />
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message →'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
