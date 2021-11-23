import classes from "./GalleryImages.module.scss";

import GalleryImage from "./GalleryImage";

const GalleryImages = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const listOfModalImages = importAll(
    require.context("../../assets/img/gallery", false, /\.(png|jpe?g|svg)$/)
  );
  const listOfImages = importAll(
    require.context(
      "../../assets/img/gallery/thumbnails",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images = listOfImages.map((image, index) => (
    <GalleryImage
      key={image.default}
      image={image.default}
      image2={listOfModalImages[index].default}
    />
  ));
  return (
    <section className={`${classes["gallery-images"]} mar-20`}>
      {images}
    </section>
  );
};

export default GalleryImages;
