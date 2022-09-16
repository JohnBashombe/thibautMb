import React, { useState } from 'react';

const Work = (): JSX.Element => {
  const Years: number[] = [2022, 2021, 2020, 2019, 2018];
  const [selected, setSelected] = useState<number>(new Date().getFullYear());
  return (
    <div className='text-white pt-16 md:pt-20 lg:pt-28 flex flex-col w-full space-y-10'>
      <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col space-y-5 md:space-y-8'>
          <p className='text-4xl md:text-5xl font-bold uppercase'>
            The last project we have worked on
          </p>
          <p className='text-base text-gray-400 text-justify'>
            Our many works have also resulted in various awards as the best
            architect in 2022
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center space-x-4'>
        <div className='flex justify-start items-center overflow-x-auto no-scrollbars space-x-4 font-bold text-sm'>
          {Years.map((value, index) => (
            <div
              key={index}
              onClick={() => setSelected(value)}
              className={
                `flex py-2 cursor-pointer ` +
                (selected === value
                  ? 'border-b-2 border-white'
                  : 'border-none text-gray-400')
              }
            >
              <p>{value}</p>
            </div>
          ))}
        </div>
        <p className='text-sm text-gray-400 hover:text-white text-justify cursor-pointer min-w-fit'>
          See all project
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='w-full h-96 bg-gray-300 p-5 flex flex-col justify-end items-start'>
          <p className='font-bold text-2xl text-black'>Thibaut</p>
          <p className='text-sm text-gray-800'>Mukomacogo Bashombe</p>
        </div>
        <div className='flex flex-col space-y-4'>
          <div className='w-full h-40 bg-gray-300'></div>
          <div className='w-full h-52 bg-gray-300'></div>
        </div>
        <div className='w-full h-96 bg-gray-300'></div>
      </div>
    </div>
  );
};

export default Work;
