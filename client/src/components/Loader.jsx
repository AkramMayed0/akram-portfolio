import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-bg flex flex-col items-center justify-center z-[9999]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#00ff87 1px, transparent 1px), linear-gradient(90deg, #00ff87 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <span className="font-display text-8xl text-white tracking-widest">
            AK
          </span>
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent to-accent2"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accent2"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-xs text-muted tracking-widest uppercase"
        >
          Initializing...
        </motion.p>
      </div>
    </motion.div>
  )
}
