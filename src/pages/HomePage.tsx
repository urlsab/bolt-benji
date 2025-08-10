import React from 'react';
import Hero from '../components/home/Hero';
// import Services from '../components/home/Services';
// import About from '../components/home/About';
// import Testimonials from '../components/home/Testimonials';
// import BlogPreview from '../components/home/BlogPreview';
import FAQ from '../components/home/FAQ';
import ServicesPage from './ServicesPage';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <ServicesPage/>
      {/* <About /> */}
      {/* <Testimonials /> */}
      {/* <BlogPreview /> */}
      <FAQ />
      <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <h2 className="text-3xl font-bold mb-2 text-gray-800">יש לך שאלות נוספות?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  אשמח לענות על כל שאלה ולעזור לך להחליט האם הטיפול שאני מציע מתאים לצרכים שלך.
                </p>
                <a href="https://api.whatsapp.com/send?phone=+972522226181" className="bg-sky-500 btn-sky-300 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded transition-colors duration-300">
                  צור קשר לתיאום פגישת ייעוץ
                </a>
              </motion.div>
    </>
  );
};

export default HomePage;