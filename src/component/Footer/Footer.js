import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='mt-6'>
        <p>
          <i className='fas fa-map-marker-alt mr-2'></i>
          House # 48, Road # 9/A, Dhanmondi, Dhaka 1209
        </p>
        <p>
          <i className='fas fa-phone mr-2'></i>
          Hotline: 10615, +88 09610010615
        </p>
      </div>
      <div className='my-5 sm:my-0 flex flex-col'>
        <p className='font-medium'>Menus</p>
        <a href='#appointment'>take-a-appointment</a>
        <Link to='/contact-us'>contact us</Link>
        <Link to='/#'>about us</Link>
      </div>
      <div>
        <p className='font-medium'>Get in tuch</p>
        <a
          href='https://www.facebook.com/profile.php?id=100009923686402'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-facebook-square'></i>
        </a>
        <i className='fab fa-twitter ml-4'></i>
      </div>
      <div className='col-span-3 text-sm mt-4 sm:mt-0 flex gap-1 justify-center'>
        <p>&copy; All right reserve by</p>
        <a
          href='https://iqbalhossen-c5422.web.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white font-medium'
        >
          Md Iqbal
        </a>
      </div>
    </div>
  );
};

export default Footer;
