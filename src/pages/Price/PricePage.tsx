import {
  ArrowDownLeftSVG,
  SyringePNG,
  TestTubePNG,
  TrimmerPNG,
  CouchPNG,
} from "images/index";
import "./Price.scss";
import { useDispatch } from "react-redux";
import { showPriceTable } from "@/store/Popup";

function PriceItem({ title, price }: { title: string; price: number }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-500 py-2 dark:border-gray-300/50">
      <p>{title}</p>
      <p>от {price}р</p>
    </div>
  );
}

function PricePage() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showPriceTable());
  };

  return (
    <div className="Montserrat page mt-48 md:mt-24 md:mt-48 xl:mt-48 xl:px-16">
      <div className="mb-6 justify-between px-2 lg:flex lg:px-0">
        <div className="mb-32 lg:mb-0 lg:w-1/2 lg:pr-16 xl:pr-32 2xl:pr-48">
          <div className="mb-32 rounded-3xl border-2 border-slate-400/30 bg-gradient-to-tr from-slate-100/10 to-gray-100/20 px-6 pt-3 pb-4 shadow-lg shadow-cyan-500/30 dark:border-slate-600/30 dark:from-slate-500/10 dark:to-gray-500/20">
            <div className="relative flex items-center justify-between px-2 pb-8 pt-[6px]">
              <span className="flex items-end">
                <ArrowDownLeftSVG />
                <span className="pb-2 pl-2 text-2xl font-bold">Анализы</span>
              </span>
              <div className="price-img">
                <img src={TestTubePNG} alt="SyringePNG" />
              </div>
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
          <div className="rounded-3xl border-2 border-slate-600/40 bg-gradient-to-tr px-6 pt-3 pb-4 shadow-lg shadow-cyan-500/30 dark:from-slate-500/10 dark:to-slate-500/30">
            <div className="relative flex items-center justify-between pb-8">
              <span className="flex items-end">
                <ArrowDownLeftSVG />
                <span className="pb-2 pl-2 text-2xl font-bold">Груминг</span>
              </span>
              <div className="price-img">
                <img src={TrimmerPNG} alt="TrimmerPNG" />
              </div>
            </div>
            <div>
              <PriceItem title="стрижка собак" price={1000} />
              <PriceItem title="стрижка кошек" price={1000} />
              <PriceItem title="стрижка когтей у собак" price={1500} />
              <PriceItem title="стрижка когтей у кошек" price={1500} />
              <PriceItem title="мытье собак" price={1500} />
              <PriceItem title="мытье кошек" price={1500} />
              <PriceItem title="чистка ушей у собак" price={1500} />
              <PriceItem title="чистка ушей у кошек" price={1500} />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="mb-32 rounded-3xl border-2 border-slate-600/40 bg-gradient-to-tl bg-gradient-to-tr px-6 pt-3 pb-4 shadow-lg shadow-cyan-500/30 dark:from-neutral-500/10 dark:to-slate-500/20">
            <div className="relative flex items-center justify-between pb-8">
              <span className="flex items-end">
                <ArrowDownLeftSVG />
                <span className="pb-2 pl-2 text-2xl font-bold">Процедуры</span>
              </span>
              <div className="price-img">
                <img src={SyringePNG} alt="SyringePNG" />
              </div>
            </div>
            <div>
              <PriceItem title="ультразвуковая чистка зубов" price={1000} />
              <PriceItem title="дегельминтизация" price={1000} />
              <PriceItem title="вакцинация" price={1500} />
              <PriceItem title="прививки" price={1500} />
              <PriceItem title="чистка зубов" price={1500} />
              <PriceItem title="УЗИ" price={1500} />
              <PriceItem title="ЭКГ" price={1500} />
            </div>
          </div>
          <div className="mb-16 rounded-3xl border-2 border-slate-700/50 bg-gradient-to-tr px-6 pt-3 pb-4 shadow-lg shadow-cyan-500/30 dark:from-slate-600/40 dark:to-slate-700/70">
            <div className="relative flex items-center justify-between pb-8">
              <span className="flex items-end">
                <span className="pb-2 pl-2 text-2xl font-bold">
                  Хирургические процедуры
                </span>
              </span>
              <div className="price-img">
                <img src={CouchPNG} alt="CouchPNG" />
              </div>
            </div>
            <div className="align-center flex h-32 flex-col items-center justify-center">
              <span className="Montserrat mb-6">
                Оценивается индивидуально по этой таблице
              </span>
              <label
                className="nav-btn h-8 cursor-pointer text-white"
                onClick={() => handleClick()}
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
