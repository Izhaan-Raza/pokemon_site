import { motion } from 'framer-motion';

export const GlowBorder = ({ children, color = 'var(--poke-gold)', className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ padding: '4px' }}>
      {/* Animated glow border */}
      <motion.div
        className="absolute inset-0"
        style={{
          border: `4px solid ${color}`,
          boxShadow: `0 0 10px ${color}, inset 0 0 10px ${color}`,
          zIndex: 0,
        }}
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Content wrapper to keep it on top */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
