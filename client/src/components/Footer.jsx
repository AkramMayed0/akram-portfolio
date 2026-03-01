import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-2xl text-white">
          AK<span className="text-accent">.</span>
        </div>

        <p className="font-mono text-xs text-muted text-center">
          Designed & Built by <span className="text-accent">Akram</span> · MERN Stack Developer
        </p>

        <p className="font-mono text-xs text-muted/40">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
