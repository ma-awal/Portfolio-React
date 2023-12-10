import React from 'react';
import './Mail.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { CiLocationOn } from 'react-icons/ci';

import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
// import { BsMessenger } from "react-icons/bs";
// import { BsWhatsapp } from "react-icons/bs";
const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_epxu488',
        'template_sodm9jv',
        form.current,
        'BUunADRxYFA-4Ov88'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="mail position-relative py-3 py-md-4 py-lg-5 mt-2 mt-md-3 mt-md-5  ">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>

      <div className="container">
        <div className="row justify-content-center align-items-center  ">
          <div className=" col-12 col-lg-9">
            <div className="mail_cont text-center">
              <h6>Get in touch</h6>
              <h1>Contact us</h1>
            </div>
            <div className="row  justify-content-center mt-3 mt-md-4 mt-lg-5 gy-4 gy-lg-0 ">
              <div className="col-12 col-md-6   a_connect ">
                <div className="mail_address d-flex align-items-center gap-2 mt-2 mt-md-3">
                  <span className="icon rounded-circle ">
                    <CiLocationOn className="fs-4" />
                  </span>
                  <div className=" pt-3">
                    <span className=" d-block">Sirajganj,Dhaka,Bangladesh</span>
                    <p>The city of Bangladesh</p>
                  </div>
                </div>
                <div className="mail_address d-flex align-items-center gap-2 mt-2 mt-md-3">
                  <span className="icon rounded-circle ">
                    <AiOutlineMail className="fs-4" />
                  </span>
                  <div className=" pt-3">
                    <span className="  d-block">awal3web@gmail.com</span>
                    <p>Send your mail any time</p>
                  </div>
                </div>
                <div className=" mail_address d-flex align-items-center gap-2 mt-2 mt-md-3  ">
                  <span className="icon rounded-circle ">
                    <AiOutlinePhone className="fs-4" />
                  </span>
                  <div className=" pt-3">
                    <span className="   d-block">01812959878</span>
                    <p>Don't forget to knock through mobile</p>
                  </div>
                </div>
              </div>

              <div className=" col-12  col-md-6  ">
                <form ref={form} onSubmit={sendEmail} className="form">
                  <div className="input_form mb-2 mb-md-3  ">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="input_form  mb-2 mb-md-3    ">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                      id="email"
                      name="email"
                    />
                  </div>

                  <div className="input_form  mb-2 mb-md-3  ">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control    "
                      rows={2}
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-2">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mail;
