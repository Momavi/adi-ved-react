import { StarsSVG, PlaceSVG, CloackSVG, Cat } from "images/index";
import { memo } from "react";

import "./home.scss";

import { useDispatch } from "react-redux";
import { showSign } from "@/store/Popup";

const HomePage = memo(() => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showSign());
  };

  return (
    <div className="mt-36 px-3 pb-9 md:mt-36 xl:mt-44">
      <div className="flex">
        <div className="w-full lg:w-1/2">
          <div className="relative md:pr-8">
            <div className="relative w-fit">
              <p className="logo ml-12 text-4xl preoldmb:text-5xl lg:text-6xl">
                “АДИ-ВЕД”
              </p>
            </div>
            <p className="text-sec mb-16 text-end text-2xl lg:text-4xl">
              Забота о <span className="italic-text">вашем</span> любимце
            </p>
            <blockquote className="text-sec relative mb-16 break-words indent-10 preoldmb:text-xl sm:text-2xl md:text-start md:indent-20">
              Наша команда состоит из
              <span className="relative">
                <span
                  className="absolute -inset-0 -skew-y-1 bg-[#37daffbb]"
                  aria-hidden="true"
                ></span>
                <span className="italic-text-sec relative">
                  {" "}
                  опытных ветеринаров{" "}
                </span>
              </span>
              и медицинских сестер, которые обладают глубоким знанием и опытом в
              области здоровья животных. Мы уделяем внимание индивидуальным
              потребностям каждого питомца и его владельца, и всегда готовы
              предоставить наилучшие рекомендации и советы по уходу за животным.
            </blockquote>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <div className="flex flex-col items-center">
              <label
                className="btn-std btn mb-3 text-white"
                onClick={() => handleClick()}
              >
                Записаться
              </label>
              <div className="flex items-center">
                <span className="mr-2">
                  <StarsSVG />
                </span>
                <p className="text-sec">100+ положительных отзывов</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 lg:block">
          <div className="container-cat ml-5 transition duration-300 ease-in-out hover:scale-105 xl:ml-36 xl:hover:-translate-x-1">
            <img
              className="cat duration-0 transition hover:duration-150"
              src={Cat}
              alt="Cat"
            />
          </div>
        </div>
      </div>
      <div className="text-subsecound mt-8 flex flex-col items-center justify-between text-sm sm:flex-row md:text-base">
        <div className="mb-5 flex items-center sm:mb-0">
          <span className="mr-2">
            <PlaceSVG />
          </span>
          <p>улица Дмитриевского, дом 1, этаж 1</p>
        </div>

        <div className="flex items-center">
          <span className="mr-2">
            <CloackSVG />
          </span>
          <div className="flex flex-col items-end">
            <p>Время работы: Круглосуточно</p>
            <p>(Перерыв 10:00 - 11:00)</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HomePage;
