import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import { Person1, Person2, Person3, Person4 } from "@/images";

import "swiper/css";
import "swiper/css/navigation";

import "./Employess.scss";

function EmployeesPage() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1366: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        grabCursor={true}
        navigation={true}
        modules={[Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card w-96 bg-base-100 drop-shadow-2xl ">
            <figure>
              <img src={Person1} alt="Person1" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Наталья Викторовна Овчинникова</h2>
              <p>Ветеринар, врач-терапевт, ветеринарный невролог</p>
              <p>Стаж - 31 года</p>
              <div className="card-actions mt-4 justify-center">
                <button className="btn-primary btn">Записаться</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 bg-base-100 drop-shadow-2xl">
            <figure>
              <img src={Person2} alt="Person2" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">
                Максим Алексеевич Спирин
              </h2>
              <p>Ветеринар, ветеринарный ортопед, ветеринарный хирург</p>
              <p>Стаж - 28 лет</p>
              <div className="card-actions mt-4 justify-center">
                <button className="btn-primary btn">Записаться</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 bg-base-100 drop-shadow-2xl">
            <figure>
              <img src={Person3} alt="Person3" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Елена Николаевна Вертушкина</h2>
              <p>Ветеринар, ветеринарный хирург</p>
              <p>Стаж - 23 года</p>
              <div className="card-actions mt-4 justify-center">
                <button className="btn-primary btn">Записаться</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 bg-base-100 drop-shadow-2xl">
            <figure>
              <img src={Person4} alt="Person4" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Елена Николаевна Вертушкина</h2>
              <p>Ветеринар, ветеринарный хирург</p>
              <p>Стаж - 23 года</p>
              <div className="card-actions mt-4 justify-center">
                <button className="btn-primary btn">Записаться</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default EmployeesPage;
