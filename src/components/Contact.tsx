
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-semibold mb-8">Let's get in touch!</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:henrymotloch@gmail.com" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            
            <a 
              href="sms:+17789177948" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Text/SMS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
