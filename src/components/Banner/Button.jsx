import React from 'react';
import resume from '../../assets/portfolio.pdf';

const Button = () => {
  return (
    <div className="d-flex gap-2 mt-3 mt-md-3 mt-lg-4">
      <a href={resume} download className="btn ">
        Download cv
      </a>
      <a href="/Portfolio" className="btn btn_gradient">
        Portfolio
      </a>
    </div>
  );
};

export default Button;
