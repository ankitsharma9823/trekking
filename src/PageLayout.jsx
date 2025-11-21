import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';  // ← .jsx + default import

const PageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PageLayout;