import { Phone, Email, Place } from "images/index";
import Ymap from "components/Ymap";
import "./contact.scss";

function ContactPage() {
  return (
    <div>
      <div className="mx-1 mb-8 mt-24 md:mt-36 lg:mb-24 lg:flex xl:mt-48">
        <div className="Montserrat lg:w-1/2 lg:pr-16">
          <div className="mb-8 text-3xl preoldmb:mb-16 preoldmb:text-5xl lg:mb-32">
            <p>Запись в три</p>
            <p className="contact-gradient-text font-bold italic">
              прикосновения
            </p>
          </div>

          <div className="item-center flex flex-col md:mb-16 lg:items-start">
            <input
              type="text"
              placeholder="Ваше имя"
              className="contact-input mb-8 w-2/3 bg-transparent px-2 py-2"
            />
            <input
              type="text"
              placeholder="Ваш телефон"
              className="contact-input mb-8 w-2/3 bg-transparent px-2 py-2"
            />
            <div className="mb-12 flex w-2/3 flex-col items-center lg:mb-0">
              <button className="contact-btn visible">мы вам позвоним</button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="contact-map h-64 w-full lg:h-full">
            <Ymap />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around px-1 md:flex-row md:px-3">
        <div className="mb-4 flex items-center md:mb-0">
          <img src={Phone} alt="Phone" className="mr-1 h-6" />
          <div>
            <p className="font-semibold">Телефон</p>
            <p>+7 (925) 802-95-54</p>
          </div>
        </div>
        <div className="mb-4 flex items-center md:mb-0">
          <img src={Email} alt="Email" className="mr-1 h-6" />
          <div>
            <p className="font-semibold">Почта</p>
            <p>gmail@gmail.com</p>
          </div>
        </div>

        <div className="mb-4 flex items-center md:mb-0">
          <img src={Place} alt="Email" className="mr-1 h-6" />
          <div>
            <p className="font-semibold">Адрес</p>
            <p>улица Дмитриевского, дом 1, этаж 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
