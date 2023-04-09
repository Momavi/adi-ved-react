import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import { Person1, Person2, Person3, Person4 } from "@/images";
import { SwiperNavButton } from "@/components/SwiperNavButton";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";

import "./Employess.scss";

function EmployeesPage() {
  const [currentEmployees, setCurrentEmployees] = useState(0);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        loop
        centeredSlides
        coverflowEffect={{
          rotate: 25,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1366: {
            slidesPerView: 2,
            spaceBetween: -300,
          },
          1536: {
            slidesPerView: 2,
            spaceBetween: -600,
          },
        }}
        onSlideChange={(swiper) => setCurrentEmployees(swiper.realIndex)}
        modules={[Navigation, EffectCoverflow]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          <div className="card w-96 border-2 border-neutral-200 bg-base-300 drop-shadow-2xl dark:border-neutral-800">
            <figure>
              <img src={Person2} alt="Person2" />
            </figure>
            <div className="card-body relative items-center rounded-2xl bg-base-100 text-center">
              <div className="rating rating-lg absolute -top-4 ">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  readOnly
                />
              </div>
              <h2 className="card-title justify-center">
                Максим Алексеевич Спирин
              </h2>
              <p>Ветеринар, ветеринарный ортопед, ветеринарный хирург</p>
              <p>Стаж - 28 лет</p>
              <div className="card-actions mt-4 justify-center">
                <button className="employeess-btn btn-primary btn-wide btn">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 h-5/6 border-2 border-neutral-200 bg-base-300 drop-shadow-2xl dark:border-neutral-800">
            <figure>
              <img src={Person1} alt="Person1" />
            </figure>
            <div className="card-body relative items-center rounded-2xl bg-base-100 text-center">
              <div className="rating rating-lg absolute -top-4 ">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  readOnly
                />
              </div>
              <h2 className="card-title">Наталья Викторовна Овчинникова</h2>
              <p>Ветеринар, врач-терапевт, ветеринарный невролог</p>
              <p>Стаж - 31 года</p>
              <div className="card-actions mt-4 justify-center">
                <button className="employeess-btn btn-primary btn-wide btn">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 border-2 border-neutral-200 bg-base-300 drop-shadow-2xl dark:border-neutral-800">
            <figure>
              <img src={Person3} alt="Person3" />
            </figure>
            <div className="card-body relative items-center rounded-2xl bg-base-100 text-center">
              <div className="rating rating-lg absolute -top-4 ">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
              </div>
              <h2 className="card-title">Елена Николаевна Вертушкина</h2>
              <p>Ветеринар, ветеринарный хирург</p>
              <p>Стаж - 23 года</p>
              <div className="card-actions mt-4 justify-center">
                <button className="employeess-btn btn-primary btn-wide btn">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 border-2 border-neutral-200 bg-base-300 drop-shadow-2xl dark:border-neutral-800">
            <figure>
              <img src={Person4} alt="Person4" />
            </figure>
            <div className="card-body relative items-center rounded-2xl bg-base-100 text-center">
              <div className="rating rating-lg absolute -top-4 ">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
              </div>
              <h2 className="card-title">Татьяна Александровна Юшина</h2>
              <p>Ветеринар, ветеринарный хирург</p>
              <p>Стаж - 23 года</p>
              <div className="card-actions mt-4 justify-center">
                <button className="employeess-btn btn-primary btn-wide btn">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperNavButton />
      </Swiper>
      <div className="container"></div>
    </>
  );
}

export default EmployeesPage;
