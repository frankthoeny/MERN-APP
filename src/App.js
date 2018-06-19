import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SideBar from './components/SideBar';

const App = ({ children }) => (
    <div className={localStorage.getItem('jwtToken')? "grid-container":"login-grid-container"}>
      <Header />
      {localStorage.getItem('jwtToken') && <SideBar />}
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );

export default App;
