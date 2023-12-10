import React from 'react';
import Card from '../../components/Card/Card';
import Intro from '../../components/Intro/Intro';
import Skill from '../../components/Skill/Skill';
import Connect from '../../components/Connect/Connect';
const About = () => {
  return (
    <>
      <Card name={'About'} />
      <section className="mt-3 mt-md-4 mt-lg-5">
        <Intro />
      </section>
      <section className="mt-3 mt-md-4 mt-lg-5">
        <Skill />
      </section>
      <section className="mt-3 mt-md-4 mt-lg-5">
        <Connect />
      </section>
    </>
  );
};

export default About;
