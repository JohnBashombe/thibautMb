import React, { useState } from 'react';

const TopBar = (): JSX.Element => {
  type IMenu = { title: string };
  const Menu: IMenu[] = [
    { title: 'Home' },
    { title: 'Service' },
    { title: 'Works' },
    { title: 'Studio' },
    { title: 'About Us' },
  ];
  const [selected, setSelected] = useState(Menu[0].title);
  return (
    <div className='flex justify-between items-center px-28 py-10 border-b-[1px] border-white'>
      <p className='font-bold text-4xl'>Thibaut M.B.</p>
      <div className='flex space-x-4 justify-center items-center'>
        {Menu.map((value, index) => (
          <p
            key={index}
            onClick={() => setSelected(value.title)}
            className={
              `py-2 cursor-pointer text-base ` +
              (selected === value.title
                ? 'border-b-4 border-white text-white font-bold '
                : 'border-none text-gray-400')
            }
          >
            {value.title}
          </p>
        ))}
      </div>
      <div className='py-4 px-8 bg-white text-black text-sm font-bold'>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default TopBar;
