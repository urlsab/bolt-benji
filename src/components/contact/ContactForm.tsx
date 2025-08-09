import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ContactFormData } from '../../types';
import { CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these IDs with your actual EmailJS service, template, and public key
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your actual service ID
        'YOUR_TEMPLATE_ID', // Replace with your actual template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your actual public key
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('אירעה שגיאה בשליחת הטופס. אנא נסה שוב מאוחר יותר.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">צור קשר</h3>
      
      {submitStatus === 'success' ? (
        <motion.div 
          className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CheckCircle className="text-green-500 h-5 w-5 ml-3 mt-0.5" />
          <div>
            <h4 className="text-green-800 font-medium">ההודעה נשלחה בהצלחה!</h4>
            <p className="text-green-700 mt-1">אחזור אליך בהקדם האפשרי.</p>
          </div>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit}>
          {submitStatus === 'error' && (
            <motion.div 
              className="bg-red-50 border border-red-200 rounded-md p-4 mb-6 flex items-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AlertCircle className="text-red-500 h-5 w-5 ml-3 mt-0.5" />
              <div>
                <h4 className="text-red-800 font-medium">שגיאה</h4>
                <p className="text-red-700 mt-1">{errorMessage}</p>
              </div>
            </motion.div>
          )}
          
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 mb-2">שם מלא *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">אימייל *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 mb-2">טלפון</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">הודעה *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex justify-center items-center"
          >
            {isSubmitting ? 'שולח...' : 'שלח הודעה'}
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            השדות המסומנים ב-* הם שדות חובה.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;