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
          className="text-2xl xs:text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-wider mb-6"
          style={{ marginBottom: '2rem' }}
        >
          CM1-11
        </motion.h3>

        {/* Top Thank You Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}
        >
          <div
            className="relative inline-block transition-transform duration-500 hover:scale-105"
            style={{ filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.15))' }}
          >
            <div
              style={{
                backgroundColor: 'white',
                padding: '12px',
                clipPath: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 60px 100%, 0 calc(100% - 60px))'
              }}
              className="relative z-10"
            >
              <img
                src="https://res.cloudinary.com/dkzsva7pc/image/upload/v1774782467/dc5596482ab3bbcb1044defe2334d968_s798k1.jpg"
                alt="Lời cảm ơn"
                className="w-64 xs:w-72 sm:w-80 object-cover block"
                style={{
                  aspectRatio: '0.75',
                  clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 50px 100%, 0 calc(100% - 50px))'
                }}
              />
            </div>
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
            className="text-gray-800 space-y-8 xs:space-y-10 sm:space-y-12"
            style={{ marginBottom: '3rem' }}
          >
            <motion.p
              animate={{ color: ['#1f2937', '#2563eb', '#1e40af', '#1f2937'] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="font-extrabold text-shadow-md text-xl sm:text-2xl md:text-3xl mb-4"
            >
              Những ngày vừa là đồng nghiệp vừa là chị cùng phòng với tụi em thật sự rất vui và đáng nhớ.
            </motion.p>
            <motion.p
              className="text-blue-700 font-black text-2xl sm:text-3xl md:text-4xl drop-shadow-md"
            >
              Chúc chị mọi thứ sắp tới thật thuận lợi và suôn sẻ 🤍 🌟
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
