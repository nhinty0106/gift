import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/messages';

export default function Hero() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={200}
      />

        <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-16 max-w-6xl mx-auto">
        {/* Background glow effect */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-300/20 rounded-full blur-3xl opacity-40 -z-10"
        />

        <motion.h1
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gradient leading-tight text-shadow-lg"
          style={{ marginBottom: '2.5rem' }}
        >
          {siteConfig.title}
        </motion.h1>

        {/* Decorative line below title */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full shadow-glow-md"
          style={{ height: '6px', width: '80%', maxWidth: '500px', marginBottom: '4rem', marginLeft: 'auto', marginRight: 'auto' }}
        />

        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass glass-light px-4 xs:px-6 sm:px-8 py-4 xs:py-6 sm:py-8 rounded-2xl sm:rounded-3xl mb-4 xs:mb-8 sm:mb-12 mx-auto w-fit max-w-2xl"
        style={{ marginTop: 'auto', padding: '15px'}}
        >
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-semibold leading-relaxed">
            {siteConfig.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 120 }}
          className="relative inline-block"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="animate-pulse-glow p-4 sm:p-6 rounded-full"
          >
            <div className="animate-float">
              <p className="text-3xl xs:text-4xl sm:text-5xl drop-shadow-lg">💙</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ marginTop: 'auto', paddingBottom: '2rem', marginTop: '4rem' }}
        >
          <motion.div
            whileHover={{ y: -2 }}
            className="glass glass-light rounded-full inline-block hover-lift"
            style={{ padding: '1rem 2.5rem' }}
          >
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-blue-600 font-semibold p-2" >
              Hãy cuộn cuộn xuống để khám phá nè 😉
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating animated elements */}
      <motion.div
        animate={{ float: [0, 20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 sm:top-20 left-4 sm:left-10 text-2xl sm:text-4xl opacity-40 drop-shadow-lg"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{ float: [0, -20, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 text-2xl sm:text-4xl opacity-40 drop-shadow-lg"
      >
        🎉
      </motion.div>

      {/* Additional floating decorative elements */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 text-xl xs:text-2xl opacity-20"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 0.3 }}
        className="absolute bottom-1/3 left-1/4 text-lg xs:text-xl opacity-25"
      >
        💫
      </motion.div>
    </section>
  );
}
