import React from 'react';

const GoogleLocation = () => {
  return (
    <div className="mx-3 border border-accent border-spacing-3 shadow-lg">
      <div className="aspect-w-16 aspect-h-9 md:h-[32rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29203.307964009116!2d90.32270681083982!3d23.803891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1c97b92a3f7%3A0x4a3d5e8d580b933d!2sStreet%20Cafe!5e0!3m2!1sen!2sbd!4v1692296483336!5m2!1sen!2sbd"
          className='w-full h-full'
          title='GOOGLE MAP LOCATION'
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleLocation;
