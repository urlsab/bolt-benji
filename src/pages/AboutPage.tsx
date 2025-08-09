import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Brain, GraduationCap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">אודות אור בנג'י</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            פסיכותרפיסט מוסמך עם ניסיון של מעל 10 שנים בטיפול במגוון קשיים ואתגרים נפשיים
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.pexels.com/photos/5699469/pexels-photo-5699469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="אור בנג'י פסיכותרפיסט" 
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">הסיפור שלי</h2>
            <p className="text-gray-600 mb-4">
              שלום, שמי אור בגנ'י. אני פסיכותרפיסט מוסמך בעל תואר שני בפסיכולוגיה קלינית מאוניברסיטת תל אביב ותעודת הסמכה בטיפול קוגניטיבי-התנהגותי (CBT) מהמכון הישראלי לטיפול קוגניטיבי-התנהגותי.
            </p>
            <p className="text-gray-600 mb-4">
              דרכי המקצועית החלה לפני למעלה מעשור, כשעבדתי במחלקה פסיכיאטרית בבית חולים גדול. שם נחשפתי למורכבות ולמגוון הקשיים הנפשיים איתם אנשים מתמודדים, וגיבשתי את התפיסה הטיפולית שלי - גישה אינטגרטיבית, מותאמת אישית, וממוקדת בחוזקות ובמשאבים של המטופל.
            </p>
            <p className="text-gray-600">
              אני מאמין שכל אדם ראוי לחיות חיים מלאי משמעות, שמחה וסיפוק. המסע הטיפולי הוא הזדמנות לגלות את העצמי האותנטי, להשתחרר מדפוסים מגבילים, ולפתח כלים שיאפשרו התמודדות טובה יותר עם אתגרי החיים.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">ההכשרה המקצועית שלי</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <GraduationCap className="h-12 w-12 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">השכלה אקדמית</h3>
              <p className="text-gray-600">תואר שני בפסיכולוגיה קלינית, אוניברסיטת תל אביב</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">הסמכות מקצועיות</h3>
              <p className="text-gray-600">מטפל מוסמך ב-CBT, פסיכותרפיה דינמית, EMDR</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Brain className="h-12 w-12 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">התמחויות</h3>
              <p className="text-gray-600">חרדה, דיכאון, טראומה, קשיים בין-אישיים</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">פיתוח מקצועי מתמשך</h3>
              <p className="text-gray-600">השתתפות קבועה בהשתלמויות וסדנאות מקצועיות</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-primary-50 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">הגישה הטיפולית שלי</h2>
          <p className="text-gray-600 mb-4">
            הגישה הטיפולית שלי היא אינטגרטיבית ומותאמת אישית. אני משלב טכניקות מעולמות טיפול שונים, כמו טיפול קוגניטיבי-התנהגותי (CBT), פסיכותרפיה דינמית, טיפול ממוקד רגש (EFT), מיינדפולנס ועוד - בהתאם לצרכים האישיים של כל מטופל.
          </p>
          <p className="text-gray-600 mb-4">
            אני רואה בתהליך הטיפולי מסע משותף של חקירה וגילוי. היחסים הטיפוליים, המבוססים על אמון, כבוד ואמפתיה, מהווים את הבסיס לתהליך זה. אני מאמין שהקשבה אמיתית, נטולת שיפוטיות, היא כלי טיפולי רב עוצמה.
          </p>
          <p className="text-gray-600">
            חשוב לי לעבוד בשקיפות ובשיתוף פעולה עם המטופלים שלי, תוך הצבת מטרות ברורות ומדידות לטיפול. מטרתי היא לא רק להקל על סימפטומים מיידיים, אלא גם להקנות כלים וידע שישרתו את המטופלים לאורך זמן, גם לאחר סיום הטיפול.
          </p>
        </motion.div>

        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            מוכן להתחיל במסע שלך?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <a href="/contact" className="btn-primary">
              צור קשר לקביעת פגישה
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;