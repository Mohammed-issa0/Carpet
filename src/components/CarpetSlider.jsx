import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from '../../public/p1.jpg';
import p2 from '../../public/p2.jpg';
import p3 from '../../public/p3.png';
import p4 from '../../public/p4.jpg';
import p5 from '../../public/p5.jpg';
import p6 from '../../public/p6.png';
import p7 from '../../public/p7.png';

const carpetTypes = [
  {
    title: "سجاد فاخر من الحرير",
    image: p1, // استخدام الصورة بشكل صحيح
    description: "سجاد مصنوع من خيوط الحرير الفاخر لراحة ومتانة لا مثيل لها.",
  },
  {
    title: "سجاد تقليدي",
    image: p2, // استخدام الصورة بشكل صحيح
    description: "سجاد تقليدي مستوحى من التصميمات العربية الأصيلة.",
  },
  {
    title: "سجاد حديث فاخر",
    image: p3, // استخدام الصورة بشكل صحيح
    description: "سجاد بتصاميم حديثة تجمع بين الفخامة والعصرية.",
  },
  {
    title: "سجاد خاص بالمجالس",
    image: p4, // استخدام الصورة بشكل صحيح
    description: "سجاد فاخر مصمم خصيصاً للصالونات والمجالس العربية.",
  },
  {
    title: "سجاد فاخر آخر",
    image: p5, // استخدام الصورة بشكل صحيح
    description: "سجاد فاخر وراقي يتناسب مع جميع الأذواق.",
  },
  {
    title: "سجاد مميز للصالات",
    image: p6, // استخدام الصورة بشكل صحيح
    description: "سجاد مميز وجذاب للصالات والمجالس.",
  },
  {
    title: "سجاد ذو ألوان دافئة",
    image: p7, // استخدام الصورة بشكل صحيح
    description: "سجاد ذو ألوان دافئة تضيف لمسة جمالية للمنزل.",
  },
];

const CarpetSlider = () => {
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
            أنواع السجاد العربي الفاخر
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {carpetTypes.map((carpet, index) => (
              <div key={index} className="relative">
                <div
                  className="bg-contain bg-center h-96 rounded-lg"
                  style={{ backgroundImage: `url(${carpet.image})` }}
                >
                  <div className="absolute inset-0 bg-royal-600 opacity-60 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <h3 className="text-3xl font-bold mb-4">{carpet.title}</h3>
                      <p className="text-lg mb-4">{carpet.description}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CarpetSlider;
