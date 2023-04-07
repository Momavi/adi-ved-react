import { useSwiper } from "swiper/react";
import "./SwiperNavButton.scss";

export const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btn flex flex-row items-center justify-between">
      <button
        className="swiper-button-prev swiper-btn-prev-self"
        onClick={() => swiper.slidePrev()}
      ></button>
      <button
        className="swiper-button-next swiper-btn-next-self"
        onClick={() => swiper.slideNext()}
      ></button>
    </div>
  );
};
