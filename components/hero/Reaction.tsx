import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';

const REACTION_LENGTH_MS = 3000;

const REACTIONS = ['👍', '😍', '✨', '😎'];

const Reaction: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentReaction, setCurrentReaction] = useState('👍');

  const playAnimation = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setTimeout(() => {
        setCurrentReaction(
          (r) => REACTIONS[(REACTIONS.indexOf(r) + 1) % REACTIONS.length]
        );
        setIsPlaying(false);
      }, REACTION_LENGTH_MS);
    }
  };

  return (
    <>
      <div
        className="absolute inset-0 rounded-full cursor-pointer"
        onMouseEnter={playAnimation}
        onPointerDown={playAnimation}
      >
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              className="absolute z-30 scale-50 -top-6 -right-4 lg:-top-3 lg:-right-2 text-display-lg"
              initial={{ scale: 0, rotate: -60 }}
              animate={{ scale: 1, rotate: 5.52 }}
              exit={{ scale: 0, rotate: 5.52 }}
              transition={{ duration: 0.15 }}
            >
              {currentReaction}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isPlaying && (
        <div className="absolute inset-x-0 bottom-0 z-30 rounded-b-full pointer-events-none -top-1/2 overflow-clip">
          {[
            { leftPercent: 5, delay: 0 },
            { leftPercent: 45, delay: 1 },
            { leftPercent: 35, delay: 0.4 },
            { leftPercent: 25, delay: 0.2 },
            { leftPercent: 50, delay: 0.8 },
            { leftPercent: 60, delay: 0.5 },
            { leftPercent: 70, delay: 0.1 },
            { leftPercent: 75, delay: 0.6 },
          ].map(({ leftPercent, delay }, index) => (
            <motion.div
              key={index}
              className="absolute top-0 w-20 h-full"
              style={{ left: `${leftPercent}%` }}
              animate="bubbling"
              variants={{
                bubbling: {
                  x: ['-10%', '10%'],
                  transition: {
                    duration: 0.6,
                    repeat: 2,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: Math.random() * 0.4,
                  },
                },
              }}
            >
              <div className="relative w-full h-full">
                <motion.div
                  className="absolute left-0 w-10 h-10 opacity-0 text-display-sm top-full"
                  animate="bubbling"
                  variants={{
                    bubbling: {
                      top: ['100%', '75%', '50%', '25%', '0%'],
                      opacity: [1, 1, 1, 0.5, 0],
                      transition: {
                        duration: 1.7,
                        ease: 'linear',
                        delay,
                      },
                    },
                  }}
                >
                  {currentReaction}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default Reaction;
