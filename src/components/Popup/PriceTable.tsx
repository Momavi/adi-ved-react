import { useDispatch, useSelector } from "react-redux";
import { showPriceTable } from "@/store/Popup";

import "./PriceTable.scss";

function PriceItem({ t, p }: any) {
  return (
    <div className="mb-1 flex w-full justify-between">
      <span>{t}</span>
      <span>{p}</span>
    </div>
  );
}

function PriceTable() {
  const priceTable = useSelector(
    (state: { popup: { priceTable: boolean } }) => state.popup.priceTable
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showPriceTable());
  };

  const handleClickOutside = (event: { target: any; currentTarget: any }) => {
    if (event.target === event.currentTarget) {
      dispatch(showPriceTable());
    }
  };

  const handleCheckboxChange = () => {
    handleClick();
  };

  return (
    <>
      <input
        type="checkbox"
        checked={priceTable}
        id="priceTable"
        className="modal-toggle"
        onChange={handleCheckboxChange}
      />
      <label className="modal" onClick={handleClickOutside}>
        <label className="modal-box relative w-11/12 max-w-5xl">
          <label
            className="btn-sm btn-circle btn absolute right-2 top-2"
            onClick={handleClick}
          >
            ✕
          </label>
          <div className="mb-1 flex flex flex-col items-center">
            <h3 className="mb-4 text-3xl font-bold xl:text-4xl">Таблица цен</h3>
            <p className="mb-8">
              ВНИМАНИЕ: На любые терапевтические услуги, проводимые в период с
              23-00 до 08-00, действует повышающий коэффициент 2
            </p>
            <p className="text-2xl font-bold">Терапевтические услуги</p>
            <p className="mb-12">
              Осмотр включает: сбор анамнеза, визуальная оценка общего состояния
              животного, состояния шерсти, осмотр слизистых ротовой полости,
              носа, осмотр ушей, глаз, зоны ануса и т. д., измерение температуры
              тела, аускультацию, пальпацию.
            </p>
            <div className="w-5/6">
              <PriceItem t="клинический осмотр одного животного" p="1000" />
              <PriceItem t="повторный осмотр" p="600" />
              <PriceItem
                t="развернутая консультация (свыше 30 мин) с осмотром животного"
                p="1500"
              />
              <PriceItem t="консультация без животного" p="500" />
              <PriceItem
                t="консультация по результатам исследований (без животного)"
                p="500"
              />
              <PriceItem t="консультация узкого специалиста" p="2000" />
            </div>
            <span className="mt-8 mb-8">
              фиксация животного сотрудником клиники при проведении процедур и
              манипуляций: взимается всегда при массе животного свыше 30 кг, а
              также при неучастии (отказ, физическая невозможность) владельца
              при проведении процедур/манипуляций
            </span>
            <div className="w-5/6">
              <PriceItem
                t="фиксация кошек с использованием фиксирующей сумки и намордника"
                p="600"
              />
              <PriceItem t="весом до 10 кг" p="300" />
              <PriceItem t="весом от 10,1 до 20 кг" p="400" />
              <PriceItem t="весом от 20,1 до 40 кг" p="500" />
              <PriceItem t="весом свыше 40 кг" p="600" />
            </div>
            <p className="mt-8 text-2xl font-bold">ВАКЦИНАЦИИ:</p>
            <div className="w-5/6">
              <PriceItem
                t="комплексная вакцинация собак и кошек от основных вирусных
                  инфекций импортной вакциной, включая бешенство"
                p="1700"
              />
              <PriceItem
                t="вакцинация собак и кошек от основных вирусных инфекций
                  импортной вакциной, без бешенства"
                p="1300"
              />
              <PriceItem
                t="вакцинация собак и кошек от бешенства импортной вакциной"
                p="1000"
              />
              <PriceItem
                t="вакцинация собак от лептоспироза и бешенства импортой вакциной"
                p="1300"
              />
              <PriceItem
                t="вакцинация собак от лептоспироза импортной вакциной"
                p="1000"
              />
              <PriceItem
                t="вакцинация собак от лептоспироза импортной вакциной"
                p="1000"
              />
              <PriceItem
                t="вакцинация собак и кошек против дерматофитов"
                p="1000"
              />
            </div>
            <span className="my-8">
              Стоимость Вакцинации против инфекций, не входящих в вышеуказанный
              перечень оплачивается по расчету: стоимость осмотра+стоимость
              вакцины+стоимость подкожной инъекции+стоимость шприца{" "}
            </span>
            <p className="text-2xl font-bold">Инъекции:</p>
            <div className="w-5/6">
              <div className="mb-1 flex w-full justify-between">
                <span>подкожная, внутримышечная</span>
                <span>120</span>
              </div>
              <div className="mb-1 flex w-full justify-between">
                <span>подкожно, капельно</span>
                <span>200р + 1 р/мл</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>внутривенная без использования в/в катетера</span>
                <span>600</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>
                  внутривенная без использования в/в катетера мелким животным (2
                  - 6 кг)
                </span>
                <span>700</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>
                  внутривенная без использования в/в катетера особо мелким
                  животным (до 2 кг) и собакам с рыхлой кожей (шарпеи, чау-чау и
                  т.д.)
                </span>
                <span>800</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>
                  серия внутривенных инъекций с использованием в/в катетера
                </span>
                <span>240р + 10 р/мл</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>постановка в/в катетера</span>
                <span>400</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>постановка в/в катетера мелким животным (2 - 6 кг)</span>
                <span>500</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>
                  постановка в/в катетера особо мелким животным (до 2 кг) и
                  собакам с рыхлой кожей (шарпеи, чау-чау и т.д.)
                </span>
                <span>600</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>Снятие в/в катетера</span>
                <span>100</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>внутрисуставная</span>
                <span>500</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>внутритрахеальная</span>
                <span>300</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>
                  капельное введение инфузионных растворов (за 1 расчетную
                  минуту)
                </span>
                <span>10</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>венесекция</span>
                <span>500</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>промывание носа (1 ноздря)</span>
                <span>100 руб + 1 руб/мл</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>дача препаратов внутрь (за 1 единицу дачи)</span>
                <span>100</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>оксигенация (за 1 мин) </span>
                <span>10</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>ректальное/вагинальное исследование</span>
                <span>250</span>
              </div>{" "}
              <div className="mb-1 flex w-full justify-between">
                <span>наложение бинтовой повязки</span>
                <span>300</span>
              </div>{" "}
            </div>
            <p className="text-2xl font-bold mt-8">Обслуживание дренажей и швов:</p>
            <div className="w-5/6">
              <PriceItem t="Промывание дренажа (за штуку)" p="100" />
              <PriceItem t="Постановка дренажа (за штуку)" p="500" />
              <PriceItem t="Снятие дренажа (за штуку)" p="100" />
              <PriceItem t="Снятие швов (за узел/нитку)" p="30" />
              <PriceItem t="Удаление (снятие) клеща (за штуку)" p="200" />
            </div>
          </div>
        </label>
      </label>
    </>
  );
}

export default PriceTable;
