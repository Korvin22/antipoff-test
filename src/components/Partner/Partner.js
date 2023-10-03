import initialColleagues from "../../vendor/constants";
import { Link } from "react-router-dom";
import phone from "../../images/tel.svg";
import mail from "../../images/mail.svg";
function Partner(props) {
  return (
    <>
      <header className="partner__header">
        <Link className="partner__button_back" to="/">
          Назад
        </Link>
        <div className="partner__info">
          <img
            src={initialColleagues[0].image}
            className="partner__image"
            alt="partner"
          ></img>
          <div className="partner__text">
            <h2 className="partner__title">{initialColleagues[0].name}</h2>
            <p className="partner__subtitle">Партнер</p>
          </div>
        </div>
        <button className="partner__button">Выход</button>
      </header>
      <div className="partner__wrapper">
        <p className="partner__descr">
          Клиенты видят в нем эксперта по вопросам разработки комплексных
          решений финансовых продуктов, включая такие аспекты, как
          организационная структура, процессы, аналитика и ИТ-компоненты. Он
          помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи,
          используя самые современные аналитические инструменты.
          <br />
          <br />
          В работе с клиентами недостаточно просто решить конкретную проблему
          или помочь справиться с трудностями. Не менее важно уделять внимание
          обмену знаниями: "Один из самых позитивных моментов — это осознание
          того, что ты помог клиенту перейти на совершенно новый уровень
          компетентности, уверенность в том, что после окончания проекта у
          клиента есть все необходимое, чтобы дальше развиваться
          самостоятельно".
          <br />
          <br />
          Помимо разнообразных проектов для клиентов финансового сектора,
          Королёв ведет активную предпринимательскую деятельность. Он является
          совладельцем сети клиник эстетической медицины в Швейцарии,
          предлагающей инновационный подход к красоте, а также инвестором других
          бизнес-проектов.
        </p>
        <div className="partner__contacts">
          <p className="partner__number">
            <img className="partner__icon" src={phone} alt="phone" />
            +7 (954) 333-44-55
          </p>
          <p className="partner__mail">
            <img className="partner__icon" src={mail} alt="mail" />
            sykfafkar@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}

export default Partner;
