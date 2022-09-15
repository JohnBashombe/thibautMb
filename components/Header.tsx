import React from 'react';

const Header = (): JSX.Element => {
  return (
    <div className='py-10 flex flex-col'>
      <div className='flex flex-col space-y-10'>
        <div className='flex flex-row justify-between items-end'>
          <div className='flex flex-col uppercase text-8xl font-bold'>
            <p>Magnificient</p>
            <p>Architect Design</p>
          </div>
          <div className='flex flex-col text-gray-200 font-thin text-sm justify-end items-end'>
            <p>a design that pampers</p>
            <p>you like you're in a </p>
            <p>beautiful dreamland</p>
          </div>
        </div>
        <div className='w-full h-96 bg-gray-200'></div>
      </div>
    </div>
  );
};

export default Header;
