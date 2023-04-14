import { Key, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import { Person1, Person2, Person3, Person4 } from "@/images";
import { SwiperNavButton } from "@/components/SwiperNavButton";
import { CSSTransition } from "react-transition-group";
import uuid from "react-uuid";

import "./Employess.scss";

function EmployeesPage() {
  const [currentEmployeesID, setCurrentEmployees] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  const swiperRef = useRef(null);

  function changeCurrentEmployees(index: number) {
    if (showMessage) {
      setShowMessage(false);
      setCurrentEmployees(index);
      setShowMessage(true);
    } else {
      setCurrentEmployees(index);
    }
  }

  async function asyncChangeReviews() {
    setShowMessage(!showMessage);
  }

  function showReviews() {
    if (showMessage) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setShowMessage(false);
    } else {
      asyncChangeReviews().then(() => scrolleed());
    }
  }

  function scrolleed() {
    const element = document.getElementById("reviews"); // получаем элемент по id
    if (!element) {
      return;
    }
    const rect = element.getBoundingClientRect(); // получаем координаты элемента
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // текущая позиция скролла
    window.scrollTo({
      top: rect.top - scrollTop - 100,
      behavior: "smooth",
    });
  }

  const employeess: any = [
    {
      name: "Наталья Викторовна Овчинникова",
      speciality: "Ветеринар, врач-терапевт, ветеринарный невролог",
      img: Person1,
      experience: 31,
      id: uuid(),
      review: [
        {
          name: "Елена",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
        {
          name: "Иван",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
        {
          name: "Аноним",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
        {
          name: "Вика",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
        {
          name: "Вика",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
      ],
    },
    {
      name: "Максим Алексеевич Спирин",
      speciality: "Ветеринар, ветеринарный ортопед, ветеринарный хирург",
      img: Person2,
      experience: 28,
      id: uuid(),
      review: [
        {
          name: "Елена",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
        {
          name: "Иван",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
        {
          name: "Аноним",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
        {
          name: "Вика",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
      ],
    },
    {
      name: "Татьяна Александровна Юшина",
      speciality: "Ветеринар, ветеринарный хирург",
      img: Person3,
      experience: 23,
      id: uuid(),
      review: [
        {
          name: "Елена",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
        {
          name: "Иван",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
        {
          name: "Аноним",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
      ],
    },
    {
      name: "Елена Николаевна Вертушкина",
      speciality: "Ветеринар, ветеринарный хирург",
      img: Person4,
      experience: 23,
      id: uuid(),
      review: [
        {
          name: "Елена",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
        {
          name: "Иван",
          date: "22 июля 2020",
          text: "Была в этой клинике не единожды. Хожу всегда к Елене Николаевне. Моего Йорка спасала не один раз. И оперировались мы у неё. Собаке 15й год. Спасибо Вам огромное.",
        },
      ],
    },
  ];

  function getReviewText(count: number) {
    if (count === 1) {
      return "отзыв";
    } else if (count >= 2 && count <= 5) {
      return "отзыва";
    } else {
      return "отзывов";
    }
  }

  interface Review {
    name: string;
    date: string;
    text: string;
    id: string;
  }

  return (
    <>
      <CSSTransition
        in={true}
        nodeRef={swiperRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <Swiper
          effect={"coverflow"}
          loop
          ref={swiperRef}
          centeredSlides
          coverflowEffect={{
            rotate: 15,
            stretch: 100,
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
          onSlideChange={(swiper) => changeCurrentEmployees(swiper.realIndex)}
          modules={[Navigation, EffectCoverflow]}
        >
          {employeess.map(
            (
              { name, speciality, img, experience, review }: any,
              index: number
            ) => (
              <SwiperSlide key={name}>
                <div className="card w-80 border-2 border-neutral-200 bg-base-300 drop-shadow-xl dark:border-neutral-800 sm:w-96">
                  <figure>
                    <img src={img} alt={img} />
                  </figure>
                  <div className="card-body relative items-center rounded-2xl bg-base-100 text-center">
                    <div className="rating rating-lg absolute -top-4 ">
                      <div>
                        <input
                          disabled
                          type="radio"
                          name="rating-8"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          disabled
                          type="radio"
                          name="rating-8"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          disabled
                          type="radio"
                          name="rating-8"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          disabled
                          type="radio"
                          name="rating-8"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          disabled
                          type="radio"
                          name="rating-8"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>{speciality}</p>
                    <p>Стаж - {experience} лет</p>
                    <div className="card-actions mt-4 justify-center">
                      <button className="employeess-btn btn-primary btn-wide btn mb-3">
                        Записаться
                      </button>
                      <button
                        className="employeess-review-btn btn-primary btn-wide btn"
                        onClick={() => showReviews()}
                      >
                        <span>
                          {showMessage && currentEmployeesID === index
                            ? "Закрыть"
                            : `${review.length} ${getReviewText(
                                review.length + 1
                              )}`}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
          <SwiperNavButton />
        </Swiper>
      </CSSTransition>
      <div className="container mx-auto mb-24">
        <div className="flex flex-col items-center">
          {employeess.map(
            (
              { review }: { review: Review[] },
              index: Key | null | undefined
            ) => (
              <CSSTransition
                key={index}
                in={currentEmployeesID === index && showMessage}
                nodeRef={nodeRef}
                timeout={300}
                classNames="alert"
                unmountOnExit
              >
                <div
                  ref={nodeRef}
                  className="flex flex-wrap items-center justify-center"
                >
                  {review.map(({ name, date, text, id }, index) => (
                    <div
                      className="card card-side mx-4 mb-8 border border-slate-100/90 bg-base-100/10 shadow-xl dark:border-slate-600/30 dark:bg-base-100 sm:w-96"
                      key={id}
                    >
                      <div
                        className="card-body"
                        id={index === 0 ? "reviews" : ""}
                      >
                        <div className="flex justify-between">
                          <div>
                            <h2 className="card-title">{name}</h2>
                            <span className="text-slate-400">{date}</span>
                          </div>
                          <div className="rating rating-md">
                            <input
                              disabled
                              type="radio"
                              name={"rating-" + index}
                              className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                              disabled
                              type="radio"
                              name={"rating-" + index}
                              className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                              disabled
                              type="radio"
                              name={"rating-" + index}
                              className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                              disabled
                              type="radio"
                              name={"rating-" + index}
                              className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                              disabled
                              type="radio"
                              name={"rating-" + index}
                              className="mask mask-star-2 bg-orange-400"
                              checked
                            />
                          </div>
                        </div>
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CSSTransition>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default EmployeesPage;
