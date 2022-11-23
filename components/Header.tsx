import React from 'react';
import { refs } from '../lib/data';
import { useRouter } from 'next/router';

const Header = (): JSX.Element => {
  const router = useRouter();
  return (
    <div ref={refs[0]} className='py-10 flex flex-col'>
      <div className='flex flex-col space-y-10'>
        <div className='flex flex-col uppercase text-4xl md:text-6xl lg:text-8xl font-bold'>
          <p>Magnificient</p>
          <p>Architect Design</p>
        </div>
        <div
          onClick={() => void router.push('/works/1')}
          className='w-full h-96 bg-gray-200 cursor-pointer'
        ></div>
      </div>
    </div>
  );
};

export default Header;
