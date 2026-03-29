import { motion } from 'framer-motion';

export default function MemoryCard({ memory, index, isLeft, imageHeight = 280 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full"
    >
      {/* White Card Wrapper */}
      <div className="w-full bg-white rounded-2xl xs:rounded-3xl shadow-floating overflow-hidden group border-2 border-blue-50 hover-lift card-premium h-full flex flex-col">
        
        {/* Image Container - Top */}
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100" style={{ height: `${imageHeight}px` }}>
          <motion.img
            src={memory.photoUrl}
            alt={memory.caption}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08, rotateZ: 1 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
          />
        </div>

        {/* Text Content - Bottom */}
        <div className="p-4 xs:p-5 sm:p-6 bg-gradient-to-br from-white to-blue-50/50 flex-1 flex flex-col justify-between">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 text-center leading-relaxed"
            style={{ marginTop: '15px', marginBottom: '15px' }}
          >
            {memory.caption}
          </motion.h3>

          {/* Decorative animated elements */}
          <motion.div
            animate={{ scaleX: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.15 }}
            className="h-1 bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-300 rounded-full origin-center"
          />
        </div>
      </div>
    </motion.div>
  );
}

