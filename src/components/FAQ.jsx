import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "كيف أضمن جودة المنتج؟",
    answer: "كل سجادة تأتي مع شهادة ضمان أصالة وجودة معتمدة."
  },
  {
    question: "هل يمكنني استبدالها أو إرجاعها؟",
    answer: "نعم، نوفر ضمان استبدال أو إرجاع خلال 30 يومًا من تاريخ الشراء."
  },
  {
    question: "هل تناسب السجادة الاستخدام اليومي؟",
    answer: "بالتأكيد، تم تصميمها لتحمل الاستخدام اليومي في كافة المساحات."
  },
  {
    question: "هل تأتي مع ضمان؟",
    answer: "نعم، السجادة مشمولة بضمان لمدة عامين على جميع العيوب المصنعية."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-royal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-primary text-center mb-16 text-royal-900">الأسئلة الشائعة</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="w-full text-right bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-royal-800">{faq.question}</span>
                  <span className="text-gold-500 text-xl">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white p-4 rounded-b-lg shadow-md">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}