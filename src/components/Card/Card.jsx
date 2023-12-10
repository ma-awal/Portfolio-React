import React from 'react';
import './card.css';
const Card = (props) => {
  const name = props.name;
  const title = props.title;
  return (
    <section className="all mt-3 mt-md-3 mt-lg-4">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-9">
            <div className="card">
              <h4>{name}</h4>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
