import React from 'react';
import './ServicesPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion'


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Services = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
      <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    <FormattedMessage
                        id='game_development'
                        defaultMessage='Game Development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='game_development-info'
                        defaultMessage='Design and develop web-based 3D games using Three.js. Implement game mechanics, physics, and animations.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Custom Web Applications'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Develop custom web applications that leverage Three.js for visualizations, simulations, games, or presentations.
Create interactive experiences that integrate with other web technologies (HTML, CSS, JavaScript).'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-chart-line"></i>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Visualizations'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Build data visualizations using Three.js for complex datasets, scientific data, or business analytics. Create features like charts, graphs, and 3D plots that allow users to interact with the data.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-wrench"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Maintenance and Support'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Provide ongoing support for existing Three.js projects, including bug fixes and feature enhancements.
Regularly update projects to keep them compatible with the latest Three.js releases.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-search"></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Augmented Reality Applications'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='Create AR experiences integrating Three.js with AR frameworks and libraries.
Develop interactive applications for mobile devices using AR.js or similar technologies.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-tachometer-alt"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='Training and Consulting'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Offer training sessions or workshops on Three.js for teams or individuals. Provide consulting on best practices for 3D graphics and interactive design.'
                    />
                </p>
            </div>
        </div>
    </section>

        <section className="site-services">
          <h2 className="heading">
            <FormattedMessage
              id='services-price'
              defaultMessage='Price'
            />
          </h2>
          <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <h3>
                <FormattedMessage
                  id='services-info-title-1'
                  defaultMessage='Essential'
                />
              </h3>
              <h4 className="sub-title">
                <FormattedMessage
                  id='services-info-sub-title-1'
                  defaultMessage='Perfect for new businesses'
                />
              </h4>
              <p className="numero"><span>$</span>150</p>
              <ul className="ul-cards-services">
                <li>
                  <i className="fas fa-check"></i>
                  <span >
                    <FormattedMessage
                      id='services-info-1-p1'
                      defaultMessage='1 responsive page'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p2'
                      defaultMessage='+3 sections for page'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p3'
                      defaultMessage='Contact Form'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p4'
                      defaultMessage='Domain for 1 year'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p5'
                      defaultMessage='Hosting for 1 year'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-1-p6'
                      defaultMessage='Delivered in 5 business days'
                    />
                  </span>
                </li>
              </ul>
              {/* <div className='portafolio-btn'>
                <a href="#" className="custom-btn btn-codigo">
                  <FormattedMessage
                    id='services-buy'
                    defaultMessage='buy now'
                /></a>
              </div> */}
            </div>
            <div className="columns recomendado" data-aos="fade-up" data-aos-delay="300">
              <h3>
                <FormattedMessage
                  id='services-info-title-2'
                  defaultMessage='Professional'
                />
              </h3>
              <h4 className="sub-title">
                <FormattedMessage
                  id='services-info-sub-title-2'
                  defaultMessage='Designed for medium businesses'
                />
              </h4>
              <p className="numero"><span>$</span>400</p>
              <ul className="ul-cards-services">
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-2-p1'
                      defaultMessage='5 responsive page'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p2'
                      defaultMessage='+3 sections for page'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p3'
                      defaultMessage='Contact Form'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p4'
                      defaultMessage='Domain for 1 year'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p5'
                      defaultMessage='Hosting for 1 year'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p6'
                      defaultMessage='animations'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p7'
                      defaultMessage='Free maintenance for 6 months'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-2-p6'
                      defaultMessage='Delivered in 7 business days'
                    />
                  </span>
                </li>
              </ul>
              
              {/* <div className='portafolio-btn'>
                <a href="#" className="custom-btn btn ">
                  <FormattedMessage
                    id='services-buy'
                    defaultMessage='buy now'
                  />
                </a> 
              </div> */}
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <h3>Premium</h3>
              <h4 className="sub-title">
                <FormattedMessage
                  id='services-info-sub-title-3'
                  defaultMessage='Great for large websites'
                />
              </h4>
              <p className="numero"><span>$</span>700</p>
              <ul className="ul-cards-services">
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-3-p1'
                      defaultMessage='+10 responsive pages'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p2'
                      defaultMessage='+3 sections for page'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p3'
                      defaultMessage='Contact Form'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p4'
                      defaultMessage='Domain for 1 year'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p5'
                      defaultMessage='Hosting for 1 year'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p6'
                      defaultMessage='animations'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-3-p7'
                      defaultMessage='Free maintenance for 1 year'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-3-p6'
                      defaultMessage='Delivered in 14 business days'
                    />
                  </span>
                </li>
              </ul>
              
              {/* <div className='portafolio-btn'>
                <a href="#" className="custom-btn btn-codigo">
                  <FormattedMessage
                    id='services-buy'
                    defaultMessage='buy now'
                  />
                </a>
              </div> */}
            </div>
          </div>
        </section>

        <section className="preguntas">
          <h2 className="heading">
            <FormattedMessage
              id='services-questions'
              defaultMessage='Frequent questions'
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={<FormattedMessage
                id='services-questions-1'
                defaultMessage='what is webgl?'
              />}
              content={<FormattedMessage
                id='services-questions-p1'
                defaultMessage='WebGL (Web Graphics Library) is a JavaScript API that provides a way to render 2D and 3D graphics within web browsers without the need for plugins. It is based on OpenGL ES, which is a subset of the OpenGL graphics API designed for embedded systems and mobile devices.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-2'
                defaultMessage='What is a Domain and a Hosting?'
              />}
              content={<FormattedMessage
                id='services-questions-p2'
                defaultMessage='Both are essential elements of a website. In short, the domain name is the address of the web page, while the hosting provides the space and resources necessary to launch the website.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-3'
                defaultMessage='what is blender?'
              />}
              content={<FormattedMessage
                id='services-questions-p3'
                defaultMessage='Blender is a powerful open-source 3D computer graphics software used for a wide range of applications, including modeling, animation, simulation, rendering, compositing, and video editing. It is popular among artists, designers, and developers for creating 3D content such as animations, visual effects, art, 3D games, and interactive applications.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-4'
                defaultMessage='How to pay'
              />}
              content={<FormattedMessage
                id='services-questions-p4'
                defaultMessage='You can pay online by credit or debit cards and payments by transfers.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

          </div>
        </section>
      </main>


      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default Services;