import React, { useState } from 'react';
// import data
//import { galleryData } from '../data';
// import photo album & lightbox
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../utils/variants';

const GallerySection = ({ product }) => {
  const [index, setIndex] = useState(-1);
  const listingImages = [
    {
      src: product.image,
      original: product.image,
      width: 465,
      height: 540,
    },
    {
      src: product.image,
      original: product.image,
      width: 465,
      height: 540,
    },
    {
      src: product.image,
      original: product.image,
      width: 465,
      height: 540,
    },
    {
      src: product.image,
      original: product.image,
      width: 465,
      height: 540,
    },
    {
      src: product.image,
      original: product.image,
      width: 465,
      height: 540,
    },
  ];

  const slides = listingImages.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));
  console.log(listingImages);
  // destructure gallery data
  return (
    <section className="bg-[#F9F9F9] section relative mt-[40px] lg:mt-0">
      {/* photo album */}
      <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <PhotoAlbum
          layout="rows"
          photos={listingImages}
          onClick={(event, photo, index) => setIndex(index)}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: 'rgba(0,0,0,.9)' } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
    </section>
  );
};

export default GallerySection;
