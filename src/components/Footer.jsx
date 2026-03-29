import { motion } from 'framer-motion';
import { siteConfig } from '../data/messages';

export default function Footer() {
  return (
    <section className="relative bg-gradient-aurora overflow-hidden" style={{ padding: '4rem 1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Enhanced Background decorations */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
      />

      <div className="relative max-w-4xl text-center z-10" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {/* Image Title */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
          style={{ marginBottom: '2rem' }}
        >
          Cm1-11
        </motion.h3>

        {/* Top Thank You Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img 
              src="https://res.cloudinary.com/dkzsva7pc/image/upload/v1774782467/dc5596482ab3bbcb1044defe2334d968_s798k1.jpg" 
              alt="Lời cảm ơn" 
              className="w-64 xs:w-72 sm:w-80 drop-shadow-2xl relative z-10"
              style={{ 
                borderRadius: '40%',
                border: '10px solid white',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.05)',
                aspectRatio: '0.75'
              }}
            />
            {/* Oval frame border with gradient */}
            <svg 
              className="absolute pointer-events-none"
              style={{ 
                position: 'absolute',
                top: '-12px',
                left: '-12px',
                width: 'calc(100% + 24px)',
                height: 'calc(100% + 24px)',
                filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))',
                zIndex: 5
              }}
              viewBox="0 0 320 360" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="ovalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e0e7ff" stopOpacity="1" />
                  <stop offset="50%" stopColor="#f3f4f6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#e0e7ff" stopOpacity="1" />
                </linearGradient>
              </defs>
              {/* Outer oval frame */}
              <ellipse cx="160" cy="180" rx="110" ry="210" fill="none" stroke="url(#ovalGradient)" strokeWidth="8" />
              {/* Inner accent line */}
              <ellipse cx="160" cy="180" rx="104" ry="204" fill="none" stroke="#f3f4f6" strokeWidth="1" opacity="0.6" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateZ: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 100 }}
            style={{ marginBottom: '3rem' }}
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotateZ: [0, -5, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl drop-shadow-lg"
            >
              👋
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-700 text-lg space-y-4 xs:space-y-5 sm:space-y-6"
            style={{ marginBottom: '3rem' }}
          >
            <motion.p
              animate={{ color: ['#374151', '#0284c7', '#06b6d4', '#374151'] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="font-semibold text-shadow-lg"
            >
              Những ngày tươi đẹp sẽ luôn nằm trong ký ức
            </motion.p>
            <motion.p
              className="text-blue-600 font-bold text-xl animate-pulse-glow"
            >
              Hẹn sẽ giữ liên lạc! 🌟
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Enhanced Decorative elements */}
        <div className="flex justify-center gap-4 flex-wrap" style={{ marginTop: '4rem' }}>
          {['💫', '⭐', '✨', '🌟', '💎'].map((emoji, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 10, -10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ delay: i * 0.15, duration: 2.5, repeat: Infinity }}
              className="text-3xl xs:text-4xl drop-shadow-lg"
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
