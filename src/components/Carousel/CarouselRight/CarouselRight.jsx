// import React, { useEffect, useState } from "react";
// import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg"; // Updated to match the correct case
// import { useSwiper } from "swiper/react";
// // import "swiper/css";
// import styles from "./CarouselRight.module.css";

// const CarouselRight = () => {
//   let swiper = useSwiper();
//   const [isEnd, setIsEnd] = useState(swiper.isEnd);

//   useEffect(() => {
//     swiper.on("slideChange", () => {
//       setIsEnd(swiper.isEnd);
//     });
//   }, [swiper]);

//   return (
//     <div className={styles.rightNavigation}>
//       {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
//     </div>
//   );
// };

// export default CarouselRight;


import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg"; 
import styles from "./CarouselRight.module.css";

const CarouselRight = ({ swiper }) => {
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);
    return () => swiper.off("slideChange", handleSlideChange);
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRight;
