import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/UseForm";
import { useEffect, useState } from "react";
import { apiAuth } from "../../utils/Api.auth";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const [isRender, setIsRender] = useState(false);
  function linkRender() {
    setIsRender(true);
  }

  useEffect(() => {
    linkRender();
  }, [isRender]);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdateRegistration({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Регистрация</h2>
        <form
          className="register__form"
          name="email-and-password"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="register__label">
            Имя
          </label>
          <input
            required
            type="text"
            name="name"
            className="register__input"
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            id="name"
            onChange={handleChange}
            value={values.name}
          />
          <span className="register__error">{errors.name}</span>
          <label htmlFor="email" className="register__label">
            Электронная почта
          </label>
          <input
            required
            type="email"
            name="email"
            className="register__input"
            placeholder="Email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          <span className="register__error">{errors.email}</span>
          <label htmlFor="password" className="register__label">
            Пароль
          </label>
          <input
            required
            type="password"
            name="password"
            className="register__input"
            placeholder="Пароль"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
          <label htmlFor="password" className="register__label">
            Подтвердите пароль
          </label>
          <input
            required
            type="password2"
            name="password2"
            className="register__input"
            placeholder="Повторите пароль"
            id="password2"
            value={values.password}
            onChange={handleChange}
          />
          <span className="register__error">{errors.password}</span>
          <button
            className={`${
              isValid ? "register__button" : "register__button_disabled"
            }`}
            type="submit"
            disabled={`${isValid ? "" : "disabled"}`}
          >
            Войти
          </button>
        </form>
        <p className="profile__error">{props.message}</p>
      </div>
    </div>
  );
}

export default Register;
