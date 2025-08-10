import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQType } from '../../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs: FAQType[] = [
  {
    id: 1,
    question: ' כמה זמן נמשך טיפול?',
    answer: 'מספר הטיפולים נקבע לפי הקצב הנכון לכל אדם ובשיח ושותפות איתו'
  },
  {
    id: 2,
    question: 'באילו שיטות טיפול אתה משתמש?',
    answer: 'אני משתמש במגוון שיטות טיפול מבוססות מחקר, הכוללות טיפול קוגניטיבי-התנהגותי (CBT), טיפול דינמי, טיפול בפוסט טראומה (EMDR), מיינדפולנס, ועוד. הגישה שלי משלבת מספר שיטות בהתאמה אישית לצרכי המטופל, כדי להשיג את התוצאות הטובות ביותר.'
  },
  {
    id: 3,
    question: 'האם הטיפול מתקיים בקליניקה או באופן מקוון?',
    answer: 'אני מציע טיפול הן בקליניקה בירושלים והן באופן מקוון, בהתאם להעדפות המטופל. הטיפול המקוון מתקיים דרך פלטפורמה מאובטחת השומרת על פרטיות המטופל. שני הפורמטים יעילים, והבחירה תלויה בנוחות האישית של המטופל ובסגנון החיים.'
  },
  {
    id: 4,
    question: 'האם הטיפול מכוסה על ידי ביטוח בריאות?',
    answer: 'כרגע אין הסדר עם קופות החולים אבל ייתכן בהמשך'
  },
  {
    id: 5,
    question: 'מה קורה בפגישה הראשונה?',
    answer: 'הפגישה הראשונה היא פגישת היכרות והערכה. במהלכה אשאל שאלות כדי להבין טוב יותר את הקשיים והצרכים של המטופל, ונדון במטרות הטיפול. זו גם הזדמנות שלי להכיר את המטופל, להקשיב ולשאול שאלות ולהתרשם מהגישה הטיפולית שלי. בסוף הפגישה נוכל לדון יחד בתוכנית הטיפול המתאימה ביותר עבור המטופל.'
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            שאלות נפוצות
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            תשובות לשאלות הנפוצות ביותר לגבי טיפול
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center p-5 bg-white text-right"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              <div
                className={`bg-white overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 p-5 pt-0' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;