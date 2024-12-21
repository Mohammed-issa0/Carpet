import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const specifications = [
  {
    title: "خامات ملكية فاخرة",
    description: "نسيج فائق الجودة مستورد من أرقى المصانع العالمية",
    icon: "👑"
  },
  {
    title: "تصميم عصري مميز",
    description: "نقوش مستوحاة من الفن الشرقي الأصيل بلمسة عصرية",
    icon: "✨"
  },
  {
    title: "تقنية النانو للحماية",
    description: "طبقة حماية متطورة تمنع البقع وتسهل التنظيف",
    icon: "🛡️"
  },
  {
    title: "ضمان شامل",
    description: "ضمان لمدة عامين ضد جميع العيوب المصنعية",
    icon: "⭐"
  }
];

export default function Specifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-br from-royal-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-primary font-bold text-royal-900 mb-4">
            المواصفات الملكية
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {specifications.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-500 to-royal-700 rounded-full flex items-center justify-center text-2xl">
                  {spec.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-royal-800 border-b border-gold-200 pb-2">
                    {spec.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gold-600 font-semibold text-lg">
            صُنع بعناية فائقة ليدوم مدى الحياة
          </p>
        </motion.div>
      </div>
    </section>
  );
}