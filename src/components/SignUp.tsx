import { SignUpPNG } from "@/images";
import "./SignUp.scss";

function SignUp() {
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
            {/* <img src={SignUpPNG} alt="" /> */}
            <h3 className="font-bold text-4xl mb-12">Запись на прием</h3>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Выберите врача</span>
              </label>
              <select defaultValue="option1" className="select-bordered select">
                <option disabled selected>
                  Врач
                </option>
                <option value="option1">Star Wars</option>
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
              <select defaultValue="option1" className="select-bordered select">
                <option disabled selected>
                  Время
                </option>
                <option value="option1">Star Wars</option>
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
              <select defaultValue="option1" className="select-bordered select">
                <option disabled selected>
                  Услуга
                </option>
                <option value="option1">Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
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
