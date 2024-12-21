import { motion } from 'framer-motion';

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function PriceSection() {
  return (
    <section className="py-16 bg-royal-50">
  <div className="container mx-auto px-4">
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3, // تسلسل الأنيميشن بين الأطفال
          },
        },
      }}
    >
      <motion.h2
        className="section-title"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        السعر الخاص
      </motion.h2>

      <motion.div
        className="mb-8 space-y-4"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <motion.p
          className="text-3xl text-gray-400 line-through"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          750 درهم
        </motion.p>
        <motion.p
          className="text-5xl font-bold text-royal-800"
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          animate={{
            scale: [1.04, 0.95,1.04],
            transition: {
              duration: 1.3,
              repeat: Infinity, // لجعل الحركة لا نهائية
              ease: "linear",
            },
          }}
        >
          375 درهم فقط!
        </motion.p>
        <motion.p
          className="text-xl text-gold-600"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          وفر 50% لفترة محدودة!
        </motion.p>
      </motion.div>

      <motion.button
        className="btn-primary"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1.04, 0.95,1.04],
          transition: {
            duration: 1,
            repeat: Infinity, // لجعل الحركة لا نهائية
            ease: "linear",
          },
        }}
      >
        اطلبه الآن واحصل على شحن مجاني
      </motion.button>

      <motion.p
        className="mt-6 text-royal-600 font-semibold"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        تبقى أقل من 20 قطعة فقط!
      </motion.p>
    </motion.div>
  </div>
</section>

  );
}