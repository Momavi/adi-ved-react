import Stars from "../../images/stars.svg";
import Place from "../../images/place.svg";
import Cloack from "../../images/cloack.svg";
import Cat from "../../images/Cat.png";
import "./home.scss";

function HomePage() {
  function methodDoesNotExist(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="px-3 pb-9">
      <div className="mt-32 mb-16 flex">
        <div className="w-full lg:w-1/2">
          <div className="relative pr-8">
            <div className="relative w-fit">
              <p className="logo ml-12 text-4xl preoldmb:text-5xl lg:text-6xl">
                “АДИ-ВЕД”
              </p>
            </div>
            <p className="text-sec mb-16 text-end text-2xl lg:text-4xl">
              Забота о <span className="italic-text">вашем</span> любимце
            </p>
            <p className="text-sec mb-16 indent-10 preoldmb:text-xl sm:text-2xl md:text-start md:indent-20">
              Наша команда состоит из
              <span className="italic-text-sec"> опытных ветеринаров </span>и
              медицинских сестер, которые обладают глубоким знанием и опытом в
              области здоровья животных. Мы уделяем внимание индивидуальным
              потребностям каждого питомца и его владельца, и всегда готовы
              предоставить наилучшие рекомендации и советы по уходу за животным.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <div className="flex flex-col items-center">
              <button className="btn-std mb-3">Записаться</button>
              <div className="flex items-center">
                <img src={Stars} alt="Stars" className="mr-2" />
                <p className="text-sec">100+ положительных отзывов</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 lg:block">
          <div className="container-cat ml-5 xl:ml-36">
            <img className="cat" src={Cat} alt="Cat" />
          </div>
        </div>
      </div>
      <div className="text-subsecound flex flex-col items-center justify-between text-sm sm:flex-row md:text-base">
        <div className="mb-5 flex items-center sm:mb-0">
          <img src={Place} alt="Place" className="mr-2" />
          <p>улица Дмитриевского, дом 1, этаж 1</p>
        </div>

        <div className="flex items-center">
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
