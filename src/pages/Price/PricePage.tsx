import {
  ArrowDownLeftSVG,
  BottleSVG,
  ScissorsSVG,
  SyringeSVG,
  SurgicalSVG,
} from "images/index";
import "./Price.scss";

interface PriceItemProps {
  title: string;
  price: number;
}

function PriceItem({ title, price }: PriceItemProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-500 py-2 dark:border-gray-600">
      <p className="">{title}</p>
      <p className="">от {price}р</p>
    </div>
  );
}

function PricePage() {
  return (
    <div className="Montserrat mt-24 px-16 md:mt-24 xl:mt-24">
      <div className="mb-6 flex justify-between">
        <div className="w-1/3">
          <div className="price-bg analizy-bg mb-10 rounded-xl px-6 pt-3 pb-4">
            <div className="flex items-center justify-between px-2 pb-8 pt-[6px]">
              <span className="flex items-end">
                <ArrowDownLeftSVG />
                <span className="pb-2 pl-2 text-2xl font-bold">Анализы</span>
              </span>
              <BottleSVG />
            </div>
            <div>
              <PriceItem title="крови у кошек" price={1000} />
              <PriceItem title="крови у собак" price={1000} />
              <PriceItem
                title="биохимический анализ крови собаки"
                price={1500}
              />
              <PriceItem
                title="биохимический анализ крови кошки"
                price={1500}
              />
              <PriceItem title="на пироплазмоз" price={1500} />
              <PriceItem title="на анализ на панлейкопению" price={1500} />
              <PriceItem title="на токсоплазмоз у кошки" price={1500} />
            </div>
          </div>
          <div className="price-bg gruming-bg rounded-xl px-6 pt-3 pb-4">
            <div className="flex items-center justify-between pb-8">
              <span className="flex items-end">
                <ArrowDownLeftSVG />
                <span className="pb-2 pl-2 text-2xl font-bold">Груминг</span>
              </span>
              <ScissorsSVG />
            </div>
            <div>
              <PriceItem title="крови у кошек" price={1000} />
              <PriceItem title="крови у собак" price={1000} />
              <PriceItem
                title="биохимический анализ крови собаки"
                price={1500}
              />
              <PriceItem
                title="биохимический анализ крови кошки"
                price={1500}
              />
              <PriceItem title="на пироплазмоз" price={1500} />
              <PriceItem title="на анализ на панлейкопению" price={1500} />
              <PriceItem title="на токсоплазмоз у кошки" price={1500} />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="price-bg procedure-bg mb-10 rounded-xl px-6 pt-3 pb-4">
            <div className="flex items-center justify-between pb-8">
              <span className="flex items-end">
                <ArrowDownLeftSVG />
                <span className="pb-2 pl-2 text-2xl font-bold">Процедуры</span>
              </span>
              <SyringeSVG />
            </div>
            <div>
              <PriceItem title="крови у кошек" price={1000} />
              <PriceItem title="крови у собак" price={1000} />
              <PriceItem
                title="биохимический анализ крови собаки"
                price={1500}
              />
              <PriceItem
                title="биохимический анализ крови кошки"
                price={1500}
              />
              <PriceItem title="на пироплазмоз" price={1500} />
              <PriceItem title="на анализ на панлейкопению" price={1500} />
              <PriceItem title="на токсоплазмоз у кошки" price={1500} />
            </div>
          </div>
          <div className="price-bg syringe-bg mb-16 rounded-xl px-6 pt-3 pb-4">
            <div className="flex items-center justify-between pb-8">
              <span className="flex items-end">
                <span className="pb-2 pl-2 text-2xl font-bold">
                  Хирургические процедуры
                </span>
              </span>
              <SurgicalSVG />
            </div>
            <div className="align-center flex h-32 flex-col items-center justify-center">
              <span className="Montserrat mb-6">
                Оценивается индивидуально по этой таблице
              </span>
              <label
                htmlFor="signup"
                className="nav-btn h-8 cursor-pointer text-white"
              >
                таблица
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePage;
