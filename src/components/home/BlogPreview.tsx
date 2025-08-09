import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlogPostType } from '../../types';

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: 'חמש דרכים להתמודדות עם חרדה בחיי היומיום',
    excerpt: 'מדריך מעשי עם טכניקות פשוטות שיעזרו לכם להפחית חרדה ולהרגיש יותר נינוחים.',
    date: '15 במאי, 2025',
    slug: 'five-ways-to-cope-with-anxiety'
  },
  {
    id: 2,
    title: 'איך לזהות סימני דיכאון אצל בני נוער',
    excerpt: 'זיהוי מוקדם של דיכאון אצל מתבגרים יכול להיות קריטי. למדו לזהות את הסימנים המרכזיים.',
    date: '3 באפריל, 2025',
    slug: 'identifying-depression-in-teenagers'
  },
  {
    id: 3,
    title: 'בניית גבולות בריאים במערכות יחסים',
    excerpt: 'גבולות בריאים הם הבסיס למערכות יחסים מספקות. קראו איך לבנות אותם באופן אפקטיבי.',
    date: '27 במרץ, 2025',
    slug: 'healthy-boundaries-in-relationships'
  }
];

const BlogPreview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            בלוג
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            טיפים, תובנות ומאמרים בנושאי בריאות נפשית
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src={`https://images.pexels.com/photos/${2000 + post.id}/pexels-photo-${2000 + post.id}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt={post.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500 mb-2 block">{post.date}</span>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  קרא עוד
                  <span className="mr-1">›</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-primary">
            לכל המאמרים
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;