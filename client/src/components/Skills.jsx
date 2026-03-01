import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ]
  },
  {
    category: 'Mobile',
    icon: '◐',
    skills: [
      { name: 'Flutter', level: 90 },
      { name: 'Dart', level: 88 },
      { name: 'Supabase', level: 85 },
      { name: 'Firebase', level: 78 },
    ]
  },
  {
    category: 'Backend',
    icon: '◉',
    skills: [
      { name: 'Node.js', level: 93 },
      { name: 'Express.js', level: 91 },
      { name: 'REST APIs', level: 95 },
    ]
  },
  {
    category: 'Database',
    icon: '◎',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'Mongoose', level: 88 },
      { name: 'SQL', level: 96 },
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: '◇',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Git & GitHub', level: 95 },
      { name: 'Jira', level: 75}
    ]
  },
]

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm text-text group-hover:text-accent transition-colors duration-300">
          {name}
        </span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-px bg-border relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accent2"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 font-mono text-xs text-muted/20 p-6">
        03 / SKILLS
      </div>

      {/* Decorative */}
      <div className="absolute left-0 top-1/2 w-px h-64 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            — What I Work With
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-none">
            MY<br />
            <span className="text-accent">STACK</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1 + 0.2, duration: 0.6 }}
              className="border border-border bg-surface p-8 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-accent text-xl">{group.icon}</span>
                <span className="font-display text-2xl text-white tracking-widest">
                  {group.category.toUpperCase()}
                </span>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    inView={inView}
                    delay={gi * 0.1 + si * 0.08 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra tools row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {['JWT','Stripe', 'Cloudinary', 'Vite', 'Jest', 'Postman', 'GetX', 'Riverpod', 'Bloc', 'App Store', 'Play Store', 'VS Code', 'Linux'].map(tool => (
            <span
              key={tool}
              className="font-mono text-xs text-muted border border-border px-3 py-2 hover:text-accent hover:border-accent transition-all duration-300 cursor-default"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
