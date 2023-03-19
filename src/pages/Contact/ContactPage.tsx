import Phone from "../../images/phone.svg";
import Email from "../../images/email.svg";
import Place from "../../images/place.svg";
import Ymap from "../../components/Ymap";
import "./contact.scss";

// const YmapStyle = {
//   width: "1200px",
//   height: "600px",
// }

function ContactPage() {
  return (
    <div>
      <div className="mb-32 flex">
        <div className="Montserrat w-1/2 pr-16">
          <p className="mb-32 text-5xl">
            Запись в одно{" "}
            <span className="contact-gradient-text font-bold italic">
              прикосновение
            </span>
          </p>
          <div className="mb-16 flex flex-col">
            <input
              type="text"
              placeholder="Ваше имя"
              className="contact-input mb-8 w-2/3 bg-transparent px-2 py-2"
            />
            <input
              type="text"
              placeholder="Ваш телефон"
              className="contact-input w-2/3 bg-transparent px-2 py-2"
            />
          </div>
          <div className="flex w-2/3 flex-col items-center">
            <button className="contact-btn visible">мы вам перезвоним</button>
          </div>
        </div>
        <div className="w-1/2">
          <Ymap />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={Phone} alt="Phone" className="mr-1 h-6" />
          <div>
            <p className="font-semibold">Телефон</p>
            <p>+7 (925) 802-95-54</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={Email} alt="Email" className="mr-1 h-6" />
          <div>
            <p className="font-semibold">Почта</p>
            <p>gmail@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center">
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
