import React from 'react';
import './connect.css';
import Card from '../Card/Card';
const name = 'Want to connect ?';
const title = 'Click one Whatsupp';

const Connect = () => {
  return (
    <section className="connect">
      <Card name={name} title={title} />
    </section>
  );
};

export default Connect;
