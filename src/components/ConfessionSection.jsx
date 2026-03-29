import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { anniversaryMessages } from '../data/confessions';

export default function ConfessionSection() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <section className="bg-gradient-mesh relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/2 left-0 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 -ml-40"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 -mr-40"
      />

      <div className="relative z-10" style={{ padding: '4rem 1.5rem' }}>

        <div className="flex flex-col items-center justify-center gap-8 mb-10">
          {/* Top arrows and text */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-blue-600"
          >
            ↓ Hãy bấm vào đây ↓
          </motion.div>

          {/* Envelope button */}
          <motion.button
            type="button"
            onClick={() => setIsEnvelopeOpen((prev) => !prev)}
            whileHover={{ scale: 1.08, rotateZ: 3 }}
            whileTap={{ scale: 0.95 }}
            className="relative focus:outline-none"
          >
            <div className="w-56 h-auto">
              <svg viewBox="0 0 220 150" className="w-full h-auto drop-shadow-xl">
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <rect x="10" y="35" width="200" height="90" rx="24" fill="#ffd7dd" stroke="#ff8fa3" strokeWidth="4" />
                <path d="M10 35 L110 90 L210 35" fill="#ffbbca" stroke="#ff8fa3" strokeWidth="4" />
                <path d="M80 70 C80 52 100 50 110 64 C120 50 140 52 140 70 C140 88 110 110 110 110 C110 110 80 88 80 70 Z" fill="#ff375f" />
                <path d="M14 35 L110 95 L206 35" fill="none" stroke="#ff8fa3" strokeWidth="4" />
                <circle cx="110" cy="70" r="5" fill="#fff" opacity="0.5" filter="url(#glow)" />
              </svg>
            </div>
          </motion.button>

          <AnimatePresence>
            {isEnvelopeOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                {/* 5 confessions in alternating left-right layout */}
                <div style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
                  {anniversaryMessages.slice(0, 5).map((msg, idx) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      style={{ display: 'flex', justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end', marginBottom: '2rem' }}
                    >
                      <div className="w-full xs:max-w-md sm:max-w-xl md:w-2/3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-200" style={{ padding: '1.5rem' }}>
                        <p className="text-sm xs:text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                          {msg.message}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
