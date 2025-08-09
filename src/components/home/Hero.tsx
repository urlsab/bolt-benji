import React from 'react';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import klinik from '../../klinik.jpg';

const Hero: React.FC = () => {
  return (
    <div id="about" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <img 
        src={klinik}
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
        style={{ minHeight: '100vh', height: '100%', maxHeight: '100vh' }}
        alt="קליניקה"
      />
      {/* <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `${klinik}`,
          filter: 'brightness(0.7)'
        }}
      /> */}
      
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{
          minHeight: '100vh',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(8,145,178,0.4) 0%, rgba(0,0,0,0.4) 80%)',
        }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-20 text-white">
        <div className="max-w-xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            המסע לנפש בריאה מתחיל כאן
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            אני אור בנג'י, נשוי ואב לשניים. פסיכותרפיסט מוסמך, בוגר תואר ראשון בפסיכולוגיה ופילוסופיה.<br />
            אני מאמין באדם ובכוחות שלו להתרומם מכל משבר. במפגשים ניצור מרחב בטוח ולא שיפוטי בו אפשר לדבר, להרגיש, לשהות במקומות הכואבים ולקבל תקווה לשינוי וצמיחה.<br />
            הטיפול מיועד לכל גיל ומגזר, ומותאם בשיקול ובהקשבה לקצב ולאופן המתאים לכל אחד.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* <Link to="/contact" className="btn-primary rounded-full">
              קביעת פגישת ייעוץ
            </Link> */}
            {/* <Link to="/services" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10 rounded-full">
              שירותים טיפוליים
            </Link> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;