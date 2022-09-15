import React from 'react';

const AboutUs = (): JSX.Element => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-40'>
      <div className='flex flex-col text-white space-y-10 w-full'>
        <p className='uppercase text-4xl font-bold'>About Us</p>
        <p className='text-base text-gray-400 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          corrupti obcaecati ea provident ad aliquam illo dolorem omnis, iste
          eligendi odio error alias numquam qui, voluptatem impedit commodi,
          harum a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit, nulla sapiente reiciendis ducimus, soluta praesentium
          voluptates quia quas quam, quod consequuntur voluptatibus.
          <br />
          Id sint aspernatur quod rem a rerum quos.tur adipisicing elit. Labore
          corrupti obcaecati ea provident ad aliquam illo dolorem omnis, iste
          eligendi odio error alias numquam qui, voluptatem impedit commodi,
          harum a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit, nulla sapiente reiciendis ducimus, soluta praesentium
          voluptates quia quas quam, quod consequuntur voluptatibus. Id sint
          aspernatur quod rem a rerum quos.
        </p>
        <div className='bg-white text-black font-medium px-10 text-xs py-4 w-fit cursor-pointer'>
          <p>Read More</p>
        </div>
      </div>
      <div className='w-full bg-gray-200 h-80'></div>
    </div>
  );
};

export default AboutUs;
