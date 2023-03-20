import { ArrowDown, Bottle, Scissors, Syringe } from "images/index";
import "./Price.scss";

interface PriceItemProps {
  title: string;
  price: number;
}

function PriceItem({ title, price }: PriceItemProps) {
  return (
    <div className="flex pb-2 items-center justify-between">
      <p>{title}</p>
      <p>от {price}р</p>
    </div>
  );
}

function PricePage() {
  return (
    <div className="mt-36 px-16 flex justify-between md:mt-36 xl:mt-36">
      <div className="w-1/3 mt">
        <div className="mb-16">
          <div className="mb-8 flex justify-between">
            <span className="flex">
              <img src={ArrowDown} alt="ArrowDown" />
              <span className="pt-1 pl-2">Анализы</span>
            </span>
            <img src={Bottle} alt="Bottle" />
          </div>
          <div className="pl-8">
            <PriceItem title="крови у кошек" price={1000} />
            <PriceItem title="крови у собак" price={1000} />
            <PriceItem title="биохимический анализ крови собаки" price={1500} />
            <PriceItem title="биохимический анализ крови кошки" price={1500} />
            <PriceItem title="на пироплазмоз" price={1500} />
            <PriceItem title="на анализ на панлейкопению" price={1500} />
            <PriceItem title="на токсоплазмоз у кошки" price={1500} />
          </div>
        </div>
        <div>
          <div className="mb-8 flex justify-between">
            <span className="flex">
              <img src={ArrowDown} alt="ArrowDown" />
              <span className="pt-1 pl-2">Груминг</span>
            </span>
            <img src={Scissors} alt="Bottle" />
          </div>
          <div className="pl-8">
            <PriceItem title="крови у кошек" price={1000} />
            <PriceItem title="крови у собак" price={1000} />
            <PriceItem title="биохимический анализ крови собаки" price={1500} />
            <PriceItem title="биохимический анализ крови кошки" price={1500} />
            <PriceItem title="на пироплазмоз" price={1500} />
            <PriceItem title="на анализ на панлейкопению" price={1500} />
            <PriceItem title="на токсоплазмоз у кошки" price={1500} />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-16">
          <div className="mb-8 flex justify-between">
            <span className="flex">
              <img src={ArrowDown} alt="ArrowDown" />
              <span className="pt-1 pl-2">Процедуры</span>
            </span>
            <img src={Syringe} alt="Bottle" />
          </div>
          <div className="pl-8">
            <PriceItem title="крови у кошек" price={1000} />
            <PriceItem title="крови у собак" price={1000} />
            <PriceItem title="биохимический анализ крови собаки" price={1500} />
            <PriceItem title="биохимический анализ крови кошки" price={1500} />
            <PriceItem title="на пироплазмоз" price={1500} />
            <PriceItem title="на анализ на панлейкопению" price={1500} />
            <PriceItem title="на токсоплазмоз у кошки" price={1500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePage;
