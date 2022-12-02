import ambience from '../assets/images/ambience.jpg';
import cafe from '../assets/images/young-woman-eating-croissants-cafe_1303-20408.webp';
import dusky from '../assets/images/dusky.png';

const About = () => {
  return (
    <section className="page-section lg" id="about-us">
      <div className="container">
        <div className="text-media">
            <div className="text" data-aos="fade-left">
              <h4>Our Story</h4>
              <p>
              Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="media" data-aos="fade-down" data-aos-duration="5000">
              <img src={ambience} alt="ambience"/>
            </div>
        </div>
        <div className="text-media">
          <div className="text" data-aos="fade-right">
            <h4>Our Values</h4>
            <p>
            Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="media" data-aos="fade-down">
            <img src={cafe} alt="cafe"/>
          </div>
        </div>
        <div className="text-media">
          <div className="text" data-aos="fade-left">
            <h4>Quality & Sustainability</h4>
            <p>
            Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="media" data-aos="fade-down">
            <img src={dusky} alt="dusky"/>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;