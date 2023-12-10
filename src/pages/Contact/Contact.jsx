import React from 'react';
import Card from '../../components/Card/Card';
import Mail from '../../components/Mail/Mail';
import Connect from '../../components/Connect/Connect';

const Contact = () => {
  return (
    <>
      <>
        <Card name={'Contact'} />
        <section className="mt-3 mt-md-4 mt-lg-5">
          <Mail />
        </section>
        <section className="mt-3 mt-md-4 mt-lg-5">
          <Connect />
        </section>
      </>
    </>
  );
};

export default Contact;
