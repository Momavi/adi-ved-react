import Stars from "../../images/stars.svg";
import Place from "../../images/place.svg";
import Cloack from "../../images/cloack.svg";
import Cat from "../../images/Cat.png";
import "./home.scss";

function HomePage() {
  return (
    <div>
      <div className="mt-32 mb-16 flex">
        <div className="w-1/2">
          <div className="relative pr-8">
            <div className="relative w-fit">
              <p className="logo ml-12">“АДИ-ВЕД”</p>
            </div>
            <div className="logo-shadow"></div>
            <p className="text-sec mb-16 text-end text-4xl">
              Забота о <span className="italic-text">вашем</span> любимце
            </p>
            <p className="text-sec mb-16 text-start indent-20 text-2xl">
              Наша команда состоит из
              <span className="italic-text-sec"> опытных ветеринаров </span>и
              медицинских сестер, которые обладают глубоким знанием и опытом в
              области здоровья животных. Мы уделяем большое внимание
              индивидуальным потребностям каждого питомца и его владельца, и
              всегда готовы предоставить наилучшие рекомендации и советы по
              уходу за вашими животными.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div>
              <button className="btn-std mb-3">Записаться</button>
              <div className="flex items-center">
                <img src={Stars} alt="Stars" className="mr-2" />
                <p className="text-sec">100+ положительных отзывов</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="container-cat ml-48">
            <img className="cat" src={Cat} alt="Cat" />
          </div>
        </div>
      </div>
      <div className="text-subsecound flex justify-between">
        <div className="flex items-center">
          <img src={Place} alt="Place" className="mr-2" />
          <p>улица Дмитриевского, дом 1, этаж 1</p>
        </div>

        <div className="flex">
          <img src={Cloack} alt="Cloack" className="mr-2" />
          <div className="flex flex-col items-end">
            <p>Время работы: Круглосуточно</p>
            <p>(Перерыв 10:00 - 11:00)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
