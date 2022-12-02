const Products = () => {
  return (
      <section className="page-section" id="products">
      <div className="inner-container">
        <div className="heading"  data-aos="fade-up" data-aos-duration="1500"><p>Our Products</p></div>
        <div className="item-list">
          <div className="item item-1" data-aos="fade-right" data-aos-duration="3000"><p>Snacks</p></div>
          <div className="item item-2" data-aos="zoom-in" data-aos-duration="3000"><p>Shakes</p></div>
          <div className="item item-3" data-aos="fade-left" data-aos-duration="3000" data-aos-easing="ease-in-out-cubic"><p>Coffee & Chai</p></div>
        </div>
      </div>
    </section>
  );
}
export default Products;