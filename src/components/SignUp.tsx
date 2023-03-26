import { SignUpPNG } from "@/images";
import { SetStateAction, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import "./SignUp.scss";

function SignUp() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (
    newValue: SetStateAction<{ startDate: Date; endDate: number }>
  ) => {
    console.log("newValue:", newValue);
    setValue(newValue);
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
            <img src={SignUpPNG} alt="" />
            <h3 className="text-lg font-bold">Запись на прием</h3>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Выберите врача</span>
              </label>
              <select className="select-bordered select">
                <option disabled selected>
                  Врач
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Выберите время</span>
              </label>
              <select className="select-bordered select">
                <option disabled selected>
                  Время
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Выберите услугу</span>
              </label>
              <select className="select-bordered select">
                <option disabled selected>
                  Услуга
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>

            <button className="btn-accent btn mt-8">записаться</button>
          </div>
        </label>
      </label>
    </span>
  );
}

export default SignUp;
