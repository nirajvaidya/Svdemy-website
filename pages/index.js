import Head from "next/head";
import Image from "next/image";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image2 from "../public/image2.png";
import image5 from "../public/image3.png";
import image3 from "../public/image5.png";
import image7 from "../public/image7.png";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {

  toast.configure({
    autoClose: 10000,
    draggable: true,
  });

  return (
    <div className="home">
      <Head>
        <title>Svdemy | Home</title>
        <meta name="description" content="Softwill technologies pvt lmt" />
      </Head>
      <Header page="Register" route="/career"/>
      <section
        className="u-align-center-xs u-clearfix u-image u-section-1"
        id="carousel_5937"
        data-image-width="1788"
        data-image-height="1080"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-expanded-width-sm u-expanded-width-xs u-gradient u-radius-20 u-shape u-shape-round u-shape-1"></div>
          <div className="u-align-center u-container-style u-group u-radius-20 u-shape-round u-white u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h5 className="u-custom-font u-text u-text-default u-text-font u-text-1">
                Outgoing project
              </h5>
              <h1 className="u-text u-text-palette-2-base u-text-2">
                Excel Workshop
              </h1>
              <p className="u-text u-text-3">Own by Svdemy</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-gradient u-section-2"
        id="carousel_9938"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
            <div className="u-container-layout u-container-layout-1">
              <h1 className="u-align-center u-text u-text-palette-2-base u-text-1">
                Design, Build &amp; Grow your knowledge with
                <br />
                <span className="u-text-palette-1-base">this courses</span>
              </h1>
              <p className="u-text u-text-2">
                {" "}
                Turn your ideas into reality with Static. <br />
                With a lot of powerful features, we guarantee simplicity and
                clarity.
              </p>
            </div>
          </div>
          <div className="u-clearfix u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gutter-18 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-size-30">
                  <div className="u-layout-col">
                    <div className="u-align-center u-container-style u-layout-cell u-radius-10 u-size-40 u-white u-layout-cell-1">
                      <div className="u-container-layout u-container-layout-2">
                        <span className="u-icon u-icon-circle u-palette-2-light-3 u-spacing-18 u-icon-1">
                          <Image src={image2} alt="image" />
                        </span>
                        <h3 className="u-text u-text-default u-text-palette-1-base u-text-3">
                          About
                        </h3>
                        <p className="u-text u-text-palette-5-dark-2 u-text-4">
                        I’m Sanjana Your Trainer,
                        Hi everybody! I am Sanjana and I will be your main instructor durnig the Excel training course. 
                        I have more than 2 years experience in Excel and I am very passionate about this field. Register for the course and let's meet.
                        Teaching students all about the beste Excel techniques is something I love to do as a full-time job.
                        </p>
                      </div>
                    </div>
                    <div className="u-container-style u-layout-cell u-radius-10 u-size-20 u-white u-layout-cell-2">
                      <div className="u-container-layout u-container-layout-3">
                        <span className="u-icon u-icon-circle u-palette-1-light-3 u-spacing-16 u-icon-2">
                        <Image src={image3} alt="image3" />
                        </span>
                        <h3 className="u-align-center u-text u-text-default u-text-palette-1-base u-text-5">
                        Add value
                        </h3>
                        <p className="u-align-center u-text u-text-palette-5-dark-2 u-text-6">
                        <p>o Hand holding lectures.</p>
                        <p>o Become a pro in excel.</p>
                        <p>o Save your time upto 2 hours.</p>
                        <p>o Get supported for 1 month.</p>
                        <p>o Get automatic index creating tool</p>
                        <p>o Get formula book.</p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-30">
                  <div className="u-layout-col">
                    <div className="u-align-center u-container-style u-layout-cell u-radius-10 u-size-20 u-white u-layout-cell-3">
                      <div className="u-container-layout u-container-layout-4">
                        <span className="u-icon u-icon-circle u-palette-1-light-3 u-spacing-18 u-icon-3">
                        <Image src={image5} alt="image5" />
                        </span>
                        <h3 className="u-text u-text-default u-text-palette-1-base u-text-7">
                        Advance Excel
                        </h3>
                        <p className="u-text u-text-palette-5-dark-2 u-text-8">
                        <p> o Learn basic to advance formulas from scratch.</p>
                        <p> o Understanding when to use what formula.</p>
                        <p> o Learn about references and types of references.</p>
                        <p> o Criteria based aggregations.</p>
                        </p>
                      </div>
                    </div>
                    <div className="u-container-style u-layout-cell u-radius-10 u-size-40 u-white u-layout-cell-4">
                      <div className="u-container-layout u-container-layout-5">
                        <span className="u-align-center u-icon u-icon-circle u-palette-2-light-3 u-spacing-18 u-text-palette-1-base u-icon-4">
                        <Image src={image7} alt="image7" />
                        </span>
                        <h3 className="u-align-center u-text u-text-default u-text-palette-1-base u-text-9">
                          Explore
                        </h3>
                        <p className="u-align-center u-text u-text-palette-5-dark-2 u-text-10">
                        Do you feel like you're doing a lot of guess work when it comes to Exel? Take the Exel training course to change that
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-3" id="carousel_ef73">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <h2 className="u-align-center u-text u-text-palette-2-base u-text-1">
                      {" "}
                      Get to know about us and relive our journey
                    </h2>
                  </div>
                </div>
                <div className="u-container-style u-gradient u-layout-cell u-size-40 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <p className="u-text u-text-2">
                      {" "}
                      <strong> We are the change</strong> <br /><br />
                      To transform the india educational system into the digital world.
                      <br /><br />
                      The Svdemy family believes in action, progress, and
                      growth. The young startup has achieved several milestones
                      in its active years till now, but nothing keeps us from
                      seeking more and more.&nbsp;
                      <br />
                      <br />
                      We aim to break all digital educational system&nbsp;
                      <br />
                      We believe that an open work culture can bring in
                      transparency, boost innovation, and develop empathy for
                      every professional. Our open work culture helps us truly
                      harness every individual’s potential and skills.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
