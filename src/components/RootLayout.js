import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Context from '../context/Context';

const RootLayout = () => {
  return (
    <>
    <Context>
    <Header/>
    <main>
        <Outlet/>
    </main>
    </Context>
    </>
  )
}

export default RootLayout