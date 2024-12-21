import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "مريم الهاشمي",
    title: "مصممة ديكور",
    text: "سجاد القصر أضاف لمسة من الفخامة والأناقة لمنزلي. الجودة استثنائية والتصميم يعكس الذوق الرفيع.",
    rating: 5
  },
  {
    name: "سامي العبدالله",
    title: "رجل أعمال",
    text: "استثمار يستحق كل درهم. التصميم الملكي والخامات الفاخرة تجعله قطعة فنية تليق بقصري.",
    rating: 5
  },
  {
    name: "ليلى المنصوري",
    title: "سيدة أعمال",
    text: "تجربة شراء مميزة من البداية للنهاية. السجاد يتجاوز التوقعات من حيث الجودة والجمال.",
    rating: 5
  },
  {
    name: "يوسف الكعبي",
    title: "مهندس معماري",
    text: "كمهندس معماري، أقدر الدقة في التفاصيل والتصميم المتقن. سجاد القصر يجسد الفخامة الحقيقية.",
    rating: 5
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center gap-1 text-gold-500 text-xl mb-4">
      {[...Array(rating)].map((_, i) => (
        <span key={i}>⭐</span>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const settings = {
    dots: true,
    rtl: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true
  };

  return (
    <section className="py-24 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            تجارب عملائنا المميزين
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-500/20 to-royal-700/20 rounded-2xl transform -rotate-1"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20">
                    <div className="text-8xl text-gold-500/20 font-serif absolute top-4 right-4">"</div>
                    <StarRating rating={testimonial.rating} />
                    <p className="text-xl md:text-2xl text-white mb-8 relative z-10">
                      {testimonial.text}
                    </p>
                    <div className="flex flex-col items-center">
                      <h3 className="text-xl font-bold text-gold-400 mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-300">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}