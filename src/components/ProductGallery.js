const ProductGallery = ({ gallery={} }) => {
  const { first = {}, second = {}, third = {} } = gallery;
  return (
    <section className="gallery">
      <img className="img-1" src={first.desktop} alt="img-gallery"></img>
      <img className="img-2" src={second.desktop} alt="img-gallery"></img>
      <img className="img-3" src={third.desktop} alt="img-gallery"></img>
    </section>
  );
};

export default ProductGallery;
