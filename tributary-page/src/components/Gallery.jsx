import { motion } from 'framer-motion';
import MemoryCard from './PhotoCard';
import ConfessionSection from './ConfessionSection';
import GiftSection from './GiftSection';
import { memories } from '../data/messages';

export default function Gallery() {
  return (
    <>
      {/* Memories Section */}
      <section className="bg-gradient-flowing relative overflow-hidden">
        {/* Decorative background elements */}
        <motion.div
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-0 right-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-32"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-32"
        />

        <div className="relative z-10" style={{ padding: '4rem 1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
            style={{ marginBottom: '5rem', marginTop: '2rem' }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 text-glow"
              style={{ marginBottom: '1.5rem' }}
            >
              Những Kỷ Niệm Của Chúng Ta 
            </h2>
          </motion.div>

          {/* Row 1: 2 photos with text */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
            {memories.slice(0, 2).map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MemoryCard memory={memory} index={index} isLeft={false} imageHeight={500} />
              </motion.div>
            ))}
          </div>

          {/* Row 2: 3 vertical photos with text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ gap: '2rem', marginBottom: '3rem' }}>
            {memories.slice(2, 5).map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MemoryCard memory={memory} index={index + 2} isLeft={false} imageHeight={600} />
              </motion.div>
            ))}
          </div>

          {/* Rows 3,4: 3 photos each with text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ gap: '2rem', marginBottom: '3rem' }}>
            {memories.slice(5, 11).map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              >
                <MemoryCard memory={memory} index={index + 5} isLeft={false} />
              </motion.div>
            ))}
          </div>

          {/* Row 6: 3 more vertical photos with text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ gap: '2rem', marginBottom: '3rem' }}>
            {memories.slice(11, 14).map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MemoryCard memory={memory} index={index + 11} isLeft={false} imageHeight={600} />
              </motion.div>
            ))}
          </div>

          {/* Remaining photos: Masonry gallery, no text */}
          {memories.length > 14 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
                style={{ margin: '4rem 0 3rem' }}
              >
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 text-glow">
                  Và Còn Nhiều Hơn Thế... ✨
                </h3>
              </motion.div>
              <div style={{ columns: '3 250px', columnGap: '1rem' }}>
                {memories.slice(14).map((memory, index) => {
                  const heights = [220, 300, 260, 340, 240, 280, 320, 250, 290];
                  const h = heights[index % heights.length];
                  return (
                    <motion.div
                      key={memory.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                      style={{ marginBottom: '1rem', breakInside: 'avoid' }}
                    >
                      <div className="relative overflow-hidden rounded-2xl group shadow-floating hover-lift card-premium">
                        <motion.img
                          src={memory.photoUrl}
                          alt={memory.caption}
                          className="w-full object-cover"
                          style={{ height: 'auto' }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
                        />
                        {/* Hover overlay with caption */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end" style={{ padding: '1rem' }}>
                          <p className="text-white font-semibold text-sm drop-shadow-lg">
                            {memory.caption}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <ConfessionSection />
      <GiftSection />
    </>
  );
}
