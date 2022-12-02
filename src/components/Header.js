import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="nav-bar">
        <img src={logo} width="200" data-aos="fade-right" data-aos-duration="1500" alt="Logo" />
        <ul className="nav">
          <li className="list-item" data-aos="fade-down" data-aos-duration="500" data-aos-delay="250">
            <a href="#home">Home</a>
          </li>
          <li className="list-item" data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">
            <a href="#products">Products</a>
          </li>
          <li className="list-item" data-aos="fade-down" data-aos-duration="500" data-aos-delay="1000">
            <a href="#about-us">About Us</a>
          </li>
          <li className="list-item" data-aos="fade-down" data-aos-duration="500" data-aos-delay="1500">
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}
export default Header;