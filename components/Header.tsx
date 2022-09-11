import React from 'react';

import { FaFacebookF, FaTelegram, FaTwitter } from 'react-icons/fa';

const Header = (): JSX.Element => {
  return (
    <div className='py-10 flex flex-col'>
      <div className='flex flex-col space-y-10 px-28'>
        <div className='flex flex-row justify-between items-end'>
          <div className='flex flex-col uppercase text-8xl font-bold'>
            <p>Magnificient</p>
            <p>Architect Design</p>
          </div>
          <div className='flex flex-col text-gray-300 font-thin text-sm justify-end items-end'>
            <p>a design that pampers</p>
            <p>you like you're in a </p>
            <p>beautiful dreamland</p>
          </div>
        </div>
        <div className='w-full h-96 bg-brand-3'></div>
      </div>
      <div className='flex justify-start items-center space-x-8 w-full bg-brand-1 py-8 text-4xl px-28'>
        <FaTelegram />
        <FaTwitter />
        <FaFacebookF />
      </div>
    </div>
  );
};

export default Header;
