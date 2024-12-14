

import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-12 bg-[#F8F8F8]">
      <div className="container mx-auto">
        {/* <h2 className="text-4xl font-bold text-center mb-8 text-[#4D3F53]">Contact Us</h2> */}

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Google Map */}
          <div className="w-full md:w-2/3 h-[400px] rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509933!2d144.9537353153159!3d-37.81627997975169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0b0121c5%3A0x5045675218cee2f!2sYour%20Company%20Name!5e0!3m2!1sen!2sus!4v1630734089074!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
