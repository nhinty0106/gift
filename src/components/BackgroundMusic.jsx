import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/celebration.mp3"
      />

      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 120 }}
        onClick={toggleMusic}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-4 xs:bottom-6 sm:bottom-8 right-4 xs:right-6 sm:right-8 z-40 w-12 xs:w-14 h-12 xs:h-14 rounded-full shadow-floating transition-all duration-300 flex items-center justify-center btn-interactive group ${
          isPlaying
            ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-glow-lg'
            : 'bg-white text-blue-500 border-2 border-blue-500 hover:border-cyan-400'
        }`}
        title={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      >
        <motion.div animate={{ opacity: isPlaying ? 1 : 0.8 }} className="relative">
          {isPlaying ? (
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 7a1 1 0 100 2v5a1 1 0 11-2 0V7a1 1 0 012-2h2z" />
            </motion.svg>
          ) : (
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
          )}
        </motion.div>

        {/* Ripple effect on play */}
        {isPlaying && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 border-2 border-blue-400 rounded-full"
            />
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="absolute inset-0 border-2 border-cyan-400 rounded-full"
            />
          </>
        )}
      </motion.button>
    </>
  );
}
