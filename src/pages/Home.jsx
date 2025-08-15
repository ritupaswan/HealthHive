import React from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9", // yaha tum koi color use kar sakti ho
        minHeight: "100vh"
      }}
    >
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
