import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-primary-50 rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">פרטי התקשרות</h3>
      
      <ul className="space-y-6">
        <li className="flex items-start">
          <Phone className="h-6 w-6 text-sky-700 ml-4 mt-1" />
          <div>
            <h4 className="font-bold text-gray-800 mb-1">טלפון</h4>
            <p className="text-gray-600">0522226181</p>
            <p className="text-sm text-gray-500 mt-1">זמין בימים א'-ה', 9:00-18:00</p>
          </div>
        </li>
        
        <li className="flex items-start">
          <Mail className="h-6 w-6 text-sky-700 ml-4 mt-1" />
          <div>
            <h4 className="font-bold text-gray-800 mb-1">אימייל</h4>
            <p className="text-gray-600 break-all">ooorrr84@gmail.com</p>
            <p className="text-sm text-gray-500 mt-1">אחזור אליך תוך 24 שעות</p>
          </div>
        </li>
        
        <li className="flex items-start">
          <MapPin className="h-6 w-6 text-sky-700 ml-4 mt-1" />
          <div>
            <h4 className="font-bold text-gray-800 mb-1">כתובת הקליניקה</h4>
            <p className="text-gray-600">יפו 97, בנין מרכז כלל, ירושלים</p>
            <p className="text-sm text-gray-500 mt-1">חניה חופשית בסביבה</p>
          </div>
        </li>
        
        <li className="flex items-start">
          <Clock className="h-6 w-6 text-sky-700 ml-4 mt-1" />
          <div>
            <h4 className="font-bold text-gray-800 mb-1">שעות פעילות</h4>
            <p className="text-gray-600">ראשון-חמישי: 9:00-18:00</p>
            <p className="text-gray-600">שישי: 9:00-13:00</p>
            <p className="text-gray-600">שבת: סגור</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;