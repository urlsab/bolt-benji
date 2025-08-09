import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    'התמחות בטיפול קוגניטיבי-התנהגותי (CBT)',
    'גישה אישית ומותאמת לכל מטופל',
    'ניסיון רב בטיפול בחרדה ודיכאון',
    'סביבה בטוחה, תומכת ומקבלת',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="אור בנג'י פסיכותרפיסט"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              קצת עליי
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              שלום, שמי אור בנג'י ואני פסיכותרפיסט מוסמך עם ניסיון של מעל 10 שנים בטיפול במגוון קשיים ואתגרים נפשיים. האמונה שלי היא שכל אדם ראוי לחיות חיים מלאי משמעות, שמחה וסיפוק.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              הגישה הטיפולית שלי משלבת מספר שיטות טיפול מוכחות, מותאמות אישית לצרכים של כל מטופל. אני מאמין בחשיבות של יצירת סביבה בטוחה, מכבדת ונטולת שיפוטיות, המאפשרת למטופלים לחקור את עצמם בחופשיות.
            </motion.p>

            <motion.ul
              className="mb-8 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-primary-500 h-5 w-5 ml-2 mt-1" />
                  <span>{benefit}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/about" className="btn-primary">
                קרא עוד עליי
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;