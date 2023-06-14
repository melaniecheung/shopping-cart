import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex items-center justify-center h-16 max-w-[1500px] mx-auto px-4 text-black bg-[#F8F8F8] bottom-0'>
      <div className='flex items-center'>
        <div className='mr-2'>Copyright © 2023 melaniecheung</div>
        <a href='https://github.com/melaniecheung' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='transition hover:scale-110 text-xl' />
        </a>
      </div>
    </div>
  );
};

export default Footer;