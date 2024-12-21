import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "تصميم ملكي حصري",
    description: "تصاميم فريدة مستوحاة من القصور الملكية، تجمع بين الأصالة والفخامة",
    icon: "👑",
    gradient: "from-purple-600 to-royal-800"
  },
  {
    title: "حرفية يدوية فائقة",
    description: "صناعة يدوية متقنة من قبل أمهر الحرفيين باستخدام أجود الخامات العالمية",
    icon: "🎨",
    gradient: "from-gold-400 to-gold-600"
  },
  {
    title: "جودة استثنائية",
    description: "خيوط حريرية فاخرة مقاومة للبلى، تضمن متانة تدوم لسنوات طويلة",
    icon: "✨",
    gradient: "from-royal-600 to-royal-900"
  },
  {
    title: "راحة لا مثيل لها",
    description: "نعومة فائقة وملمس مخملي يوفر تجربة مشي لا تُضاهى",
    icon: "🌟",
    gradient: "from-gold-500 to-royal-700"
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      className="py-24 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-900"
      ref={ref}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            لماذا تختار سجاد القصر؟
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-royal-500/20 to-royal-700/20 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative flex flex-col justify-center items-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-gold-400/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-2 text-center">
                <div
                  className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gold-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gold-400 text-xl font-semibold">
            اختيار النخبة لتأثيث القصور والمنازل الفاخرة
          </p>
        </motion.div>
      </div>
    </section>
  );
}
