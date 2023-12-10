import React from 'react';
import Card from '../../components/Card/Card';
import Connect from '../../components/Connect/Connect';
import Skill from '../../components/Skill/Skill';
import Project from '../../components/Project/Project';
const Portfolio = () => {
  return (
    <>
      <section className="   ">
        <Card name={'Portfolio'} />
      </section>
      <section className="mt-3 mt-md-4 mt-lg-5   ">
        <Skill className="" />
      </section>
      <section className="mt-3 mt-md-4 mt-lg-5  ">
        <Project />
      </section>
      <section className="mt-3 mt-md-4 mt-lg-5  ">
        <Connect />
      </section>
    </>
  );
};

export default Portfolio;
