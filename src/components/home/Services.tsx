import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Brain, Users, BarChart4 } from 'lucide-react';
import { ServiceType } from '../../types';

const services: ServiceType[] = [
  {
    id: 1,
    title: 'טיפול בחרדה',
    description: 'גישה ממוקדת להתמודדות עם חרדה, פחדים ופניקות. טכניקות לשליטה והפחתת חרדה.',
    icon: 'Heart'
  },
  {
    id: 2,
    title: 'טיפול בדיכאון',
    description: 'שיטות טיפול מוכחות לשיפור מצב הרוח, חיזוק המוטיבציה ובניית תקווה.',
    icon: 'Brain'
  },
  {
    id: 3,
    title: 'טיפול זוגי',
    description: 'שיפור התקשורת, פתרון קונפליקטים ובניית יחסים בריאים ומספקים.',
    icon: 'Users'
  },
  {
    id: 4,
    title: 'טיפול CBT',
    description: 'טיפול קוגניטיבי-התנהגותי לשינוי דפוסי חשיבה והתנהגות מגבילים.',
    icon: 'BarChart4'
  }
];

const ServiceIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'Heart':
      return <Heart className="h-10 w-10 text-primary-500" />;
    case 'Brain':
      return <Brain className="h-10 w-10 text-primary-500" />;
    case 'Users':
      return <Users className="h-10 w-10 text-primary-500" />;
    case 'BarChart4':
      return <BarChart4 className="h-10 w-10 text-primary-500" />;
    default:
      return <Heart className="h-10 w-10 text-primary-500" />;
  }
};

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            השירותים שלי
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            מגוון רחב של טיפולים פסיכולוגיים מותאמים לצרכים השונים
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to="/services"
                className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
              >
                קרא עוד
                <span className="mr-1">›</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            כל השירותים
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;