import { motion } from 'framer-motion';

 function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-royal-900 to-royal-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-primary mb-8">سجاد القصر – لأن أناقتك تستحق الأفضل</h2>
          
          <div className="mb-8">
            <p className="text-3xl font-bold mb-2">
              <span className="line-through text-gray-400">750 درهم</span>
            </p>
            <p className="text-4xl font-bold text-gold-400">375 درهم فقط!</p>
            <p className="text-lg mt-2">وفر 50% لفترة محدودة!</p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-500 text-royal-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            اطلب الآن واحصل على شحن مجاني
          </motion.button>
          
          <p className="mt-8 text-gold-300">
            تبقى أقل من 20 قطعة فقط!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;