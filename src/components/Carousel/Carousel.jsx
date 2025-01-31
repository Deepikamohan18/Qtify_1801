import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Navigation } from "swiper"; // Correct module import

import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary
import styles from "./Carousel.module.css";

// Controls component to handle slide changes
const Controls = ({ swiper, data }) => {
  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0, 1); // Move to first slide when data changes
    }
  }, [swiper, data]);

  return null;
};

const Carousel = ({ data, renderCardComponent }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <ErrorBoundary>
      {" "}
      {/* Wrap with ErrorBoundary */}
      <div className={styles.wrapper}>
        <Swiper
          onSwiper={setSwiperInstance} // Capture Swiper instance
          initialSlide={0}
          spaceBetween={40}
          slidesPerView={"auto"}
          modules={[Navigation]} // Pass Navigation module
          allowTouchMove
          navigation
        >
          <Controls swiper={swiperInstance} data={data} />
          <CarouselLeft swiper={swiperInstance} />
          <CarouselRight swiper={swiperInstance} />
          {data.map((item, index) => (
            <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ErrorBoundary>
  );
};

export default Carousel;
