import { useState } from "react";
import { Transition } from "react-transition-group";

function LoginPage() {
  const [selectForm, setSelectForm] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setRegister] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
    setSelectForm(!selectForm);
  };

  const handleRegister = () => {
    setRegister(!isRegister);
    setSelectForm(!selectForm);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="relative mt-48 flex h-full w-full items-center justify-center">
      <Transition
        appear={true}
        in={selectForm}
        timeout={{
          enter: 200,
          exit: 200,
        }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div
            className={`card absolute mt-72 w-96 bg-base-100 shadow-xl dark:bg-base-100 ${
              state === "entered" ? "" : "opacity-0"
            }`}
          >
            <div className="card-body items-center text-center">
              <p className="card-title mb-5 text-3xl">Вход в сервис</p>
              <p>
                На этой странице расположена электронная версия вашей мед карты
              </p>
              <div className="card-actions mt-8">
                <div className="flex">
                  <div className="pr-6">
                    <button
                      className="btn-accent btn border-0 bg-[#37daffae]"
                      onClick={handleRegister}
                    >
                      Зарегистрироваться
                    </button>
                  </div>
                  <button
                    className="btn-accent btn border-0 bg-[#37daffae]"
                    onClick={handleLogin}
                  >
                    Авторизоваться
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>

      <Transition
        appear={true}
        in={isLogin}
        timeout={{
          enter: 200,
          exit: 200,
        }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div
            className={`card w-96 bg-base-100 shadow-xl transition-all duration-300 dark:bg-base-100 ${
              state === "entered" ? "" : "opacity-0"
            }`}
          >
            <div className="card-body items-center text-center">
              <label
                className="btn-sm btn-circle btn absolute right-2 top-2"
                onClick={handleLogin}
              >
                ✕
              </label>
              <p className="card-title mb-5 text-3xl">Авторизация</p>
              <form className="mt-8">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Ваша почта или телефон</span>
                  </label>
                  <input
                    type="email"
                    placeholder="mail@mail.ru"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Ваш пароль</span>
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <button className="btn-accent btn mt-5 border-0 text-white">
                  Войти
                </button>
              </form>
            </div>
          </div>
        )}
      </Transition>

      <Transition
        appear={true}
        in={isRegister}
        timeout={{
          enter: 200,
          exit: 200,
        }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div
            className={`card w-96 bg-base-100 shadow-xl transition-all duration-300 dark:bg-base-100 ${
              state === "entered" ? "" : "opacity-0"
            }`}
          >
            <div className="card-body items-center text-center">
              <label
                className="btn-sm btn-circle btn absolute right-2 top-2"
                onClick={handleRegister}
              >
                ✕
              </label>
              <p className="card-title mb-5 text-3xl">Регистрация</p>
              <p>Введите ваше имя, почту, телефон и пароль</p>
              <form className="mt-8">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Ваша почта</span>
                  </label>
                  <input
                    type="email"
                    placeholder="mail@mail.ru"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Ваш телефон</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="8 999 *** ** **"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Ваш пароль</span>
                  </label>
                  <input
                    type="password"
                    placeholder="*******"
                    className="input-bordered input w-full max-w-xs text-white"
                  />
                </div>
                <button className="btn-accent btn mt-5 border-0 text-white">
                  Войти
                </button>
              </form>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export default LoginPage;
