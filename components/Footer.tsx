import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <div className='mt-40 px-28 grid grid-cols-1 md:grid-cols-2 gap-10 border-t-2 border-gray-500 py-20'>
      <div className='flex flex-col space-y-8 text-gray-200 font-thin text-sm'>
        <p className='font-bold text-5xl'>Thibaut MB</p>
        <div className='flex flex-col justify-start items-start'>
          <p>A design that pampers</p>
          <p>you like you're in a </p>
          <p>beautiful dreamland</p>
        </div>
        <p className='pt-16'>2022 &copy; Thibaut Architect </p>
      </div>
      <div className='flex flex-col w-full space-y-8'>
        <div className='flex border-b-2 w-full border-gray-500 bg-transparent space-x-4 py-2 justify-end'>
          <input
            type='text'
            placeholder='Your email address'
            className='bg-transparent focus:outline-none w-full'
          />
          <button className='text-sm font-bold text-black bg-white px-12 py-3'>
            Submit
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col text-gray-500 font-medium space-y-2 text-sm'>
            <p className='text-xl text-white font-bold pb-2'>Menu</p>
            <p className='cursor-pointer hover:text-white'>Home</p>
            <p className='cursor-pointer hover:text-white'>Service</p>
            <p className='cursor-pointer hover:text-white'>Works</p>
            <p className='cursor-pointer hover:text-white'>Studio</p>
            <p className='cursor-pointer hover:text-white'>About Us</p>
          </div>
          <div className='flex flex-col text-gray-500 font-medium space-y-2 text-sm'>
            <p className='text-xl text-white font-bold pb-2'>Help</p>
            <p className='cursor-pointer hover:text-white'>
              Privacy and Policy
            </p>
            <p className='cursor-pointer hover:text-white'>Terms of Use</p>
          </div>
          <div className='flex flex-col text-gray-500 font-medium space-y-2 text-sm'>
            <p className='text-xl text-white font-bold pb-2'>Social</p>
            <p className='cursor-pointer hover:text-white'>Facebook</p>
            <p className='cursor-pointer hover:text-white'>Twitter</p>
            <p className='cursor-pointer hover:text-white'>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
