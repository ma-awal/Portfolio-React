import React from 'react';
import './Skill.css';

import { v4 as uuidv4 } from 'uuid';
import { skillData } from '../../data/Skildata';
const Skill = () => {
  return (
    <section className="skill position-relative py-3 py-md-4 py-lg-5 mt-3 mt-md-4 mt-lg-5   ">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="container d-flex justify-content-center   ">
        <div className="row   justify-content-center align-items-center">
          <div className="e_cont text-center">
            <h6>What skills i have</h6>
            <h1>My Skill</h1>
          </div>
          <div className="col-12 col-lg-9 d-flex justify-content-center ">
            <div className="row   align-items-center justify-content-between   mt-2 mt-md-3 ">
              {skillData.map((data) => {
                const id = uuidv4();
                const { img, name, skill } = data;
                return (
                  <div
                    key={id}
                    className="col-12 col-sm-6 col-md-4      gy-4 gy-lg-5   text-center     "
                  >
                    <div className="m-box text-center rounded-4 py-3   rounded  border px-3 ">
                      <div className="box  py-3   ">
                        <img
                          src={img}
                          className="img-fluid shadow-lg bg-light  "
                          alt="img"
                        />
                        <h6>{name}</h6>
                        <p className="text-capitalize fw-semibold m-0 p-0">
                          {skill}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
