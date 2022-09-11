import React from 'react';
import Header from '../components/Header';
import TopBar from '../components/TopBar';
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
const App = () => {
  return (
    <div className='w-screen h-full min-h-screen bg-black text-white'>
      <TopBar />
      <Header />
    </div>
  );
};

export default App;
