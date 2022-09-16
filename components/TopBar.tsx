/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import { Menu } from '../lib/data';
import { ITopMenu } from '../lib/types';
import { CgMenuRight } from 'react-icons/cg';
import { DrawerState, TopMenuState } from '../lib/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const TopBar = (): JSX.Element => {
  const setDrawerState = useSetRecoilState(DrawerState);
  const setTopMenuState = useSetRecoilState<ITopMenu>(TopMenuState);
  const { menu }: ITopMenu = useRecoilValue<ITopMenu>(TopMenuState);
  return (
    <div className='flex justify-between items-center px-10 md:px-16 xl:px-28 py-10 border-b-[1px] border-white'>
      <p className='font-bold text-4xl md:text-5xl'>Thibaut MB</p>
      <div className='hidden lg:flex space-x-4 justify-center items-center'>
        {Menu.map((value, index) => (
          <p
            key={index}
            onClick={() => setTopMenuState({ menu: value.title })}
            className={
              `py-2 cursor-pointer text-base ` +
              (menu === value.title
                ? 'border-b-4 border-white text-white font-bold '
                : 'border-none text-gray-400')
            }
          >
            {value.title}
          </p>
        ))}
      </div>
      <div className='hidden lg:block py-4 px-8 bg-white text-black text-sm font-bold cursor-pointer'>
        <p>Contact Us</p>
      </div>
      <div className='lg:hidden flex justify-end items-center'>
        <CgMenuRight
          className='text-4xl md:text-5xl hover:text-gray-200'
          onClick={() => setDrawerState({ showDrawer: true })}
        />
      </div>
    </div>
  );
};

export default TopBar;
