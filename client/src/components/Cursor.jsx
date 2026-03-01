import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setTimeout(() => setTrail({ x: e.clientX, y: e.clientY }), 80)
    }
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      if (el.closest('a, button, [data-cursor-hover]')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <>
      {/* Trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{ x: trail.x - 20, y: trail.y - 20 }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
        style={{
          width: 40, height: 40,
          borderRadius: '50%',
          border: `1px solid rgba(0, 255, 135, ${hovering ? 0.5 : 0.2})`,
          transform: `scale(${hovering ? 1.5 : 1})`,
          transition: 'transform 0.2s, border-color 0.2s'
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
        style={{
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#00ff87',
          transform: `scale(${clicking ? 0.5 : 1})`,
          transition: 'transform 0.1s'
        }}
      />
    </>
  )
}
