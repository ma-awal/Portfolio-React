import React from 'react';
import Programming from '../../assets/programming.gif';
import { Link } from 'react-router-dom';
import './intro.css';
import resume from '../../assets/portfolio.pdf';

const Intro = () => {
  return (
    <section className="intro  ">
      <div className="container">
        <div className="row justify-content-center  ">
          <div className="col-12 col-lg-9  ">
            <div className="row gy-5   gy-md-0  align-items-center     ">
              <div className="col-12   col-md-6     ">
                <div className="intro_img ">
                  <img src={Programming} className="img-fluid" alt="img" />
                </div>
              </div>
              <div className="col-12  col-md-6 position-relative  ">
                <div className="intro_cont ">
                  <h1>Get Intro About Awal</h1>
                  <p>
                    It is really a wonderfull time to get meet with you. I am
                    Awal. I am a Front-End web developer.For being a passion of
                    life i enjoy a lot about Front-End designing and that is the
                    reason why i like Front-End. I am so delighted as your eyes
                    focused on my portfolio.
                  </p>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <a download href={resume} className="btn btn-2 ">
                    Download cv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
