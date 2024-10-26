import { useState } from "react";
import GalleryCard from "./childComponents/GalleryCard";

const Gallery = () => {
  const [images, setImages] = useState([
    {
      image: "../../public/imgs/gallery-01.png",
    },
    {
      image: "../../public/imgs/gallery-02.png",
    },
    {
      image: "../../public/imgs/gallery-04.png",
    },
    {
      image: "../../public/imgs/discount2.png",
    },
    {
      image: "../../public/imgs/work-steps-3.png",
    },
    {
      image: "../../public/imgs/work-steps-1.png",
    },
    
  ])
  return (
    <div className="gallery">
      <div className="title">
        <span></span>
        <h2>GALLERY</h2>
        <span></span>
      </div>
      <div className="images">

      {
        images.map((image, index) => (
          <GalleryCard key={index} image={image.image} />
        ))
      }
      </div>
        
      </div>
  
  );
}

export default Gallery;