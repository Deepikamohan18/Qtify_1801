import React, { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg"; // Ensure this path is correct
import styles from "./CarouselLeft.module.css";

const CarouselLeft = ({ swiper }) => {
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);
    return () => swiper.off("slideChange", handleSlideChange); // Cleanup listener
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {/* Check if swiper is valid and then render the LeftArrow component */}
      {!isBeginning && swiper && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeft;
