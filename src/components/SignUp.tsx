import { SetStateAction, useState } from "react";
import "./SignUp.scss";

function SignUp() {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleDoctorChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedDate(event.target.value);
  };

  const handleServiceChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedService(event.target.value);
  };

  return (
    <>
      <input type="checkbox" id="signup" className="modal-toggle" />
      <label htmlFor="signup" className="modal">
        <label className="modal-box relative">
          <label
            htmlFor="signup"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-col items-center">
            <h3 className="mb-12 text-3xl font-bold xl:text-4xl">
              Запись на прием
            </h3>

            <div className="form-control w-full max-w-xs">
              <label htmlFor="doctor" className="label">
                <span className="label-text">Выберите врача</span>
              </label>
              <select
                id="doctor"
                value={selectedDoctor}
                onChange={handleDoctorChange}
                className="select-bordered select"
              >
                <option value="" disabled>
                  Выберите врача
                </option>
                <option value="natalia_ovchinnikova">
                  Наталья Викторовна Овчинникова
                </option>
                <option value="elena_vertushkina">
                  Елена Николаевна Вертушкина
                </option>
                <option value="tatiana_yushina">
                  Татьяна Александровна Юшина
                </option>
                <option value="maxim_spirin">Максим Алексеевич Спирин</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label htmlFor="date" className="label">
                <span className="label-text">Выберите дату</span>
              </label>
              <select
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="select-bordered select"
              >
                <option value="" disabled>
                  Выберите дату
                </option>
                <option value="01_01_1971">01.01.2023</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label htmlFor="service" className="label">
                <span className="label-text">Выберите услугу</span>
              </label>
              <select
                id="service"
                value={selectedService}
                onChange={handleServiceChange}
                className="select-bordered select"
              >
                <option value="" disabled>
                  Выберите услугу
                </option>
                <option value="castration">Кастрация</option>
              </select>
            </div>

            <button className="signup-btn btn mt-16">Записаться</button>
          </div>
        </label>
      </label>
    </>
  );
}

export default SignUp;
