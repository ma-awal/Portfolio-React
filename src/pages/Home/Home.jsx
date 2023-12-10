import React from 'react';
import Banner from '../../components/Banner/Banner';
import Intro from '../../components/Intro/Intro';
import Skill from '../../components/Skill/Skill';
import Project from '../../components/Project/Project';
import Mail from '../../components/Mail/Mail';
import Connect from '../../components/Connect/Connect';

const Home = () => {
  return (
    <div>
      <Banner />
      <Intro />
      <Skill />
      <Project />
      <Mail />
      <Connect />
    </div>
  );
};

export default Home;
