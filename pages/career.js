import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../components/footer";
import Header from "../components/header";
import image from '../public/linkedin.svg';

export default function Career() {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    file: ''
  });

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    console.log({ value });
    setFormDetails({...formDetails, [name]:value})
  }
console.log("formDetails", formDetails);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
    axios.post('http://localhost:3004/register', formDetails);
    setFormDetails({
    name: '',
    email: '',
    phone: '',
    designation: '',
    file: ''})
    toast.success("Register Successfully !!", {
      position: "top-right",
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="career">
      <Header page="Home" route="/" />
      <section
        className="u-clearfix u-palette-1-base u-section-1"
        id="carousel_2592"
      >
        <ToastContainer closeButton={false} position="bottom-right" />
        <div className="u-expanded-width u-shape u-shape-rectangle u-white u-shape-1"></div>
        <div className="u-align-center-sm u-align-center-xs u-container-style u-group u-radius-33 u-shape-round u-white u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <h2 className="u-text u-text-palette-2-base u-text-1">Register Form</h2>
            <h2 className="u-text u-text-default u-text-2"> Need More?</h2>
            <div className="u-form u-form-1">
              <form
                className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                style={{ padding: 15 }}
                onSubmit={(e) => handleSubmit(e)} 
                name="contact" netlify netlify-honeypot="bot-field" hidden
              >
                <div className="u-form-group u-form-name">
                <input
                    type="text"
                    placeholder="Name"
                    id="name-6797"
                    name="name"
                    value={formDetails.name}
                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                    onChange={(e) => handleOnChange(e)}
                    required
                  />
                </div>
                <div className="u-form-email u-form-group">
                <input
                    type="email"
                    placeholder="Email"
                    id="email-6797"
                    name="email"
                    value={formDetails.email}
                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                    onChange={(e) => handleOnChange(e)}
                    required
                  />
                </div>
                <div className="u-form-group u-form-name">
                <input
                    type="text"
                    placeholder="Mobile number"
                    id="name-6797"
                    name="phone"
                    pattern="[789][0-9]{9}"
                    value={formDetails.phone}
                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                    onChange={(e) => handleOnChange(e)}
                    required
                  />
                </div>
                <div className="u-form-group u-form-select u-form-group-3">
                <select
                      id="select-fdc3"
                      name="designation"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                      onChange={(e) => handleOnChange(e)}
                      value={formDetails.designation}
                      required
                    >
                      <option value="">
                        Select course
                      </option>
                      <option>
                        Excel
                      </option>
                    </select>
                </div>
                {/* <div className="u-form-group u-form-group-4">
                  <input type="file" id="myFile" name="filename" onChange={(e) => handleOnChange('file', e.target.value)}/>
                </div> */}

                <div className="u-form-group u-form-group-4">
                  <input type="date" id="myFile" name="file" value={formDetails.file} onChange={(e) => handleOnChange(e)} required/>
                </div>
                
                <div className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-form-group u-form-submit">
                <button 
                  className="u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-2-light-3 u-palette-2-base u-radius-7 u-btn-1"

                value="submit">
                Submit
                </button>
                </div>
                <div className="u-form-send-message u-form-send-success">
                  Thank you! Your message has been sent.
                </div>
                <div className="u-form-send-error u-form-send-message">
                  Unable to send your message. Please fix errors then try again.
                </div>
                <input type="hidden" value="" name="recaptchaResponse" />
              </form>
            </div>
            <p className="u-text u-text-grey-50 u-text-3">
              {" "}
              At Softwill, we share a mindset that dictates our company culture
              and hiring criteria.
            </p>
            <span className="u-icon u-icon-circle u-text-palette-1-base u-icon-2">
              
            </span>
            <h5 className="u-align-center-md u-align-center-sm u-align-center-xs u-text u-text-grey-50 u-text-4 connect-us">
              Connect us on <a href="https://www.linkedin.com/company/72974697/admin" target="_blank" rel="noreferrer"><Image src={image} height={30} width={30} alt="image"/></a>
            </h5>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
