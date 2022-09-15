import React from 'react';
import { NextPage } from 'next';
import Work from '../components/Work';
import Dream from '../components/Dream';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import '../styles/globals.css';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the main app that imports our styles
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const App: NextPage = (): JSX.Element => {
  return (
    <div className='w-full h-full min-h-screen bg-black text-white pb-20'>
      <TopBar />
      <div className='flex flex-col w-full px-28 pb-20'>
        <Header />
        <AboutUs />
        <Dream />
        <Work />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
