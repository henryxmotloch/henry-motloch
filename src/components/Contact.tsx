
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <a 
            href="mailto:henrymotloch@gmail.com" 
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Let's get in touch!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
