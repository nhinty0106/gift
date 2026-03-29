import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GiftSection() {
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  return (
    <section className="bg-gradient-to-b from-purple-100 to-pink-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <div className="relative z-10" style={{ padding: '4rem 1.5rem' }}>

        {/* Gift Box */}
        <div className="flex flex-col items-center justify-center gap-6" style={{ margin: '1.5rem' }}>
          <motion.button
            onClick={() => setIsGiftOpen(true)}
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="relative focus:outline-none group"
          >
            <img 
              src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-yellow-gift-box-vector-illustration-with-flat-design-gift-box-clip-png-image_5280156.jpg" 
              alt="Gift Box" 
              className="w-96 h-96 drop-shadow-2xl object-cover rounded-lg"
            />
          </motion.button>

          <motion.p
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg xs:text-xl font-semibold text-purple-600 text-center"
          >
            ↓ Nhấn vào hộp quà để mở ↓
          </motion.p>
        </div>
      </div>

      {/* Popup Gift Modal */}
      <AnimatePresence>
        {isGiftOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGiftOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            />

            {/* Popup Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
            >
              <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 rounded-3xl p-8 xs:p-10 sm:p-12 shadow-2xl max-w-2xl w-full relative overflow-hidden">
                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, linear: true }}
                  className="absolute top-4 right-4 text-3xl opacity-70"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, linear: true }}
                  className="absolute bottom-4 left-4 text-3xl opacity-70"
                >
                  🎉
                </motion.div>

                {/* Content */}
                <div className="relative z-10" >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/80 backdrop-blur rounded-2xl p-6 xs:p-7 sm:p-8 mb-6"
                    style={{ padding: '0.75rem 1.5rem' }}
                  >
                    <p className="text-center text-sm xs:text-base sm:text-lg text-gray-800 leading-relaxed font-medium mb-4">
                      Cảm ơn bạn đã là một phần quan trọng trong những ngày tháng này. Bạn không chỉ là đồng nghiệp mà còn là người bạn quý báu mà tôi sẽ mãi ghi nhớ. 💝
                    </p>
                    <p className="text-center text-xs xs:text-sm sm:text-base text-purple-700 font-semibold italic">
                      Chúc bạn luôn hạnh phúc và thành công trong cuộc sống! ✨
                    </p>
                  </motion.div>

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsGiftOpen(false)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 transition-all duration-200 shadow-lg"
                    style={{ padding: '0.75rem 1.5rem' }}
                  >
                    Đóng & Cảm Ơn 💕
                  </motion.button>
                </div>

                {/* Confetti animation elements */}
                <motion.div
                  animate={{ y: [0, -400], opacity: [1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-10 text-2xl"
                >
                  🎊
                </motion.div>
                <motion.div
                  animate={{ y: [0, -350], opacity: [1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                  className="absolute right-20 text-2xl"
                >
                  🎈
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
