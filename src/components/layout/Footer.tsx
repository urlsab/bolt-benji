import React from 'react';
// import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../benjilogo.png';
import { FaWhatsapp } from "react-icons/fa";
import { FaWaze } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-8">

          {/* summary part */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={logo} 
                className="text-primary-400 ml-2 rounded-full"
                style={{
                  height: 'clamp(40px, 7vw, 56px)',
                  width: 'clamp(40px, 7vw, 56px)',
                  borderRadius: '50%'
                }}
              />
              <h3 className="text-xl font-bold">אור בנג'י פסיכותרפיה</h3>
            </div>
            <p className="text-gray-300 mb-4">
              טיפול מקצועי בגישה אישית, מותאמת וממוקדת תוצאות. מלווה אתכם בדרך לשיפור איכות החיים.
            </p>
          </div>
          
          {/* ניווט מהיר section removed as requested */}
          
          {/* שעות פעילות section removed as requested */}
          
          {/* contact part */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 ml-2 text-sky-500" />
                <span>0522226181</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 ml-2 text-sky-500" />
                <span className="break-all">ooorrr84@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 ml-2 text-sky-500 mt-1" />
                <span> בנין כלל, יפו 97, ירושלים</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p> {currentYear} | אור בנג׳י פסיכותרפיה | כל הזכויות שמורות &copy;</p>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=0522226181"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="צ'אט בוואטסאפ"
        style={{
          position: 'fixed',
          bottom: 65,
          left: 10,
          zIndex: 1000,
          transition: 'transform 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <FaWhatsapp style={{
          height: 'clamp(32px, 7vw, 44px)',
          width: 'clamp(32px, 7vw, 44px)',
          color: 'white',
          backgroundColor: 'green',
          borderRadius: '50% 50% 50% 40%'
        }} />
      </a>
      <a
        href="https://waze.com/ul?q=יפו+97+ירושלים&navigate=yes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ניווט בוויז"
        style={{
          position: 'fixed',
          bottom: 10,
          left: 10,
          zIndex: 1000,
          transition: 'transform 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <FaWaze style={{
          height: 'clamp(32px, 7vw, 44px)',
          width: 'clamp(32px, 7vw, 44px)',
          color: 'black',
          backgroundColor: 'white',
          borderColor:'RGB(5, 200, 247)',
          borderRadius: '40% 40% 40% 40%'
        }} />
      </a>
    </footer>
  );
};

export default Footer;