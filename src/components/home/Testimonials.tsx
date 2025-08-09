import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialType } from '../../types';
import { Star } from 'lucide-react';

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'דניאל כהן',
    testimonial: 'הטיפול עם בנג׳י שינה את חיי לחלוטין. הגעתי אליו במצב של חרדה כרונית, והוא עזר לי לבנות כלים אמיתיים להתמודדות. היום אני מרגיש בשליטה על חיי.',
    rating: 5
  },
  {
    id: 2,
    name: 'מיכל לוי',
    testimonial: 'בנג׳י הוא מטפל מקצועי, אמפתי וקשוב. אחרי שנים של התמודדות עם דיכאון, סוף סוף מצאתי מישהו שבאמת מבין אותי ומסייע לי. ממליצה בחום.',
    rating: 5
  },
  {
    id: 3,
    name: 'אלון פרץ',
    testimonial: 'הגישה האישית והמותאמת של בנג׳י עזרה לי ולבת זוגי לשפר את התקשורת בינינו ולבנות יחסים בריאים יותר. הוא פשוט יודע לשאול את השאלות הנכונות.',
    rating: 5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            המטופלים מספרים
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            קראו מה אומרים מטופלים שכבר חוו את הטיפול
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
              <div className="font-medium text-gray-800">{testimonial.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;