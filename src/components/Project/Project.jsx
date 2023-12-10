import React, { useState } from 'react';
import './Project.css';
import { projectData } from '../../data/Pojectdata';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Project = () => {
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * projectsPerPage;
  const firstIndex = lastIndex - projectsPerPage;
  const currentProjects = projectData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(projectData.length / projectsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <section className="project py-3 py-md-4 py-lg-5 mt-2 mt-md-3 mt-lg-5 position-relative">
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="row justify-content-center">
          <div className="project_cont text-center">
            <h6>My recent work</h6>
            <h2>Projects</h2>
          </div>
          <div className="col-12 col-lg-9 d-flex justify-content-center align-items-center">
            <div className="  row mx-auto  align-items-center justify-content-center   mt-2 mt-md-3 mt-lg-4 gy-3 gy-md-4 gy-lg-5">
              {currentProjects.map((data) => {
                const id = uuidv4();
                const { img, title, link, gitHub } = data;
                return (
                  <div key={id} className="col-12 col-sm-6 col-md-4     ">
                    <div className="single border w-100">
                      <img src={img} alt="img" />

                      <div className="img  text-center py-2 pb-md-3  ">
                        <p className=" p-0 mb-1 ">{title}</p>
                        <div className="btns d-flex justify-content-center align-items-center gap-2  ">
                          <button className="project_btn">
                            <Link
                              to={link}
                              className="text-decoration-none text-center mx-auto  "
                            >
                              Demo
                            </Link>
                          </button>
                          <button className="project_btn">
                            <Link
                              to={gitHub}
                              className="   text-decoration-none text-center mx-auto  "
                            >
                              Github
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="prev_next_btn text-end d-flex justify-content-center gap-2">
                <button
                  className="btn_next_prev px-3"
                  onClick={handlePrevPage}
                  disabled={currentPage <= 1}
                >
                  Prev
                </button>
                <button
                  className="btn_next_prev px-3"
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
