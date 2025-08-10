import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Brain, Users, HelpingHand,
  HeartHandshake, Clock, UserPlus,
  Eye, Shield
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'טיפול בדיכאון ובחרדה',
      description: 'טיפול השואף לפתוח דרך לחיים שקטים ובהירים יותר. בעבודה משותפת ובאמצעות כלים מותאמים, אפשר להפחית את העומס הנפשי, לחזק כוחות פנימיים ולחזור לתפקוד ולתחושת חיוּת.',
      icon: <Heart className="h-14 w-14 text-sky-500" />
    },
    {
      id: 2,
      title: 'טיפול CBT',
      description: 'טיפול קוגניטיבי-התנהגותי הוא טיפול ממוקד ויעיל שמתמקד בקשר בין מחשבות, רגשות והתנהגויות. בעזרת כלים פרקטיים ואסטרטגיות ברורות, ניתן לזהות דפוסים שמפריעים לחיים, לשנותם ולחזק את תחושת השליטה והרווחה הנפשית.',
      icon: <Brain className="h-14 w-14 text-sky-500" />
    },
    {
      id: 3,
      title: 'טיפול בעיבוד טראומות בשיטת EMDR',
      description: 'זהו טיפול עוצמתי המיועד לעיבוד חוויות טראומטיות, תוך הפעלת מנגנוני ריפוי טבעיים של המוח. דרך תנועות עיניים ממוקדות, מתרחש שינוי עמוק באופן שבו הזיכרון הטראומטי נשמר ומפנה מקום להקלה ושחרור.',
      icon: <Eye className="h-14 w-14 text-sky-500" />
    },
    {
      id: 4,
      title: 'טיפול בפגיעות מיניות',
      description: 'פגיעה מינית עלולה להשפיע על תחושת הביטחון, הערך העצמי והקשרים עם אחרים. בטיפול נבנה מרחב בטוח ומכיל, שבו אפשר לעבד את החוויה בקצב אישי, לחזור לתחושת שליטה, לזהות כוחות פנימיים, וליצור מחדש חיבור לעצמי ולגוף.',
      icon: <Shield className="h-14 w-14 text-sky-500" />
    },
    {
      id: 5,
      title: 'טיפול בפוסט טראומה (PTSD)',
      description: 'פוסט טראומה עשויה להתבטא בחוסר שקט, פלאשבקים, סיוטים או תחושת נתק. באמצעות כלים טיפוליים עדכניים, ניתן לעבד את האירועים הקשים, לארגן אותם מחדש בנפש ולחזור לתפקוד וחיים מלאים.',
      icon: <HelpingHand className="h-14 w-14 text-sky-500" />
    },
    {
      id: 6,
      title: 'טיפול אישי, זוגי ומשפחתי',
      description: 'בין אם מדובר במשבר זוגי, קושי אישי או אתגר משפחתי, טיפול מערכתי מאפשר ליצור דיאלוג מחודש, לזהות דפוסים מעכבים ולבנות מרחב של הבנה, הקשבה וקרבה אמיתית.',
      icon: <Users className="h-14 w-14 text-sky-500" />
    },
    {
      id: 7,
      title: 'טיפול מיני',
      description: 'קשיים מיניים אינם גזירת גורל אלא קריאה פנימית להקשבה וריפוי. טיפול מיני מקצועי מאפשר לפתור מחסומים, לשפר אינטימיות, ולעיתים קרובות גם לחזק את הקשר הזוגי כולו.',
      icon: <HeartHandshake className="h-14 w-14 text-sky-500" />
    },
    {
      id: 8,
      title: 'טיפול במשברי חיים',
      description: 'משברי חיים כמו אובדן, פרידה, מחלה או שינוי חד ובלתי צפוי מערערים את המוכר ודורשים הסתגלות מחודשת. בטיפול נוכל לעצור, להתבונן ולעבד יחד את מה שעובר עליך כדי לאפשר בהדרגה מרחב חדש שבו אפשר לחיות עם המשבר, לא נגדו, ולמצוא בתוכו גם שקט, תוקף ומשמעות.',
      icon: <Clock className="h-14 w-14 text-sky-500" />
    },
    {
      id: 9,
      title: 'הדרכת הורים ומטפלים',
      description: 'ההדרכה היא מרחב להתבוננות רחבה על הקשר, הדינמיקה והצרכים שמתעוררים במפגש עם הילד או המטופל. דרך שיחה מקצועית ומבוססת ניסיון, ניתן להבין לעומק את צורכי הילד או המטופל, ולפעול ממקום שקט, יציב ומחובר יותר גם במצבים מאתגרים.',
      icon: <UserPlus className="h-14 w-14 text-sky-500" />
    },
  ];

  return (
    <div id="services" className="pt-24 pb-16 mt-2">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">השירותים שלי</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מגוון רחב של טיפולים מותאמים אישית לצרכים השונים
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-primary-50 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">תהליך הטיפול</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-500 text-white rounded-full text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">פגישת היכרות ראשונית</h3>
              <p className="text-gray-600">פגישה ראשונה להיכרות, הבנת הקשיים והצרכים, והערכת התאמה לטיפול.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-500 text-white rounded-full text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">בניית תוכנית טיפול</h3>
              <p className="text-gray-600">גיבוש מטרות הטיפול והאסטרטגיות המתאימות ביותר עבורך.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-500 text-white rounded-full text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">תהליך טיפולי עם מעקב</h3>
              <p className="text-gray-600">פגישות קבועות, מעקב אחר התקדמות, והתאמת התוכנית לפי הצורך.</p>
            </div>
          </div>
        </motion.div>

        {/* <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800">יש לך שאלות נוספות?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            אשמח לענות על כל שאלה ולעזור לך להחליט האם הטיפול שאני מציע מתאים לצרכים שלך.
          </p>
          <a href="/contact" className="btn-primary">
            צור קשר לתיאום פגישת ייעוץ
          </a>
        </motion.div> */}
      </div>
    </div>
  );
};

export default ServicesPage;