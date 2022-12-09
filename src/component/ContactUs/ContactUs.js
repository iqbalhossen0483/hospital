import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className='contact-wrapper'>
        <form className='space-y-4'>
          <div className='input-wrapper'>
            <input type='text' placeholder='Enter your topic name' required />
            <label>Your topic name:</label>
          </div>
          <div className='input-wrapper'>
            <textarea
              className='border rounded focus:outline-none px-4 py-1'
              name='massege'
              required
              rows='5'
            />
            <label>Your massege: </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
