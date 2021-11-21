import WidthContainer from "../components/Layout/WidthContainer";
import GalleryImages from "../components/Gallery/GalleryImages";
const Gallery = (props) => {
  return (
    <WidthContainer>
      <h2 className="text-center mar-20 h2">Galeria</h2>
      <GalleryImages />
    </WidthContainer>
  );
};

export default Gallery;
