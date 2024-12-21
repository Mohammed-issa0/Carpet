import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <style jsx global>{`
        @keyframes slow-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-slow-spin {
          animation: slow-spin 30s linear infinite;
        }
      `}</style>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-royal-900 to-royal-700 text-white">
        {/* الخلفية الهندسية المتحركة */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                radial-gradient(circle, rgba(255, 255, 255, 0.1) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
              backgroundPosition: "30px 30px",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 75%, transparent 75%, transparent)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div
            className="absolute inset-0 animate-slow-spin"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
              backgroundPosition: "40px 40px",
            }}
          ></div>
        </div>

        {/* المحتوى */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.4, // التأخير بين العناصر
                },
              },
            }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* عنوان */}
            <motion.h1
              className="font-primary text-6xl mb-6 font-bold"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              سجاد القصر
            </motion.h1>

            {/* الوصف */}
            <motion.p
              className="text-xl mb-8"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              هل ترغب في تعزيز جمالية منزلك بأسلوب فاخر؟
            </motion.p>

            <motion.p
              className="text-lg mb-12"
              variants={{
                hidden: { opacity: 0, x: 10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              اكتشف سجاد القصر، الخيار المثالي الذي يجمع بين الأناقة والراحة.
            </motion.p>

            {/* الزر */}
            <motion.button
              animate={{
                scale: [1.04, 0.95, 1.04],
                transition: {
                  duration: 1,
                  repeat: Infinity, // لجعل الحركة لا نهائية
                  ease: "linear",
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-royal-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              اطلبه الآن
            </motion.button>

            {/* النص الأخير */}
            <motion.div
              className="mt-8 text-gold-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-sm">تبقى 30 قطعة فقط من أصل 200!</p>
            </motion.div>
          </motion.div>
        </div>

        {/* تدرج سفلي */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </div>
    </>
  );
}
