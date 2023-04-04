import { useState } from "react";
import "./SignUp.scss";

function SignUp() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (event: { target: { value: string; }; }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <span>
      <input type="checkbox" id="signup" className="modal-toggle" />
      <label htmlFor="signup" className="modal">
        <label className="modal-box relative" htmlFor="">
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
              <label className="label">
                <span className="label-text">Выберите врача</span>
              </label>
              <select
                value={selectedOption}
                onChange={handleChange}
                className="select-bordered select"
              >
                <option disabled selected>
                  Врач
                </option>
                <option value="option1">Наталья Викторовна Овчинникова</option>
                <option>Елена Николаевна Вертушкина</option>
                <option>Татьяна Александровна Юшина</option>
                <option>Максим Алексеевич Спирин</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Выберите время</span>
              </label>
              <select
                value={selectedOption}
                onChange={handleChange}
                className="select-bordered select"
              >
                <option disabled selected>
                  Время
                </option>
                <option value="option1">01.01.1971</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Выберите услугу</span>
              </label>
              <select
                value={selectedOption}
                onChange={handleChange}
                className="select-bordered select"
              >
                <option disabled selected>
                  Услуга
                </option>
                <option value="option1">Кастрация</option>
              </select>
            </div>

            <button className="signup-btn btn mt-16">записаться</button>
          </div>
        </label>
      </label>
    </span>
  );
}

export default SignUp;
