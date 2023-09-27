import Colleague from "../Colleauge/Colleague";
import im1 from "../../images/Ellipse.svg";
import im2 from "../../images/Ellipse (1).svg";
import im3 from "../../images/Ellipse (2).svg";
import im4 from "../../images/Ellipse (3).svg";
import im5 from "../../images/Ellipse (4).svg";
import im6 from "../../images/Ellipse (5).svg";
import im7 from "../../images/Ellipse (6).svg";
import im8 from "../../images/Ellipse (7).svg";
function Colleagues(props) {
  const initialColleagues = [
    {
      name: "Артур Королев",
      image: im1,
    },
    {
      name: "Ольга Ильина",
      image: im2,
    },
    {
      name: "Замир Орлов",
      image: im3,
    },
    {
      name: "Даниил Новиков",
      image: im4,
    },
    {
      name: "Диана Андреева",
      image: im5,
    },
    {
      name: "Захар Романов",
      image: im6,
    },
    {
      name: "Егор Волков",
      image: im7,
    },
    {
      name: "Кира Попова",
      image: im8,
    },
  ];

  return (
    <>
     
        <div className="colleagues">
          {initialColleagues.slice(0, props.amount).map((colleague) => {
            return (
              <Colleague
                name={colleague.name}
                src={colleague.image}
                alt={colleague.name}
              />
            );
          })}
        </div>
      
    </>
  );
}

export default Colleagues;
