import { motion } from 'framer-motion';

export const SplitText = ({ text, className = '', delay = 0.05 }) => {
  const letters = text.split('');
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * delay,
            type: 'spring',
            stiffness: 150,
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};
