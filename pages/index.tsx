import React from 'react';
import App from './_app';
import Head from 'next/head';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the home page
 * @returns {JSX.Element}: JSX Code for Home
 * @license MIT
 * @version 1.0.0
 */
const Home = () => {
  return (
    <div className='flex'>
      <Head>
        <title>Thibaut MB - Architect</title>
        <meta
          name='description'
          content='Thibaut Mukomacogo Bashombe - Website Portfolio'
        />
      </Head>
      <App />
    </div>
  );
};

export default Home;
