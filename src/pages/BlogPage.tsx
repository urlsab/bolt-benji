import React from 'react';
import { motion } from 'framer-motion';
import { BlogPostType } from '../types';

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: 'חמש דרכים להתמודדות עם חרדה בחיי היומיום',
    excerpt: 'מדריך מעשי עם טכניקות פשוטות שיעזרו לכם להפחית חרדה ולהרגיש יותר נינוחים. למדו כיצד נשימות עמוקות, מיינדפולנס, פעילות גופנית, הגבלת צריכת קפאין ושינה טובה יכולים לשנות את ההתמודדות שלכם עם חרדה.',
    date: '15 במאי, 2025',
    slug: 'five-ways-to-cope-with-anxiety'
  },
  {
    id: 2,
    title: 'איך לזהות סימני דיכאון אצל בני נוער',
    excerpt: 'זיהוי מוקדם של דיכאון אצל מתבגרים יכול להיות קריטי. למדו להבחין בין מצבי רוח נורמטיביים בגיל ההתבגרות לבין סימני אזהרה לדיכאון, כגון שינויים קיצוניים במצב הרוח, התבודדות חברתית, ירידה בתפקוד, ושינויים בהרגלי שינה ואכילה.',
    date: '3 באפריל, 2025',
    slug: 'identifying-depression-in-teenagers'
  },
  {
    id: 3,
    title: 'בניית גבולות בריאים במערכות יחסים',
    excerpt: 'גבולות בריאים הם הבסיס למערכות יחסים מספקות. מאמר זה מסביר מהם גבולות רגשיים, פיזיים ודיגיטליים, למה הם חשובים, וכיצד להציב אותם באופן אפקטיבי תוך שמירה על כבוד הדדי. כולל דוגמאות מעשיות לתקשורת אסרטיבית.',
    date: '27 במרץ, 2025',
    slug: 'healthy-boundaries-in-relationships'
  },
  {
    id: 4,
    title: 'הקשר בין שינה ובריאות נפשית',
    excerpt: 'שינה איכותית היא מרכיב קריטי בבריאות הנפשית. גלו כיצד מחסור בשינה משפיע על המצב הרגשי והקוגניטיבי, וכיצד בעיות נפשיות משפיעות על השינה. המאמר כולל טיפים להיגיינת שינה טובה ומתי כדאי לפנות לעזרה מקצועית.',
    date: '15 במרץ, 2025',
    slug: 'sleep-and-mental-health'
  },
  {
    id: 5,
    title: 'טכניקות מיינדפולנס להפחתת מתח וחרדה',
    excerpt: 'מיינדפולנס הוא כלי יעיל להפחתת לחץ וחרדה. במאמר זה תמצאו הסבר פשוט על מהו מיינדפולנס, יתרונותיו הפסיכולוגיים המגובים במחקר, וחמישה תרגילים פשוטים שתוכלו לשלב בשגרה היומית שלכם.',
    date: '28 בפברואר, 2025',
    slug: 'mindfulness-techniques-for-anxiety'
  },
  {
    id: 6,
    title: 'התמודדות בריאה עם כעס',
    excerpt: 'כעס הוא רגש אנושי לגיטימי, אך חשוב לדעת לבטא אותו באופן בריא. המאמר מתייחס לסיבות שמעוררות כעס, לזיהוי סימני אזהרה מוקדמים, ולאסטרטגיות לניהול כעס באופן אפקטיבי ובלתי פוגעני, כולל טכניקות הרגעה ודרכי תקשורת אסרטיבית.',
    date: '10 בפברואר, 2025',
    slug: 'healthy-anger-management'
  },
  {
    id: 7,
    title: 'התמודדות עם אובדן ותהליך האבל',
    excerpt: 'תהליך האבל הוא מסע אישי ומורכב. מאמר זה מתאר את השלבים השונים של אבל, מדגיש שאין דרך "נכונה" להתאבל, ומציע אסטרטגיות להתמודדות בריאה עם אובדן, כולל תמיכה חברתית, ביטוי רגשות, וכלים לניווט בחיים לאחר אובדן משמעותי.',
    date: '5 בינואר, 2025',
    slug: 'coping-with-loss-and-grief'
  },
  {
    id: 8,
    title: 'השפעת הרשתות החברתיות על בריאות נפשית',
    excerpt: 'הרשתות החברתיות הפכו לחלק בלתי נפרד מחיינו, אך מהי השפעתן על מצבנו הנפשי? המאמר סוקר מחקרים עדכניים על הקשר בין שימוש ברשתות חברתיות לבין דימוי גוף, חרדה חברתית ודיכאון, ומציע גישה מאוזנת לשימוש בריא במדיה חברתית.',
    date: '20 בדצמבר, 2024',
    slug: 'social-media-and-mental-health'
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">הבלוג</h1> */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מאמרים, טיפים ותובנות בנושאי בריאות נפשית, יחסים ואיכות חיים
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src={`https://images.pexels.com/photos/${1000 + post.id}/pexels-photo-${1000 + post.id}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt={post.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500 mb-2 block">{post.date}</span>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-sky-700 font-medium hover:text-sky-800 inline-flex items-center"
                >
                  קרא עוד
                  <span className="mr-1">›</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">מעוניינים לקבל עדכונים על מאמרים חדשים?</h2>
          <a href="/contact" className="btn-primary">
            צרו קשר להצטרפות לרשימת התפוצה
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;