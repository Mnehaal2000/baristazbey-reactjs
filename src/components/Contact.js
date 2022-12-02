import dlogo from '../assets/images/logo-dark.svg';
import socials from '../assets/images/social-white.png';

const Contact = () => {
  return (
    <section className="page-section sm" id="contact-us">
    <div className="container">
      <div className="logo-f"> 
        <img src={dlogo} width="200" data-aos="fade-right" data-aos-duration="1500" alt="dark-logo"/>
      </div>
      <div className="box-f" data-aos="zoom-in-up" data-aos-duration="1500">
        <div className="info">
          <h4>Quick Links</h4>
          <div className="list">
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className="info">
          <h4>Socials</h4>
          <div className="social-img">
            <img src={socials} width="150" alt="socials"/>
          </div>
        </div>
      </div>
      <div className="copyright"><p>BaristasBay © Copyright 2022. All rights reserved.</p></div>
    </div>
  </section>
  );
}
export default Contact;